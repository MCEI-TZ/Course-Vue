export const person = {
  lastName: "Doe",
  age: 45,
  address: {
    country: "USA",
    city: "New York",
  },
};

const person2 = { ...person };
person2.lastName = "Smith";
console.log(person);
console.log(person2);


// Another way to create an object
const persona3 = structuredClone(person);