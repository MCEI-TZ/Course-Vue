import heroes, { owners, type Owner } from "../data/heroes";

console.log(owners, heroes);

const getOwnerbyHero = (owner: Owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

export const getHeroById = (id: number) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(getOwnerbyHero("DC"));
