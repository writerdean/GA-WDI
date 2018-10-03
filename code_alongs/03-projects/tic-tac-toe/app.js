var board = document.querySelector('.board')
var squares = document.querySelectorAll('.square')
var turnIndicator = 'playerOne'; // use this to highlight player section in righthand side
var turnCounter = 0;
var playerOneToken = 'X';  // if turn indicator is player one, use this in the text content
var playerTwoToken = 'O'; // if turn indicator is player two, use this in the text content




// this changes the turn to the next person
var nextTurn = function() {
    console.log(turnIndicator, turnCounter)

    if(turnIndicator === 'playerOne') {
        turnIndicator = 'playerTwo';
        turnCounter++
    } else {
        turnIndicator = 'playerOne';
        turnCounter++
    }
    
}


// this function will enter an x in the square, and indicate that the square has now been clicked
var chooseSquare = function(event) {
    if (event.target.classList.contains('clicked')) {
        alert('Please choose another square')
    } else {
        console.log(document.querySelectorAll(".square"));
        if(turnIndicator === 'playerOne') {
            event.target.textContent = playerOneToken;
        } else {
            event.target.textContent = playerTwoToken;
        }
        event.target.classList.add('clicked')
    }
    nextTurn();

}


board.addEventListener('click', chooseSquare)