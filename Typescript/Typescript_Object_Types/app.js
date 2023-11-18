// "use strict";
// // Just testing object types. This is not good practice.
// // Better practice is to leave type inference for objects
// // const person: {
// //     name: string;
// //     age: number;
// // } = {
// //     name: "Larry",
// //     age: 43
// // }
// // console.log(typeof person.age);
// // person.name = 123;
// const person = {
//     name: "Larry",
//     age: 43,
//     hobbies: ['Music', 'Food'],
//     role: [2, 'dev']
// };
// // .push() - IS AN EXCEPTION!
// person.role.push("last item"); // is allowed
// // person.role[1] = 33 // This is not allowed
// let favActivities;
// // You get an error because its not an ARRAY
// // favActivities = "sports";
// for (let hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
//     // console.log(hobby.map()) // ERRORRRRRRRRRRRRR
// }
