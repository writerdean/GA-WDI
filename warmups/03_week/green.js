
// Create 3 boxes (divs) in an html file, give them a border of 1px solid black and a height and width of 100px, so you can see them.
// When you click on any box, it's background color should immediately become red.
// After every box has been clicked, change all of them immediately to green.

var boxOne = document.querySelector(".one")
var boxTwo = document.querySelector(".two")
var boxThree = document.querySelector(".three")
var allBoxes = document.querySelectorAll(".box")
var redBoxes = document.querySelectorAll(".red")
var greenBoxes = document.querySelectorAll(".green")

var changeColor = function(event) {
    event.target.classList.add('red')
    if ( document.querySelectorAll('.red').length === document.querySelectorAll(".box").length ) {
        console.log('all are red')
            // event.target.classList.remove('red')
            // event.target.classList.add('green')
    }
}


boxOne.addEventListener('click', changeColor)
boxTwo.addEventListener('click', changeColor)
boxThree.addEventListener('click', changeColor)




// Create 3 boxes (divs) in an html file, give them a border of 1px solid black and a height and width of 100px, so you can see them.
// When you click on any box, it's background color should immediately become red.
// After every box has been clicked, change all of them immediately to green.

// var boxOne = document.querySelector(".one")
// var boxTwo = document.querySelector(".two")
// var boxThree = document.querySelector(".three")
// var boxes = document.querySelectorAll(".box-contaner div");
// var redBoxes = document.querySelectorAll(".red")
// var greenBoxes = document.querySelectorAll(".green")

// var changeColor = function(event) {
//     event.target.classList.add('red')
//     if ( document.querySelectorAll('.red').length === document.querySelectorAll(".box").length ) {
//         // console.log('all are red')
//             event.target.classList.remove('red')
//             event.target.classList.add('green')
//     }
// }

// boxes.foreach(function(box) {
//     box.addEventListener('click', changeColor)
// })



// boxOne.addEventListener('click', changeColor)
// boxTwo.addEventListener('click', changeColor)
// boxThree.addEventListener('click', changeColor)