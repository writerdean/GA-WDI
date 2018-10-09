// The Ultimate Life Decider
// Never make a decision again!

// Core problem
// Create a file called decider.js
// Write a function called coinFlip that will console.log HEADS or TAILS when called
// Add a counter that declares WINNER in the console when either HEADS or TAILS is flipped 5 times.
// Extension
// Create a file called decider.html
// Find any coin image online
// Link the .js file, while you're there you may also decide to add a .css file for some styling
// Now add the necessary components to the decider.html file so that when the coin image is clicked the coinFlip function result and tally are returned somewhere on the page.


// FIRST TRY
var countHeads = 0;
var countTails = 0;

var coinFlip = function(min, max) {
    console.log('flip')
        var isHeads = (Math.floor(Math.random() * 2) === 0);

    if(isHeads) {
        console.log('heads')
        countHeads++;
        console.log('Heads: ' + countHeads)
    } else {
        console.log('tails')
        countTails++
        console.log('Tails: ' + countTails)
    }
}

// coinFlip()
// coinFlip()
// coinFlip()
// coinFlip()
// coinFlip()
// coinFlip()
// coinFlip()
// coinFlip()

var flip = function() {

    if ( countHeads < 6 || countTails < 6 ) {
        console.log('Heads: ' + countHeads)
        console.log('Tails: ' + countTails)
        coinFlip()
    } else {
        console.log('WINNER!!')
    }
}
flip()

// SECOND TRY


// var countHeads = 0;
// var countTails = 0;

// function coinFlip(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;

// }
 
