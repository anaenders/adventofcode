// Puzzle 1.1
var fs = require('fs')
var puzzleInput = fs.readFileSync('./input.txt', 'utf8')
var currentFloor = 0

for (input in puzzleInput) {
    if (puzzleInput[input] == "(") {
        currentFloor++
    } else {
        currentFloor--
    }
}

console.log (`The instructions take Santa to floor ${currentFloor}.`)