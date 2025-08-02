export const numberArray = [1, 2, 3, 4, 5, 6];
numberArray.push(8);

const numberArray2 = [...numberArray];
numberArray2.push(3);

console.log(numberArray);
console.log(numberArray2);
