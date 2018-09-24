// PT PLANNER
// Melbourne Public Transport Journey Planner
// There are 3 train lines:

// The Alamein line has the following stops:
// Flinders Street - Richmond - East Richmond - Burnley - Hawthorn - Glenferrie

// The Glen Waverly line has the following stops:
// Flagstaff - Melbourne Central - Parliament - Richmond - Kooyong - Tooronga

// The Sandringham line has the following stops:
// Southern Cross - Richmond - South Yarra - Prahran - Windsor.

// All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.

// Write a javascript program that works out display the journey when you give it an origin and destination.

// example:

// origin: Melbourne Central
// destination: Richmond

// Melbourne Central -----> Parliament -----> Richmond

// 2 stops total
// You may want to hard code the origin and destination instead of getting user input for easier testing in the beginning.

// Hints:
// Consider diagramming the lines by sketching out the train lines and their stops and intersection. Think about what data structure to use to store each line and all the stops on each line.

// The key to the lab is the intersection of the lines at Richmond.

// // ORIGINAL - 1 LINE WORKS
// for each line, iterate through until you find the origin, 
// are origin and destination on same line?
// if yes, print each stop (iterate thru from origin to destination, print index)
// if no, print first part of trip (up to Richmond), then print exit train,
// then newOrigin is Richmond, print destination from newOrigin to Destination

// var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
// var glenWaverly = ['Flagstaff', 'Melbourne Central','Parliament', 'Richmond', 'Kooyong', 'Tooronga']
// var sandy = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
// //var trainLines = [alamein, glenWaverly, sandy]
// var journey = [];

// var origin = 'Flinders Street';
// var destination = 'Burnley';

// if (alamein.indexOf(origin) > -1 && alamein.indexOf(destination) > -1) {
//     var start = alamein.indexOf(origin);
//     var end = alamein.indexOf(destination);
//     for (var i = start; i <= end; i++) {
//         journey.push(alamein[i])
//     }
//     console.log(journey)
// }


//SECOND TRY - ALL LINES WORK BUT ONLY IF ON SAME LINE, ALSO LONG AND CLUNKY

// var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
// var glenWaverly = ['Flagstaff', 'Melbourne Central','Parliament', 'Richmond', 'Kooyong', 'Tooronga']
// var sandy = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
// //var trainLines = [alamein, glenWaverly, sandy]
// var journey = [];

// var origin = 'Melbourne Central';
// var destination = 'Kooyong';

// var origin = 'Melbourne Central';
// var destination = 'Kooyong';

// var origin = 'Southern Cross';
// var destination = 'Prahran';

// if (alamein.indexOf(origin) > -1 && alamein.indexOf(destination) > -1) {
//     var start = alamein.indexOf(origin);
//     var end = alamein.indexOf(destination);
//     for (var i = start; i <= end; i++) {
//         journey.push(alamein[i])
//     }
//     console.log(journey)

// } else if (glenWaverly.indexOf(origin) > -1 && glenWaverly.indexOf(destination) > -1) {
//     var start = glenWaverly.indexOf(origin);
//     var end = glenWaverly.indexOf(destination);
//     for (var i = start; i <= end; i++) {
//         journey.push(glenWaverly[i])
//     }
//     console.log(journey)


// } else if (sandy.indexOf(origin) > -1 && sandy.indexOf(destination) > -1) {
//     var start = sandy.indexOf(origin);
//     var end = sandy.indexOf(destination);
//     for (var i = start; i <= end; i++) {
//         journey.push(sandy[i])
//     }
//     console.log(journey)

// } else {

//     console.log('You will need to change trains.')
// }
    
//THIRD TRY - STILL ONLY WORKS IF ON THE SAME LINE, BUT WORKS FORWARD AND REVERSE!!!!!!!
// var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
// var glenWaverly = ['Flagstaff', 'Melbourne Central','Parliament', 'Richmond', 'Kooyong', 'Tooronga']
// var sandy = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
// //var trainLines = [alamein, glenWaverly, sandy]
// var journey = [];

// // var origin = 'Flinders Street';
// // var destination = 'East Richmond';
// // var origin = 'Hawthorn';
// // var destination = 'Richmond';

// // var origin = 'Melbourne Central';
// // var destination = 'Kooyong';
// // var origin = 'Tooronga';
// // var destination = 'Parliament';

// // var origin = 'Southern Cross';
// // var destination = 'Prahran';
// // var origin = 'Prahran';
// // var destination = 'Richmond';

// if (alamein.indexOf(origin) > -1 && alamein.indexOf(destination) > -1) {
//     var start = alamein.indexOf(origin);
//     var end = alamein.indexOf(destination);
//     console.log('Origin & index: ' + origin + " " + start)
//     console.log('Destination & index: ' + destination + " " + end)
//     if (start < end) {

//         for (var i = start; i <= end; i++) {
//             journey.push(alamein[i])
//         }
//         console.log(journey)
//     } else {
//         for (var i = start; i >= end; i--) {
//             journey.push(alamein[i])
//         }
//         console.log(journey)
//     }
// } else if (glenWaverly.indexOf(origin) > -1 && glenWaverly.indexOf(destination) > -1) {
//     var start = glenWaverly.indexOf(origin);
//     var end = glenWaverly.indexOf(destination);
//     console.log('Origin & index: ' + origin + " " + start)
//     console.log('Destination & index: ' + destination + " " + end)
//     if (start < end) {

