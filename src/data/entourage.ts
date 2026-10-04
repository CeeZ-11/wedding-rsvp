export interface Person {
  name: string;
  role?: string;
  relation?: string;
  image?: string;
}

export interface EntourageData {
  parents: Person[];
  principalSponsors: Person[];
  secondarySponsors: {
    veil: Person[];
    cord: Person[];
  };
  groomSide: {
    bestMan: Person;
    groomsmen: Person[];
  };
  brideSide: {
    maidOfHonor: Person;
    bridesmaids: Person[];
  };
  ceremonyRoles: Person[];
}

export const entourage: EntourageData = {
  parents: [
    { name: "Mr. Daniel Estrabon", role: "Father of the Groom" },
    { name: "Mrs. Mercidita Estrabon", role: "Mother of the Groom" },
    { name: "Mr. Pablito Acruz", role: "Father of the Bride" },
    { name: "Mrs. Francisca Lopez", role: "Grandmother of the Bride" },
  ],

  principalSponsors: [
    { name: "Harvey Tee", role: "Principal Sponsor" },
    { name: "Mechiel Tee", role: "Principal Sponsor" },
    { name: "Faith Victory Villaruz", role: "Principal Sponsor" },
    { name: "Carl Emmanuel Villaruz", role: "Principal Sponsor" },
  ],

  secondarySponsors: {
    veil: [
      { name: "Danimae Alcala", role: "Veil Sponsor" },
      { name: "Anthony Alcala", role: "Veil Sponsor" },
    ],

    cord: [
      { name: "Neri Nelle Garidan", role: "Cord Sponsor" },
      { name: "Romarco Garidan", role: "Cord Sponsor" },
    ],

  },

  groomSide: {
    bestMan: {
      name: "Joshua Estrabon",
      role: "Best Man",
      relation: "Brother of the Groom",
    },
    groomsmen: [
      { name: "Allain Paul Benito", role: "Groomsman", relation: "Friend of the Groom" },
      { name: "Daniel Yared", role: "Groomsman", relation: "Friend of the Groom" },
      { name: "John Rey Palacios", role: "Groomsman", relation: "Friend of the Groom" },
      { name: "Ariel Bargat", role: "Groomsman", relation: "Friend of the Bride" },
      { name: "Harold Caceres", role: "Groomsman", relation: "Friend of the Groom" },
    ],
  },

  brideSide: {
    maidOfHonor: {
      name: "Salve Regina Vistal",
      role: "Maid of Honor",
      relation: "Friend of the Bride",
    },
    bridesmaids: [
      { name: "Ferlita Quinimon", role: "Bridesmaid", relation: "Friend of the Groom" },
      { name: "Ekklesia Mission", role: "Bridesmaid", relation: "Friend of the Bride" },
      { name: "Ivy Grace Karaan", role: "Bridesmaid", relation: "Friend of the Bride" },
      { name: "Leizyl Resabal", role: "Bridesmaid", relation: "Friend of the Bride" },
      { name: "Nerilynne Briones", role: "Bridesmaid", relation: "Friend of the Bride" },
    ],
  },

  ceremonyRoles: [
    { name: "Bryle Acruz", role: "Ring Bearer" },
    { name: "Trey Escalante", role: "Bible Bearer" },
    { name: "Axl Lopez", role: "Pillow Bearer" },
    { name: "Diana Elie Tee", role: "Flower Girl" },
    { name: "Eliana Faye Tee", role: "Flower Girl" },
    { name: "Kaira Elise Tee", role: "Flower Girl" },
    { name: "Amy Rose Alcala", role: "Flower Girl" },
    { name: "Allie Benito", role: "Flower Girl" },
  ],
};