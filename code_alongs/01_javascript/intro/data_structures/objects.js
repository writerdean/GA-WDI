// console.log('objects');

// // why use an object instead of an array?
// // is an array
// // can be multiple arrays within the one object
// // has keys and values
// // key and value are a pair, if you remove one, you have to remove the other
// // granted, you can have an empty string for the value of a key
// //  object uses curly brace, array uses brackets
// // array is ordered, object is NOT ordered (even if it looks like it is)


// // The Recipe Card
// // Never forget another recipe!
// // Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// // On separate lines (one console.log statement for each), log the recipe information so it looks like:

// // Mole
// // Serves: 2
// // Ingredients:
// // cinnamon
// // cumin
// // cocoa

// var recipeCard = {
// Title: 'No-Bakes',
// Servings: 1,
// Ingredients: ['cocoa', 'sugar', 'oats', 'peanut butter']
// };

// console.log('Recipe Card');
// console.log(recipeCard.Title);
// console.log('Serves: ' + recipeCard.Servings);
// console.log('Ingredients:');
// console.log(recipeCard.Ingredients[1]);
// console.log(recipeCard.Ingredients[2]);
// console.log(recipeCard.Ingredients[3]);
//console,log(recipeCard.Ingredients.join('\n'))

// // The Reading List

// // Keep track of which books you read and which books you want to read!
// // Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// // Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". 
// // Now use an if/else statement to change the output depending on whether you read it yet or not. 
// // If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

// var bookshelf = [
// {
//     Title: 'It',
//     Author: 'Stephen King',
//     alreadyRead: true
// },
// {
//     Title: 'Insomnia',
//     Author: 'Stephen King',
//     alreadyRead: true
// },
// {
//     Title: 'Down Girl',
//     Author: 'Kate Manne',
//     alreadyRead: false
// },
// {
//     Title: 'Boys Will Be Boys',
//     Author: 'Clementine Ford',
//     alreadyRead: false
// }
// ]

// YOU DON'T NEED THE === TRUE PART, BOOLEAN ALREADY EVALUATES TO TRUE
// for (var book = 0; book < bookshelf.length; book++) {
//     if (bookshelf[book].alreadyRead === true) {
//         console.log('You\'ve already read ' + bookshelf[book].Title + ' by ' + bookshelf[book].Author + '.');
//     } else {
//         console.log('You still need to read ' + bookshelf[book].Title + ' by ' + bookshelf[book].Author + '.');
//     }

// }

// The Movie Database

// It's like IMDB, but much much smaller!
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: 
// "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

 var favMovie = {
     Title: 'The Princess Bride',
     duration: 2,
     Stars: ['Robin Wright', 'Cary Elwes', 'Mandy Patinkin', 'Chris Sarandon']
 };
 
//  console.log(favMovie.Title + ' lasts for ' + favMovie.duration + ' hours.  Starring:  ');

//  for (var star = 0; star < favMovie.Stars.length; star++) {
//     console.log(favMovie.Stars[star]);
// }


var movieInfo = function(movie) {
    return movie.title;
    return movie.duration;
    return movie.Stars;
    console.log(movie.Title + ' lasts for ' + movie.duration + ' hours.  Starring:  ');

}

movieInfo()
