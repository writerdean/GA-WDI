console.log('theme park exercise')

// Exercise
// Imagine you work in the information booth at a theme park and help recommend rides to guests.

// If a person is less than 8 years old, recommend the merry-go-round.

// Else if a person is more than 8 years old and less than 65 years old and more than 4.5 feet tall, recommend the roller coaster.

// Else recommend the lazy river.






var age;
var height;


var ride = function (age, height) {
    
    if (age < 8) {
        console.log('Try the merry-go-round, it is amazing!');
    } else if (age >= 8 && age < 65 && height > 4.5) {
        console.log('The roller coaster here is the best!');
    } else {
        console.log('The weather today is perfect for the Lazy River!');
    }
}

console.log('before');

ride(8, 5);

console.log('after');