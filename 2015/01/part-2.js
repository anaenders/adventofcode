// Puzzle 1.2

var fs = require('fs');
var puzzleInput = fs.readFileSync('./puzzle-1-input.txt', 'utf8');
var currentFloor = 0;

for (input in puzzleInput) {
    if (puzzleInput[input] == "(") {
        currentFloor++;
    } else {
        currentFloor--;
    }
    if (currentFloor === -1) {
        break;
    }
}

console.log ("Santa entered the basement at character position " + (parseInt(input) + 1));