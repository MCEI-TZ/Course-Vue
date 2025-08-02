import heroes, { owners, type Owner } from "../data/heroes";

console.log(owners, heroes);

const getOwnerbyHero = (owner: Owner) => {
  return heroes.filter((heroe) => heroe.owner === owner);
};

console.log(getOwnerbyHero("DC"));
