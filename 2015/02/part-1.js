// Puzzle 2.1
const fs = require('fs')
const dimensions = fs.readFileSync('./input.txt', 'utf8')
const lines = dimensions.split('\n')

let value = []
let smallestArea = 0
let totalArea = 0

for(let line = 0; line < lines.length; line++) {
    value = (lines[line]).split('x')
    let l = value[0]
    let w = value[1]
    let h = value[2]

    let lengthArea = l * w
    let widthArea = w * h
    let heightArea = h * l

    if (lengthArea <= widthArea && lengthArea <= heightArea) {
        smallestArea = lengthArea
    } else if (widthArea <= lengthArea && widthArea <= heightArea) {
        smallestArea = widthArea
    } else {
        smallestArea = heightArea
    }

    let currentArea = 2 * lengthArea + 2 * widthArea + 2 * heightArea + smallestArea

    totalArea += currentArea
}

console.log(totalArea)