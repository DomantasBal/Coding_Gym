// // ================== Looping a Triangle ==================
// // let hash = "";
// // for (i = 0; i < 7; i++) {
// //   hash += "#";
// //   console.log(hash);
// // }

// // // Better solution.
// // for (string = "#"; string.length != 7; string += "#") {
// //   console.log(string);
// // }

// // ================== FizzBuzz ==================

// // for (i = 1; i <= 100; i++) {
// //   if (i % 3) {
// //     console.log("Fizz");
// //   }
// //   if (i % 5) {
// //     console.log("Buzz");
// //   }

// //   if (i % 3 && i % 5) {
// //     console.log("FizzBuzz");
// //   }
// // }

// // Better solution

// // for (i = 1; i <= 100; i++) {
// //   let output = "";

// //   if (i % 3 === 0) {
// //     output += "Fizz";
// //   }

// //   if (i % 5 === 0) {
// //     output += "Buzz";
// //   }

// //   console.log(output || i);
// // }

// // ================== Chessboard ==================

// let size = 8;
// let nextLetter = " ";
// let string = "";

// for (let n = 1; n <= size * size; n++) {
//   string += nextLetter;

//   if (n % size == 0) {
//     string += "\n";

//     if (size % 2 == 1) {
//       nextLetter = nextLetter == " " ? "#" : " ";
//     }
//   } else {
//     nextLetter = nextLetter == " " ? "#" : " ";
//   }
// }
