const findNames = require("./solution");

const names = [0.25, 5.36, 7.26, 4.98];

const namesFound = findNames(names, 5);

for (let i = 0; i < namesFound.length; i++) {
  console.log(namesFound[i]);
}
