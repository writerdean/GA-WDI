// find all the boxes inside the wrapper
var boxes = document.querySelectorAll('.wrapper .box')
var wrapper = document.querySelector('.wrapper')


var counter = 0;


// only handle the click if it's one of your kids, not you
var handleClick = function(event) {
    if (event.target.classList.contains('clicked')) {
        return

        } else 
        
        // if (event.target.classList.contains('box')) 
        {
            counter++
            event.target.classList.add('clicked')
            event.target.textContent = counter
            event.target.style.backgroundColor = 'blue'
            event.target.style.fontSize = '48px'
            event.target.style.color = 'white'
            event.target.style.textAlign = 'center'
        }
}
// EVENT HANDLER - when parent hears a click, handle it
wrapper.addEventListener('click', handleClick)

// FOR EACH TO ADD EVENT LISTENER TO EACH ELEMEN T
// boxes.forEach(function(event) {
//     event.addEventListener('click', handleClick)
// })

// FOR LOOP TO ADD EVENT LISTENER TO EACH ELEMENT
// for (var i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener('click', sayHello)
// }

