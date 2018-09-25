// Write a function 'grannyTalk' what takes a question as an argument and returns a string as her response.

// If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"

// If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"

// The year will be a random year between 1930 and 1950.

// If you say "BYE" to her she'll reply "What's that honey, I didn't hear you.."

// bonus: write an additional function 'grandpaTalk' that when called, will call granny for you and interpret her responses incorrectly by swapping vowels randomly in the words of her responses.

// sample output of grandpaTalk:

// NO, NOT SINCE incorrect year // whats that sunny


var grandpaTalk = function() {
    
}



var grannyTalk = function(query) {

    function getYear (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
   }
   var year = getYear(1930, 1950)

    if (query === query.toUpperCase()) {
        return 'No, not since ' + year;

    } else if (query == ('Bye')) {

           return 'What\'s that honey I didn\'t hear you'
    } else {

        return 'Speak up Sonny Jim!';
    }

}

    console.log (grannyTalk("Hi Grammie"));
    console.log (grannyTalk("I LOVE YOU"));
    console.log (grannyTalk("I love you, Grammie"));
    console.log (grannyTalk("BYE"));
    console.log (grannyTalk("Bye"));



