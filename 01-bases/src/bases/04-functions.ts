// Definition of a tradicional function
function greetPerson(name: String) {
  return `Hello, ${name}!`;
}
// Definition of a funtion using arrow function syntax
const greetPerson2 = (name: String) => {
  return `Hello, ${name}!`;
};
const greetPerson3 = (name: String) => `Hello, ${name}!`;

const returnPersonObject = () => ({ name: "Mexz", age: 30 });

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
    superPower: "Flight",
  },
];

console.log(greetPerson("Mexz"));
console.log(greetPerson2("Mexz"));
console.log(greetPerson3("Mexz"));
console.log(returnPersonObject());

console.log(heroes.find((hero) => hero?.id === 1));
