// SPREAD OPERATOR
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];
console.log(newArray);

// REST OPERATOR
function sortArgs(...args) {
  return args.sort();
}

let sortedStuff = sortArgs(4, 8, 3, 5, 1, 9, 2);
console.log(sortedStuff);

// USE IN OBJECTS
const Domantas = {
  dName: 'Domantas',
};

const Renata = {
  ...Domantas,
  age: 30,
};

console.log(Renata);
