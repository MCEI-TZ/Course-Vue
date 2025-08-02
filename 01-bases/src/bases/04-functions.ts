function greetPerson(name: String) {
  return `Hello, ${name}!`;
}

const greetPerson2 = (name: String) => {
  return `Hello, ${name}!`;
};
const greetPerson3 = (name: String) => `Hello, ${name}!`;

const returnPersonObject = () => ({ name: "Mexz", age: 30 });

console.log(greetPerson("Mexz"));
console.log(greetPerson2("Mexz"));
console.log(greetPerson3("Mexz"));
console.log(returnPersonObject());
