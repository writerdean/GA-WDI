// Print out all the leap years in the last 100 years.


// / 4 - cointinue
//  if /4 but not /100 - leap year
//  if /4 AND /100 - continue
//  if /100 AND /400 - leap


for (var year = 1500; year <= 2018; year++) {

    if (year % 4 == 0 && year % 100 !== 0){
        console.log(year + ' is a leap year');
    }
}





// For numbers between 1 and 200:   CHECK!!!

// a) print out multiples of 7.

// for (var i = 1; i <= 200; i++) {
//     if (i % 7 == 0) {
//         console.log(i);
//     }
// }

//  OR

// for (var num = 0; num <= 200; num+7) {
//    console.log(num);
// }

// b) print out every second odd number.

// for (var num = 1; num <= 200; num+4) {
//     console.log(num);
// }


// Print out all prime numbers between 0 and 200 (divisible by itself and 1).

// for (var i = 1; i <= 200; i++) {
//     if () {
//         console.log(i);
//     }

// }

