
let numbers = ["one","two", something];

function something(){
    console.log("Boogie woogie")
}

numbers[2]();

// let result = numbers.unshift("NEW")
// let result = numbers.shift("NEW")
// let result = numbers.push("NEW")
// let result = numbers.pop()
// console.log(result);
console.log(numbers);



///////////////////////////////
// Arrow fucntions hoisting //
/////////////////////////////

// Hoisting not working example and test
// let something = () => console.log("something");

// something();


    
// let li = document.querySelector("li");
// const makeGoldey = isON =>  isON ?  li.style.background = "gold" : console.log("Nope");

// makeGoldey (1);






////////////////////////
// Lyginis Nelyginis //
//////////////////////

// let number = 19;

// if (number % 2 == 0){
//     console.log("Lyginis")
// }else{
//     console.log("Nelyginis")

// }


// let person = {
//     name: "Domantas",
//     age: 17,
//     country: "Panama"
// }

// for (let key in person){
//     console.log(`${key} : ${person[key]}`);
// }

// let array = ["1", "2", "3"]

// for (let value of array){
//     console.log(value);
// }



// function showNumbers(input){
    
    
//     for(i=0; i < input; i++){
//         const message = input %2 == 0 ? "Even" : "ODD"
//         console.log(message);
//     }
// }
// showNumbers(11);



// function showNumbers(input){
//     for(i=0; i <= input; i++){
//       const message = i % 2 == 0 ? "Even" : "Odd";
//       console.log(i, message);
//     }
//   }
  
//   showNumbers(11);
  