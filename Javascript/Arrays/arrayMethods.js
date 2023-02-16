////////////////////////// ARRAY METHODS DESCRIPTIONS //////////////////////////

// concat() - Joins two or more arrays and returns a new array.
// copyWithin() - Copies a sequence of array elements within the array.
// entries() - Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// every() - Checks if every element in an array passes a test.
// fill() - Fills all the elements of an array with a static value.
// filter() - Creates a new array with all elements that pass the test implemented by the provided function.
// find() - Returns the value of the first element in an array that passes a provided test function.
// findIndex() - Returns the index of the first element in an array that passes a provided test function.
// flat() - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// flatMap() - Creates a new array by applying a function to each element of the array and then flattening the result into a new array.
// forEach() - Calls a function for each element in the array.
// includes() - Determines whether an array includes a certain value.
// indexOf() - Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// join() - Joins all elements of an array into a string.
// keys() - Returns a new Array Iterator that contains the keys for each index in the array.
// lastIndexOf() - Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// map() - Creates a new array with the results of calling a provided function on every element in the calling array.
// pop() - Removes the last element from an array and returns that element.
// push() - Adds one or more elements to the end of an array and returns the new length of the array.
// reduce() - Applies a function against an accumulator and each element in the array to reduce it to a single value.
// reduceRight() - Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// reverse() - Reverses the order of the elements in an array.
// shift() - Removes the first element from an array and returns that element.
// slice() - Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).
// some() - Checks if at least one element in an array passes a test.
// sort() - Sorts the elements of an array in place.
// splice() - Adds or removes elements from an array.
// toLocaleString() - Returns a string representing the elements of an array in a localized format.
// toString() - Returns a string representing the elements of an array.
// unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
// values() - Returns a new Array Iterator that contains the values for each index in the array.


////////////////////////// INITIAL TEST ARRAYS //////////////////////////
let numbers = [1,2,3,4];
let words = ["Hello", "I", "am", "an", "array"];


// //MAP
// let result = numbers.map((value, index) => value *index)
// console.log(result);

// // Filter
// **** () ****  //
// const even = numbers.filter((number)=> number %2 ==0);
// console.log(even);

// //SLICE
// **** (Index Start, Index End) ****  //
// const slice = numbers.slice(0,3);
// console.log(slice);
// console.log(numbers);

// //SPLICE 
// **** (Index, How much, Replace) ****  //
// const splice = numbers.splice(0,3);
// console.log(splice);
// console.log(numbers);


// //INCLUDES
// console.log(numbers.includes(48));




