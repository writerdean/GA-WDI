
// Time to fool some archaeologists
// You are a villain trying to trap an adventuring archaeologist. Write a function 'makeFakeMap' that takes two numbers as arguments and returns an array of arrays to represent a map. It should be filled with the 'A' character, except for one, which should be an uppercase X (as below). The position of X should be determined randomly.

// Bonus 1
// Modify your function to take a third key argument and generate maps with a single key character inserted randomly.

// THIS WORKS - DO NOT CHANGE!!!!!
function makeFakeMap (stringNum, arrayNum, treasure) {
    var map = []
    
    for (j = 0; j < arrayNum; j++) {
        var line = []
        for (i=0; i<= stringNum; i++) {
            line.push('A')
        }
    map.push(line)
    }

    var x = Math.floor(Math.random() * stringNum)
    var y = Math.floor(Math.random() * arrayNum)
    map[x][y] = treasure
    console.log(map)
}


// Bonus 2
// Modify your function to generate maps with 'regions' that you can control. The regions you should support are below:

// F: generate a forest W: generate a body of water D: generate a desert region

// The argument after the region should be the size of that region. For example, region size 2 would make a 2x2 region within your map (placed randomly) in which one of the tiles is the treasure marker, X. Inspect the sample output below. The Region size argument should not be allowed to be bigger than the map itself.

// //bonus 2 output:

// makeFakeMap(5, 5, 'F', 2, 'X');

// [
// ["A","A","A","A","A"],
// ["A","A","A","A","A"],
// ["A","A","F","X","A"],
// ["A","A","F","F","A"],
// ["A","A","A","A","A"]
// ];




