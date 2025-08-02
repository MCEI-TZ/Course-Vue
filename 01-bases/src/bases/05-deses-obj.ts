interface Hero {
  name: string;
  age: number;
  country?: string;
}

export const person: Hero = {
  name: "Mexz",
  age: 30,
  country: "USA",
};

const { age, country } = person;

console.log(age, country);
