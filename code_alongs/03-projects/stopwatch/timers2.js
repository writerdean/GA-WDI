// setInterval()
// Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function.

// clearInterval()
// Cancels repeated action which was set up using setInterval().

// Create Javascript selectors that target each of the timer buttons.

var start = document.querySelector(".start")
var reset = document.querySelector(".reset")
var pause = document.querySelector(".pause")
var timer = document.querySelector(".timer")

// Create click handlers (empty, for now) for each of the timer buttons.



// Instantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().

var seconds = 0;
var timerID = 1000;

// Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".

var updateTime = function() {
    seconds++
    timer.textContent = 'Time elapsed: ' + seconds;
}

// Inside your click handler for the start button...
// Replace "Stop Watch" in the HTML with the content of the seconds variable.

var startTimer = function() {
    timer.textContent = 'Time elapsed: ' + seconds;
    setInterval(updateTime, 1000);
}

// setInterval(updateTime, 1000);
// Use setInterval() to increment the timer by 1 every second.
// Inside your click handler for the pause button...
// Stop -- but do not reset! -- the timer using clearInterval().

var pauseTimer = function() {
    // use clearInterval() to stop the timer
}

// Once again, inside your click handler for the start button...
// Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
// Inside your click handler for the reset button...
// Stop the timer using clearInterval().
// Reset the timer.
// Replace the time in your HTML with the original "Stop Watch" text.

var resetTimer = function() {
    clearInterval
    seconds = 0;
    timer.textContent = 'Stop Watch';    
}

start.addEventListener('click', startTimer)
reset.addEventListener('click', resetTimer)
pause.addEventListener('click', pauseTimer)




var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}

function myStopFunction() {
    clearInterval(myVar);
}