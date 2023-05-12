
// Just testing object types. This is not good practice.
// Better practice is to leave type inference for objects
const person: {
    name: string;
    age: number;
} = {
    name: "Larry",
    age: 43
}

console.log(typeof person.age);
// person.name = 123;