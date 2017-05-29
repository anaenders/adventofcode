const fs = require('fs')
const directions = fs.readFileSync('./input.txt', 'utf8')
let coordinates = "0,0"
let houses = {}
let count = 0

houses[coordinates] = 1
count += 1

const calcMoves = (startPosition, moveBy) => {
    let position = {x: 0, y:0}

    for(startPosition; startPosition < directions.length; startPosition += moveBy) {
        switch(directions[startPosition]) {
            case "^":
                position.y += 1
                break
            case "v":
                position.y -= 1
                break
            case ">":
                position.x += 1
                break
            case "<":
                position.x -= 1
                break
        }

        coordinates = `${position.x},${position.y}`

        if(!houses[coordinates]) {
            houses[coordinates] = 1
            count += 1
        }
    }
}


// Part 1
// Comment out the code in part 2 if you want accurate results for part 1

calcMoves(0, 1)

console.log(`Santa delivered at least one gift to ${count} houses.`)

// Part 2
// Comment out the code in part 1 if you want accurate results for part 2

calcMoves(0, 2)
calcMoves(1, 2)

console.log(`Santa and Robo-santa delivered at least one gift to ${count} houses.`)