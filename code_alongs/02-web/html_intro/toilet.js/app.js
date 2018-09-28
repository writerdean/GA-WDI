console.log('road to fame')

var seat = document.querySelector('.seat');
var flushBtn = document.querySelector('.flush-btn');

var flush = function() {
    seat.style.backgroundColor = 'skyblue';
}

var poo = function() {
    seat.style.backgroundColor = 'brown';
}

flushBtn.addEventListener('click', flush)
seat.addEventListener('click', poo)
// instead of pressing seat, press the border around the seat to call poo



