// XXXCreate Javascript selectors that target each of the timer buttons.
// XXXCreate click handlers (empty, for now) for each of the timer buttons.
// XXXInstantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().
// XXXCreate an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".

// XXXInside your click handler for the start button...
// XXXReplace "Stop Watch" in the HTML with the content of the seconds variable.
// XXXUse setInterval() to increment the timer by 1 every second.

// Inside your click handler for the pause button...
// Stop -- but do not reset! -- the timer using clearInterval().

// Once again, inside your click handler for the start button...
// Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".

// Inside your click handler for the reset button...
// Stop the timer using clearInterval().
// Reset the timer.
// Replace the time in your HTML with the original "Stop Watch" text.

var start = document.querySelector(".start")
var reset = document.querySelector(".reset")
var pause = document.querySelector(".pause")
var timer = document.querySelector(".timer")

var seconds = 0;
var timerId;

var updateTime = function() {
    seconds++
    timer.textContent = 'Time elapsed: ' + seconds;
}

var startTimer = function() {
    timer.textContent = 'Time elapsed: ' + seconds;
    timerId = setInterval(updateTime, 1000);
}

var pauseTimer = function() {
    clearInterval(timerId)
}

var resetTimer = function() {
    clearInterval(timerId)
    seconds = 0;
    timer.textContent = 'Stop Watch';    
}


start.addEventListener('click', startTimer)
reset.addEventListener('click', resetTimer)
pause.addEventListener('click', pauseTimer)

