import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

console.log("Start");

new Promise((resolve, reject) => {
  //   resolve("Hello , World!!");
  reject("Error: Something went wrong!");
})
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Promise completed");
  });

console.log("End");
// -----------------------------------------------------------------------

const HeroByAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      return hero ? resolve(hero) : reject(`Hero with id ${id} not found`);
    },1000);
  });
};

HeroByAsync(5)
  .then((hero) => {
    console.log("Hero found:", hero.name);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
