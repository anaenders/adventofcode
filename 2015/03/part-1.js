// Puzzle 3.1

const fs = require('fs')
const directions = fs.readFileSync('./input.txt', 'utf8')
let coordinates = {x: 0, y:0}
let currentPosition = "0,0"
let visitedHouses = {}
let counter = 0

visitedHouses[currentPosition] = 1
counter += 1

for(direction in directions) {

    switch(directions[direction]) {
        case "^":
            coordinates.y += 1
            break
        case "v":
            coordinates.y -= 1
            break
        case ">":
            coordinates.x += 1
            break
        case "<":
            coordinates.x -= 1
            break
    }

    currentPosition = `${coordinates.x},${coordinates.y}`

    if(!visitedHouses[currentPosition]) {
        visitedHouses[currentPosition] = 1
        counter += 1
    }
}

console.log(`${counter} houses received at least one gift.`)