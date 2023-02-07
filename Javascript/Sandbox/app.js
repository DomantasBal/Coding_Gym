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



function showNumbers(input){
    
    
    for(i=0; i < input; i++){
        const message = input %2 == 0 ? "Even" : "ODD"
        console.log(message);
    }
}
showNumbers(11);

// function showNumbers(input){
//     for(i=0; i <= input; i++){
//       const message = i % 2 == 0 ? "Even" : "Odd";
//       console.log(i, message);
//     }
//   }
  
//   showNumbers(11);
  