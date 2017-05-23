// Puzzle 2.2
const fs = require('fs')
const dimensions = fs.readFileSync('./input.txt', 'utf8')
const lines = dimensions.split('\n')

let ribbon = 0
let bow = 0
let totalRibbon = 0

for(let line = 0; line < lines.length; line++) {
    let value = (lines[line]).split('x')
    let l = parseInt(value[0])
    let w = parseInt(value[1])
    let h = parseInt(value[2])

    if (l >= w && l >= h) {
        ribbon = w + w + h + h
    } else if (w >= l && w >= h) {
        ribbon = l + l + h + h
    } else {
        ribbon = w + w + l + l
    }

    bow = l * w * h
    totalRibbon += ribbon + bow
}

console.log(`The elves need a total ribbon amount of ${totalRibbon}`)