//         for (var i = start; i <= end; i++) {
//             journey.push(glenWaverly[i])
//         }
//         console.log(journey)
//     } else {
//         for (var i = start; i >= end; i--) {
//             journey.push(glenWaverly[i])
//         }
//         console.log(journey)
//     }


// } else if (sandy.indexOf(origin) > -1 && sandy.indexOf(destination) > -1) {
//     var start = sandy.indexOf(origin);
//     var end = sandy.indexOf(destination);
//     console.log('Origin & index: ' + origin + " " + start)
//     console.log('Destination & index: ' + destination + " " + end)
//     if (start < end) {

//         for (var i = start; i <= end; i++) {
//             journey.push(sandy[i])
//         }
//         console.log(journey)
//     } else {
//         for (var i = start; i >= end; i--) {
//             journey.push(sandy[i])
//         }
//         console.log(journey)
//     }

// } else {

//     console.log('You will need to change trains.')
// }





// TRYING A WHOLE NEW DIRECTION!!!!!!!!!!!!!!!!!!
    
// another way to think of this is:
// find the train line for the origin, index origin, index Richmond
// find the train line for the destination, index dest, index Richmond
// if train line for origin === train line for dest, print journey
// else print line from origin to richmond, then print richmond to destination


var alamein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie']
var glenWaverly = ['Flagstaff', 'Melbourne Central','Parliament', 'Richmond', 'Kooyong', 'Tooronga']
var sandy = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor']
var trainLines = [alamein, glenWaverly, sandy]
var journey = [];
var journey2 = [];

var origin = 'Flinders Street'
var dest = 'Windsor'

var originLine;
var destLine;
var start;
var end;
var indexOriginRichmond;
var indexDestRichmond;

if (sandy.indexOf(origin) > -1) {
    originLine = sandy;
    start = sandy.indexOf(origin);
    indexOriginRichmond = sandy.indexOf('Richmond');
    console.log('Origin Line: ' + originLine)
} else if (glenWaverly.indexOf(origin) > -1) {
    originLine = glenWaverly;
    start = glenWaverly.indexOf(origin);
    indexOriginRichmond = glenWaverly.indexOf('Richmond');
    console.log('Origin Line: ' + originLine)
} else if (alamein.indexOf(origin) > -1) {
    originLine = alamein;
    start = alamein.indexOf(origin);
    indexOriginRichmond = alamein.indexOf('Richmond');
    console.log('Origin Line: ' + originLine)
}

if (sandy.indexOf(dest) > -1) {
    destLine = sandy;
    end = sandy.indexOf(dest);
    indexDestRichmond = sandy.indexOf('Richmond');
    console.log('Destination Line: ' + destLine)
} else if (glenWaverly.indexOf(dest) > -1) {
    destLine = glenWaverly;
    end = glenWaverly.indexOf(dest);
    indexDestRichmond = sandy.indexOf('Richmond');
    console.log('Destination Line: ' + destLine)
} else if (alamein.indexOf(dest) > -1) {
    destLine = alamein;
    end = alamein.indexOf(dest);
    indexDestRichmond = sandy.indexOf('Richmond');
    console.log('Destination Line: ' + destLine)
}

if (originLine === destLine) {
    console.log('All on the same trian line')
    if (start < end) {

        for (var i = start; i <= end; i++) {
            journey.push(originLine[i])
        }
        console.log(journey)
    } else {
        for (var i = start; i >= end; i--) {
            journey.push(originLine[i])
        }
        console.log(journey)
    }
        
} 

else if (originLine !== destLine) {
    console.log('You will need to change trains')
    if (start < indexOriginRichmond) {

        console.log('First part of journey: ' + origin + ' comes before Richmond')

        for (var i = start; i <= indexDestRichmond; i++) {
            journey.push(originLine[i])
        }
        
    } else {
        console.log('First part of journey:  Go backwards from ' + origin + ' to Richmond')
        for (var i = start; i >=indexOriginRichmond; i--) {
            journey.push(originLine[i])
        }
    }

    if (end < indexDestRichmond) {

        console.log('Second part of journey:  Destination comes after Richmond')

        for (var i = end; i <= indexDestRichmond; i++) {
            journey2.push(destLine[i])
        }
        
    } else {
        console.log('Second part of journey:  Go backwards from Richmond to Destination')
        for (var i = end; i >=indexDestRichmond; i++) {
            journey2.push(destLine[i])
        }
    }

}
console.log('Origin: ' + origin + ' and index = ' + start)
console.log('Richmond index in origin line is ' + indexOriginRichmond)
console.log('\n')
console.log('Destination: ' + dest + ' and index = ' + end)
console.log('Richmond index in destination line is ' + indexDestRichmond)
console.log('\n')

console.log(journey)
console.log('Get off train at Richmond, board train toward ' + dest)
console.log(journey2)


