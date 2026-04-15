export interface Person {
  name: string;
  role?: string;
  image?: string;
}

export interface EntourageData {
  parents: Person[];
  principalSponsors: Person[];
  entourage: {
    maidOfHonor: Person[];
    bestMan: Person[];
    bridesmaids: Person[];
    groomsmen: Person[];
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
  principalSponsors: [{ name: 'Harvey Tee' }, { name: 'Mechiel Tee' }],
  entourage: {
    maidOfHonor: [{ name: 'Salve Regina Mendros', role: 'Maid of Honor' }],
    bestMan: [{ name: '', role: 'Best Man' }],
    bridesmaids: [{ name: 'Ekklessia', role: 'Friend of the Bride' }, { name: 'Ivy Grace Karaan', role: 'Friend of the Bride' }],
    groomsmen: [{ name: 'Joshua Estrabon', role: 'Groomsmen' }, { name: 'Emmanuel Estrabon', role: 'Groomsmen' }, { name: 'Daniel Yared', role: 'Groomsmen' }],
  },
  bearers: [{ name: 'Bryle Acruz', role: 'Ring Bearer' }],
};