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
