// 1. Build your own concatenation
// Write a function named combineWords that: 
// // - return a new string that is the combination of the two parameters
// // Example: combineWords('dog', 'house') => 'doghouse'

// my original
// function combineWords(word1, word2) {
// 	return word1 + word2;
// }
// var result = combineWords('dog', 'house');
// console.log(result);


// displays 'doghouse'

// 2. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

// function calculateAge (birthYear, currentYear) {
//     var age1 = (currentYear - 1) - birthYear;
//     var age2 = currentYear - birthYear;
//     if (currentYear < birthYear) {
//         console.log('You haven\'t been born yet!');
//     } else {
//         console.log('You are either ' + age1 + ' or ' + age2);
//     } 
// }

// calculateAge(1900, 2018);
// calculateAge(1970, 2000);
// calculateAge(1995, 1970);
// calculateAge(2000, 2018);


//  3. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// var numbers = ['one', 'two', 'three', 'four'];
// var names = ['joe', 'jennifer', 'aubree', 'alison'];


// //my original

// function lengths (arrStr) {
//     var newArray = [];
//     for(var i = 0; i < arrStr.length; i++) {
//         newArray.push(arrStr[i].length);
//     }
//     console.log(newArray);
// }
// lengths(numbers);
// lengths(names);

// DT's solution
// function lengths (arrStr) {
//     var newArray = [];
//     for(var i = 0; i < arrStr.length; i++) {
//         newArray.push(arrStr[i].length);
//     }
//     return newArray
// }
// console.log ( lengths(numbers) );
// console.log ( lengths(names) );


// 4. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// function transmogrifier (num1, num2, num3) {
//     return Math.pow((num1 * num2), num3);
// }
// transmogrifier(4, 2, 3);

// 5. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.
// Example: wordReverse('we are good friends') => 'friends good are we'

// function wordReverse(str) {
//     return str.split("").reverse("").join("");
// }
// wordReverse('we are progressing quite well');

// Split the desired string by space character delimiters
// Determine how many words have been separated
// Loop backwards through the split string, while creating a new string
// Return the new string

// function wordReverse(str) {
//     var newArray = "";
//     var newWord = str.split(" ")
//     console.log(newWord);
//     for (var i = newWord.length; i >= 0; i--) {
//         console.log(newWord[i]);
//         newArray += newWord[i] + " ";
//     }
//     console.log(newArray)
// }
// wordReverse('we are progressing quite well');