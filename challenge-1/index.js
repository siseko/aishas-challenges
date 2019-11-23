const faker = require("faker");
const findNames = require("./solution");

const names = [];
for (let i = 0; i < 100; i++) {
  names.push(faker.name.firstName());
}

const namesFound = findNames(names, "A");

for (let i = 0; i < namesFound.length; i++) {
  console.log(namesFound[i]);
}
