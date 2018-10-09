
// Write a program to decode this message:

// FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.

// This is a form of cryptography known as the Caesar Cipher. It has a shift parameter of 3.

// The alphabet is normally:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ

// The alphabet with the shift parameter of 3 is now as follows:
// DEFGHIJKLMNOPQRSTUVWXYZABC

// Extension:
// Write the program to encode plain text into messages.
// CaesarCipher.encode('TWO SYMBOLS KISSING EACH OTHER')

// Extension 2:
// Write the program to encode it with any shift parameter.
// Send each other secret messages.

var message = ['FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH'];
var messageString = JSON.stringify(message)
var decryptedMessage = [];
var alphabet = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var shiftedAlphabet = ['DEFGHIJKLMNOPQRSTUVWXYZABC'];

// find first letter of message
// is full stop if pageYOffset, print new Array
// if no, is it a space?  If yes, remove space from alpha and add space to new array
// if No, is A, B or C?  If yes, shift letter from alpha, pop replacement letter to new array
// if No, shift letter from alph, pop letter at index-3 to new array

// var decryptMessage = function() {
//     for (var i = 0; i < messageString.length; i++) {
//         console.log(message[i])
//         if (message[i] === '.') {
//             console.log(decryptedMessage)
//         } else if (message[i] === ' ') {
//             decryptedMessage.push(' ');
//         } else if (message[i] === 'A' || message[i] === 'B' || message[i] === 'C') {
//             decryptedMessage.push();
//         } else  {
//             var letter = alphabet.indexOf(messageString[i])
//             console.log(letter)
//             decryptedMessage.push(letter);
//             letter = '';
//         }
//     }
// }
// decryptMessage()

// for (var i = 0; i < messageString.length; i++) {
//     decryptedMessage.push(messageString[i])
    
// }

// console.log(decryptedMessage.join())

// ignore non-alpha characgters
// letter in original alpha -3 = letter in shifted alpha
