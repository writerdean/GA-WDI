console.log('little johnny');


var total = 25 * 50000;

var personalTax = 0.5; 
var companyTax = 0.3;

var isCompanyTax = true;

if (isCompanyTax == true) {
    console.log('final amount of tax is ' + total * companyTax);
} else {
    console.log('final amount of tax ' + total * personalTax);
}

var isTenaciousTenAwesome = true;

if (isTenaciousTenAwesome) {
    console.log('yay');
}

var name = '';
var falseyName = ' ';
if (name = true) {
    console.log('name is falsey');
}

if (falseyName = false) {
    console.log('name is truey');
}

var points = 1;
if (points) {
    console.log('you have ' + points + ' points');
}


var year = 'x'; // better to do the 
if (isNaN(year) == true) {
    console.log('Not a number');
} else if (year === 2018) {
    console.log('I am here in the present');
} else if (year < 2018) {
    console.log('Whoa! Blast from the past!');
} else {
    console.log('Greetings from the future!');
}

