// Problem 3

const fs = require('fs')
const directions = fs.readFileSync('./input.txt', 'utf8')

const VisitHouses = class {
    constructor() {
        this.coordinates = "0,0"
        this.houses = {}
        this.houses[this.coordinates] = 1
        this.count = 1
    }

    getCount() {
        return this.count
    }

    setMoves(startPosition, moveBy) {
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

            this.coordinates = `${position.x},${position.y}`

            if(!this.houses[this.coordinates]) {
                this.houses[this.coordinates] = 1
                this.count += 1
            }
        }

    }
}

// Part 1

const part1Solution = new VisitHouses()
part1Solution.setMoves(0, 1)

console.log(`Santa delivered at least one gift to ${part1Solution.getCount()} houses.`)

// Part 2

const part2Solution = new VisitHouses()
part2Solution.setMoves(0, 2)
part2Solution.setMoves(1, 2)

console.log(`Santa and Robo-santa delivered at least one gift to ${part2Solution.getCount()} houses.`)