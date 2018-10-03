var board = document.querySelector('.board')
var squares = document.querySelectorAll('.square')
var turnIndicator = 'playerOne'; // use this to highlight player section in righthand side
var turnCounter = 0;
var playerOneToken = 'X';  // if turn indicator is player one, use this in the text content
var playerTwoToken = 'O'; // if turn indicator is player two, use this in the text content
var playerOneBox = document.querySelector('.one') // for styling
var playerTwoBox = document.querySelector('.two') // for styling
var activeText = document.querySelector('.active') // for styling
var inActiveText = document.querySelector('.inactive') // for styling
var playerOneClicks = [];
var playerTwoClicks = [];

var rowOne = ['R1C1', 'R1C2', 'R1C3']
var rowTwo = ['R2C1', 'R2C2', 'R2C3']
var rowThree = ['R3C1', 'R3C2', 'R3C3'] 
var colOne = ['R1C1', 'R2C1', 'R3C1']
var colTwo = ['R1C2', 'R2C2', 'R3C2']
var colThree = ['R1C3', 'R2C3', 'R3C3']
var diagOne = ['R1C1', 'R2C2', 'R3C3']
var diagTwo = ['R1C2', 'R2C2', 'R3C1']


// this changes the turn to the next person
var nextTurn = function() {
    if(turnIndicator === 'playerOne') {
        turnIndicator = 'playerTwo';
        turnCounter++
    } else {
        turnIndicator = 'playerOne';
        turnCounter++
    }
    toggleActiveClass()
}

// toggles which player box is active (for style purposes)
var toggleActiveClass = function() {
    if(playerOneBox.classList.contains('player-active')) {

        playerOneBox.classList.remove('player-active')
        playerTwoBox.classList.add('player-active')
    } else {
        playerTwoBox.classList.remove('player-active')
        playerOneBox.classList.add('player-active')
    }
}


// this function will enter a token in the square, and indicate that the square has now been clicked
var chooseSquare = function(event) {
    if (event.target.classList.contains('clicked')) {
        alert('Please choose another square')
    } else {
        if(turnIndicator === 'playerOne') {
            event.target.textContent = playerOneToken;
            event.target.classList.add('P1C')
            playerOneClicks.push(this.id)
            
            
        } else {
            event.target.textContent = playerTwoToken;
            event.target.classList.add('P2C')
        }
        event.target.classList.add('clicked')
        nextTurn();
    }
}

var checkForWinner = function() {
    if(turnCounter>4) {
        

    } else {
        return
    }
}

function replyClick(clicked_id) {
    console.log(clicked_id)

}

board.addEventListener('click', chooseSquare)
