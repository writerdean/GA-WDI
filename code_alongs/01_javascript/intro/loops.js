console.log('here we go');

// for (var num = 1; num <= 5; num++) {
//     debugger
//     console.log(num);
// }


// var number = 1;
// while(number <= 5) {
//     console.log(number);
//     number++;
//     console.log(number);
// }


// Guess the number (use while)

// Activity:

// You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
// Specification:

// The user should be asked to guess a number
// If the user's guess is correct, the user should see a congratulatory message
// If the user's guess is not correct, the user should be asked to guess the number again.
// Extensions:

// Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
// Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"



// var numberGuessed = prompt('Guess a number');

// var secretNumber = 4;

// while (numberGuessed != secretNumber) {
//     console.log('You chose ' + numberGuessed + ', try again.');
//     numberGuessed = prompt('Guess a number');
// }

console.log('Oh My God, You Are So Correct!!!');

var numberGuessed = Number (prompt('Guess a number'));

var secretNumber = 4;

while (numberGuessed != secretNumber) {
    console.log('You chose ' + numberGuessed + ', try again.');
    numberGuessed = Number(prompt('Wrong!!!! Try again.'));
}

console.log('You chose ' + numberGuessed + '!  You Are So Correct!!!');
