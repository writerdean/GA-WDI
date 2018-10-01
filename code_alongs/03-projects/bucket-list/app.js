


// find all li elements
var listItems = document.querySelectorAll('li')
var howManyDone = document.querySelector(".how-many-done")
var allDone = document.querySelector(".all-done")

var toggleComplete = function(event) {

    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed')
    } else {
        event.target.classList.add('completed')
    }
    // All Done!  (try hard coding the text in the html file, then hiding display when all completed, instead of changing the text)
    howManyDone.textContent = document.querySelectorAll('.completed').length + '/' + listItems.length + ' completed.'
    if(document.querySelectorAll('.completed').length === listItems.length) {
        // text content of ".all-done" = "All Done!"
        allDone.textContent = "All Done!";
    } else {
        allDone.textContent = '';
    }
}

howManyDone.textContent = document.querySelectorAll('.completed').length + '/' + listItems.length + ' completed.'

// loop thru each element
// tell each element to listen for click
listItems.forEach(function(elem)
{
    elem.addEventListener('click', toggleComplete)
}
)



