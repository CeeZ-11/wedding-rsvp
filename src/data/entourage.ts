export interface Person {
  name: string;
  role?: string;
  relation?: string;
  image?: string;
}

export interface EntourageData {
  parents: Person[];
  principalSponsors: Person[];
  secondarySponsors: Person[] | { veil: Person[]; cord: Person[] };
  entourage: {
    maidOfHonor: Person[];
    bestMan: Person[];
    bridesmaids: Person[];
    groomsmen: Person[];
    flowerGirls: Person[];
  };
  bearers: Person[];
}

export const entourage: EntourageData = {
  parents: [
    { name: 'Mr. Daniel Estrabon', role: 'Father of the Groom' },
    { name: 'Mrs. Mercidita Estrabon', role: 'Mother of the Groom' },
    { name: 'Mr. Pablito Acruz', role: 'Father of the Bride' },
    { name: 'Mrs. Francisca Lopez', role: 'Grandmother of the Bride' },
  ],
  principalSponsors: [{ name: 'Harvey Tee', role: 'Principal Sponsor' }, { name: 'Mechiel Tee', role: 'Principal Sponsor' }],
  secondarySponsors: {
    veil: [
      { name: "Danimae Alcala", role: "Veil Sponsor" },
      { name: "Anthony Alcala", role: "Veil Sponsor" },
    ],
    cord: [
      { name: "Neri Garidan", role: "Cord Sponsor" },
      { name: "Marco Garidan", role: "Cord Sponsor" },
    ],
  },
  entourage: {
    maidOfHonor: [{ name: 'Salve Regina Mendros', role: 'Maid of Honor', relation: 'Friend of the Bride' }],
    bestMan: [{ name: '', role: 'Best Man' }],
    bridesmaids: [{ name: 'Ekklessia', role: 'Bridesmaid', relation: 'Friend of the Bride' }, { name: 'Ivy Grace Karaan', role: 'Bridesmaid', relation: 'Friend of the Bride' }, { name: 'Krizia Belecina', role: 'Bridesmaid', relation: 'Friend of the Groom' }, ],
    groomsmen: [{ name: 'Joshua Estrabon', role: 'Groomsman', relation: 'Brother of the Groom' }, { name: 'Emmanuel Estrabon', role: 'Groomsman', relation: 'Brother of the Groom' }, { name: 'Daniel Yared', role: 'Groomsman', relation: 'Friend of the Groom' }, { name: 'Allain Paul Benito', role: 'Groomsman', relation: 'Friend of the Groom' }, { name: 'John Rey Palacios', role: 'Groomsman', relation: 'Friend of the Groom' },],
    flowerGirls: [{ name: 'Diana Elie Tee', role: 'Flower Girl' }, { name: 'Eliana Faye Tee', role: 'Flower Girl' }, { name: 'Kaira Elise Tee', role: 'Flower Girl' }],
  },
  bearers: [{ name: 'Bryle Acruz', role: 'Ring Bearer' }],
};