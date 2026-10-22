/* eslint-env node */
const guestNames = require('../src/data/guestNames.json');
const approvedNames = new Map(guestNames.map((name) => [name.toLocaleLowerCase(), name]));

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    return res.status(500).json({ error: 'Missing GOOGLE_SCRIPT_URL' });
  }

  try {
    const body =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const submittedName = typeof body?.name === 'string' ? body.name.trim() : '';
    const name = approvedNames.get(submittedName.toLocaleLowerCase());

    if (!name) {
      return res.status(400).json({ error: 'Please select a name from the guest list.' });
    }

    if (!['yes', 'no'].includes(body?.attendance)) {
      return res.status(400).json({ error: 'Please select an attendance response.' });
    }

    const payload = {
      name,
      attendance: body.attendance,
      gift: typeof body.gift === 'string' ? body.gift : '',
      dietary: typeof body.dietary === 'string' ? body.dietary : '',
      message: typeof body.message === 'string' ? body.message : '',
    };

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    let result;
    try {
      result = JSON.parse(text);
    } catch {
      throw new Error('The RSVP spreadsheet returned an unreadable response.');
    }

    if (!response.ok || result.error || result.status !== 'success') {
      return res.status(502).json({ error: result.error || 'The RSVP could not be saved.' });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('RSVP submission failed:', err);
    return res.status(500).json({ error: 'Fetch failed' });
  }
};
