// Problem 6
const fs = require('fs');
const dimensions = fs.readFileSync('./input.txt', 'utf8');
const instructions = dimensions.split('\n');
let line = [];
let litUp = {};
let lightsLit = 0;
let coordinate = "";
let topCorner = "";
let bottomCorner = "";

const turnOn = (bottomCorner, topCorner) => {
    for(let i = bottomCorner[0]; i <= topCorner[0]; i++) {
        for(let j = bottomCorner[1]; j <= topCorner[1]; j++) {
            coordinate = `${i},${j}`;
            if(!litUp[coordinate] || litUp[coordinate] === "off") {
                litUp[coordinate] = "on";
                lightsLit ++;
            }
        }
    }
}

const turnOff = (bottomCorner, topCorner) => {
    for(let i = bottomCorner[0]; i <= topCorner[0]; i++) {
        for(let j = bottomCorner[1]; j <= topCorner[1]; j++) {
            coordinate = `${i},${j}`;
            if(litUp[coordinate] && litUp[coordinate] === "on") {
                litUp[coordinate] = "off";
                lightsLit --;
            } else {
                litUp[coordinate] = "off";
            }
        }
    }
}

const toggle = (bottomCorner, topCorner) => {
    for(let i = bottomCorner[0]; i <= topCorner[0]; i++) {
        for(let j = bottomCorner[1]; j <= topCorner[1]; j++) {
            coordinate = `${i},${j}`;
            if(litUp[coordinate] === "on") {
                litUp[coordinate] = "off";
                lightsLit --;
            }
            else if(litUp[coordinate] === "off") {
                litUp[coordinate] = "on";
                lightsLit ++;
            }
            else {
                litUp[coordinate] = "on";
                lightsLit ++;
            }
        }
    }
}

const solutionPart1 = () => {
    for(let i = 0; i < instructions.length; i++) {
        line = instructions[i].split(' ');
        if(line[0] === "turn") {
            bottomCorner = line[2].split(',').map(Number);
            topCorner = line[4].split(',').map(Number);
            if(line[1] === "on") {
                turnOn(bottomCorner,topCorner);
            } else {
                turnOff(bottomCorner,topCorner);
            }
        } else {
            bottomCorner = line[1].split(',').map(Number);
            topCorner = line[3].split(',').map(Number);
            toggle(bottomCorner,topCorner);
        }
    }
    console.log(`${lightsLit} lights are lit.`);
}

solutionPart1();