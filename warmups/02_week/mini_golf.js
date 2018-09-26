// Bob, Jimbo and Fish love mini golf. But, every time they hand in their score cards none of the scores are ever totalled. Write a function called totalScores in JS that calculates their scores and console.log the total for each player and their combined total.

// Extension
// Now work out each golfers round compared to the course par.

// Ninja Extension
// Fish loves a punt. Having placed a $1 bet on each stroke over par that Bob and Jimbo played per hole calculate his winnings.

// FIRST TRY

var scoreCard = [
{
    name: "Bob",
    score: [3, 2, 6, 11, 9, 2, 6, 9, 10]
},
{
    name: "Jimbo",
    score: [5, 12, 9, 22, 13, 7, 16, 10, 11]
},
{
    name: "Fish",
    score: [2, 2, 4, 5, 4, 3, 6, 4, 1]
},
{
    name: "Par",
    score: [3, 4, 5, 5, 3, 3, 4, 3, 5]
}
];

var count = 0;

var totalScores = function(arr) {
    // loop thru each person on the scorecard
    for (var i = 0; i < scoreCard.length; i++) {
        count = 0;
        console.log(scoreCard[i].name)
        //  loop thru score and add numbers
        // debugger
        for (var j = 0; j < scoreCard[i].score.length; j++) {
            count = count + scoreCard[i].score[j];
            console.log(count)
        }
        console.log(scoreCard[i].name + ' score ' + count)
    }
        //  return total score for that person
    //

// console.log(totalScoreBob)
// console.log(totalScoreJimbo)
// console.log(totalScoreFish)
// console.log(totalScorePar)

}
totalScores(scoreCard) 