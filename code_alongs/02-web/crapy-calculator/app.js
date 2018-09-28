// find the element you want (num1 input)

var num1Input = document.querySelector('.num1-input');
var num2Input = document.querySelector('.num2-input');
var calcBtn = document.querySelector('.calc-btn');
var resultDiv = document.querySelector('.result-div')


var sum = function() {
    var result = Number(num1Input.value) + Number(num2Input.value)
    resultDiv.textContent = num1Input.value + " + " + num2Input.value + " = " + result
    num1Input.value = '';
    num2Input.value = '';
}

calcBtn.addEventListener('click', sum)
