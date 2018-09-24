// Check for Palindromes

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.


// A Santa dog lived as a devil God at NASA.
// A Santa dog lives as a devil God at NASA.

// var palindrome = function(str) {
// turn string into array1
// reverse array and save as new array2
// if array 1 === array 2, it's a pal
// else, not a pal
// }
// return true or false

// my original
// var palindrome = function(str) {
//     var array1 = str.toLowerCase().replace(/\s/g,'');
//    // console.log(array1)
//     var array2 = array1.split('').reverse().join('');
//    // console.log(array2)
//     return array1 === array2;cd

//     }
    // console.log( palindrome('I am Sam said the walrus') )
    // console.log( palindrome('A Santa dog lived as a devil God at NASA.') )
    

// var string = 'How Are youToday'
// var a = string.toLowerCase();
// console.log(a)
// debugger
// var b = a.replace(/ /g,'')
// console.log(b)
// debugger
// var c = b.split().reverse().join();
// console.log(c)


// function palindrome(str) {
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     return reverseStr === lowRegStr;
//   }
//   palindrome("A man, a plan, a canal. Panama");

