
// Write a program that creates a string that represents an 8×8 grid, using new- line characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. Passing this string to console.log should show something like this:

// # # # # # # # #
//  # # # # # # # #
// # # # # # # # #
//  # # # # # # # #


//FIRST TRY
// var count = 0;
// var board = [];
// var createBoard = function() {
//     do {
//         var createFirst = function() {
//             board.push('\n# # # # # # # #')
//         }
//         createFirst();

//         var createSecond = function() {
//             board.push('\n # # # # # # # ')
//             count++
//         }
//         createSecond();
//     }
//     while (count < 4);
// }

// var join = function() {
//     createBoard()
//     console.log( board.join(" ")  )
// }
// join()




// Extension
// When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. Then, define a variable symbol that generates the board using the specified character instead.

// var newCreateFirst = function(str) {
//     var numToRepeat = 10;
//     console.log(str)
//     var result = str.repeat(numToRepeat);
// }
// newCreateFirst('Hello World')

var pattern = '* ';
var numToRepeat = 10;
var board = ' ';


if (var i = 0; i < numToRepeat; i++) {
    var createRow = function() {
        pattern.repeat(numToRepeat)
        board += 
    }
    // reverse pattern
}
console.log(  row );