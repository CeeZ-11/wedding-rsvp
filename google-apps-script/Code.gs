const APPROVED_GUESTS = [
  'Salve Regina Vistal',
  'Dani Mae Alcala',
  'Daniel Estrabon',
  'Mercidita Estrabon',
  'Mechiel Tee',
  'Harvey Tee',
  'Elie Tee',
  'Faye Tee',
  'Kay2 Tee',
  'Anthony Alcala',
  'Krizia Belecina',
  'Joshua Estrabon',
  'Emmanuel Estrabon',
  'Mikhael Maranon',
  'Allain Paul Benito',
  'Ferlita Quinimon',
  'Allie Benito',
  'Daniel Yared',
  'John Rey Palacios',
  'Frennel Ong',
  'Andre Ang',
  'Juan Mario Chiu',
  'Kent Galanza',
  'Patricia Villalon',
  'Ryan Delicano',
  'Jhan Arevalo',
  'Carlo James Nayon',
  'Maria Jireh Ortega',
  'Roland Tejada',
  'Mariel Tejada',
  'Ella Tejada',
  'Nissi Tejada',
  'Peter Noquera',
  'Rolen Condez',
  'Helen Condez',
  'Inday Laneres',
  'Dario Estrabon',
  'Pablito Acruz',
  'Mikyla Faith Acruz',
  'Enna Acruz',
  'Brylle Acruz',
  'Brent Paolo Acruz',
  'Fiona Acruz',
  'Francisca Lopez',
  'Jessica Lopez',
  'Allan Vistal',
  'Ekklesia Mission',
  'Irwin Paredes',
  'Sumaya Paino',
  'Faith Victory Villaruz',
  'Carl Villaruz',
  'Neri Nelle Garidan',
  'Marco Garidan',
  'Charlotte Dairocas',
  'Ariel Bargat',
  'Ivy Grace Karaan',
  'Leizyl Resabal',
  'Elvira Lopoy',
  'Mae Angelie Lungay',
  'Ester Marie Doysabos',
  'Mary Cris Arcamo',
  'Vanessa Alderite',
  'Christien Divinagracia',
  'Harold Caceres',
  'Nerilynne Briones',
  'Julie Salcedo',
  'Leo Escalante',
  'Zajarah Ciudadano',
  'Angeli Vistal',
];

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const approvedName = typeof data.name === 'string' && APPROVED_GUESTS.includes(data.name)
      ? data.name
      : '';

    if (!approvedName) {
      return jsonResponse({ error: 'Name is not on the approved guest list.' });
    }
    if (!['yes', 'no'].includes(data.attendance)) {
      return jsonResponse({ error: 'Attendance must be yes or no.' });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
      const lastRow = sheet.getLastRow();
      const existingRows = lastRow > 1
        ? sheet.getRange(2, 1, lastRow - 1, 7).getValues()
        : [];
      const matchingIndexes = existingRows.reduce((indexes, row, index) => {
        if (String(row[0]) === approvedName) {
          indexes.push(index);
        }
        return indexes;
      }, []);
      const targetIndex = matchingIndexes[0] ?? -1;
      const existing = targetIndex >= 0 ? existingRows[targetIndex] : [];
      const values = [[
        approvedName,
        data.attendance,
        data.gift || '',
        data.dietary || '',
        data.message || '',
        data.transportation || existing[5] || '',
        new Date(),
      ]];

      if (targetIndex >= 0) {
        // Remove any duplicate rows left by the old append-only handler.
        matchingIndexes.slice(1).reverse().forEach((index) => sheet.deleteRow(index + 2));
        sheet.getRange(targetIndex + 2, 1, 1, values[0].length).setValues(values);
      } else {
        sheet.appendRow(values[0]);
      }
    } finally {
      lock.releaseLock();
    }

    return jsonResponse({ status: 'success' });
  } catch (error) {
    return jsonResponse({ error: error.message || 'Unable to save RSVP.' });
  }
}

// Keeps the existing /api/gifts endpoint working with the current sheet format.
function doGet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  const data = sheet.getDataRange().getValues();
  const rows = data.slice(1).map((row) => ({
    name: row[0],
    attendance: row[1],
    gift: row[2],
    dietary: row[3],
    message: row[4],
    transportation: row[5],
  }));

  return jsonResponse(rows);
}
