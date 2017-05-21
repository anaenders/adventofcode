// Puzzle 1.1

var fs = require('fs');
var puzzleInput = fs.readFileSync('./puzzle-1-input.txt', 'utf8');
var currentFloor = 0;

for (input in puzzleInput) {
    if (puzzleInput[input] == "(") {
        currentFloor++;
    } else {
        currentFloor--;
    }
}

console.log (currentFloor);