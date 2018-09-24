console.log('hip hip');

// collection of things, can be empty, or many things
// you can change, access and modify the items in the array
// ORDERED - by index

// javascript - primitives - data types
// strings - numbers - booleans - null - undefined - 

// 1. Create an array of the days of the week

// Create a variable named days_of_the_week as an array of the following:
// Monday
// Tuesday
// Wednesday
// Thursday
// Friday
// Saturday
// Sunday

// 2. My calendar says the first day is Sunday...
// Remove Sunday from the last postion and move it to the first position. Use array methods.


var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

days_of_the_week.pop();
console.log(days_of_the_week);
 // or do var day = days_of_the_week.pop()
 // days_of_the_week.unshift(day)

 // OR 
 // days_of_the_week.unshift( days_of_the_week.pop() )
 // like maths, the inner most expression gets evaluated first, turns into value, then passed into unshift
console.log(days_of_the_week);


// 3. Create a new array of the days of the week:
// The first inner array should be the weekdays
// The second inner array should be the weekend days

// 4. Remove either the weekdays or the weekends
// Your choice...

// 5. Sort the remaining days alphabetically

var more_days = [['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], ['Saturday', 'Sunday', ['ayaj']]]
more_days.pop();
more_days[0].sort();

// more_days[0].length = 2
// more_days[0].pop() - removes Friday (before sorting)
// more_days[1] = ['Sat', 'Sun', ['ayaj']]
// more_days[1][2] = ['ayaj']
// more_days[1][2][0] = 'ayaj'







var pols = ['lord buckethead', 'elmo', 'theresa may', 'mr fish finger']
