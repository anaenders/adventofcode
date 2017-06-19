// Problem 6
const fs = require('fs');
const dimensions = fs.readFileSync('./input.txt', 'utf8');
const instructions = dimensions.split('\n');
let line = [];

const LightDisplay = class {
    constructor() {
        this.line = [];
        this.lights = {};
        this.lit = 0;
        this.totalBrightness = 0;
        this.coordinates = "";
    }

    turnOn(bottomCorner, topCorner) {
        for(let i = bottomCorner[0]; i <= topCorner[0]; i++) {
            for(let j = bottomCorner[1]; j <= topCorner[1]; j++) {
                this.coordinates = `${i},${j}`;
                if(!this.lights[this.coordinates] || this.lights[this.coordinates] === "off") {
                    this.lights[this.coordinates] = "on";
                    this.lit ++;
                }
            }
        }
    }

    turnOff(bottomCorner, topCorner) {
        for(let i = bottomCorner[0]; i <= topCorner[0]; i++) {
            for(let j = bottomCorner[1]; j <= topCorner[1]; j++) {
                this.coordinates = `${i},${j}`;
                if(this.lights[this.coordinates] && this.lights[this.coordinates] === "on") {
                    this.lights[this.coordinates] = "off";
                    this.lit --;
                } else {
                    this.lights[this.coordinates] = "off";
                }
            }
        }
    }

    toggle(bottomCorner, topCorner) {
        for(let i = bottomCorner[0]; i <= topCorner[0]; i++) {
            for(let j = bottomCorner[1]; j <= topCorner[1]; j++) {
                this.coordinates = `${i},${j}`;
                if(this.lights[this.coordinates] === "on") {
                    this.lights[this.coordinates] = "off";
                    this.lit --;
                }
                else if(this.lights[this.coordinates] === "off") {
                    this.lights[this.coordinates] = "on";
                    this.lit ++;
                }
                else {
                    this.lights[this.coordinates] = "on";
                    this.lit ++;
                }
            }
        }
    }

    getLightsLit() {
        return this.lit;
    }

    increaseBrightness(bottomCorner, topCorner) {
        let count = 0;
        for(let i = bottomCorner[0]; i <= topCorner[0]; i++) {
            for(let j = bottomCorner[1]; j <= topCorner[1]; j++) {
                this.coordinates = `${i},${j}`;
                if(this.lights[this.coordinates]) {
                    this.count = this.lights[this.coordinates];
                    this.lights[this.coordinates] = this.count + 1;
                } else {
                    this.lights[this.coordinates] = 1;
                }
                this.totalBrightness ++;
            }
        }
    }

    decreaseBrightness(bottomCorner, topCorner) {
        let count = 0;
        for(let i = bottomCorner[0]; i <= topCorner[0]; i++) {
            for(let j = bottomCorner[1]; j <= topCorner[1]; j++) {
                this.coordinates = `${i},${j}`;
                if(this.lights[this.coordinates] && this.lights[this.coordinates] > 0) {
                    this.count = this.lights[this.coordinates];
                    this.lights[this.coordinates] = this.count - 1;
                    this.totalBrightness --;
                } else {
                    this.lights[this.coordinates] = 0;
                }
            }
        }
    }

    toggleBrightness(bottomCorner, topCorner) {
        let count = 0;
        for(let i = bottomCorner[0]; i <= topCorner[0]; i++) {
            for(let j = bottomCorner[1]; j <= topCorner[1]; j++) {
                this.coordinates = `${i},${j}`;
                if(this.lights[this.coordinates]) {
                    this.count = this.lights[this.coordinates];
                    this.lights[this.coordinates] = this.count + 2;
                } else {
                    this.lights[this.coordinates] = 2;
                }
                this.totalBrightness += 2;
            }
        }
    }

    getTotalBrightness() {
        return this.totalBrightness;
    }
}

// Part 1
const part1 = new LightDisplay();

const solutionPart1 = () => {
    for(let i = 0; i < instructions.length; i++) {
        line = instructions[i].split(' ');
        if(line[0] === "turn") {
            bottomCorner = line[2].split(',').map(Number);
            topCorner = line[4].split(',').map(Number);
            if(line[1] === "on") {
                part1.turnOn(bottomCorner,topCorner);
            } else {
                part1.turnOff(bottomCorner,topCorner);
            }
        } else {
            bottomCorner = line[1].split(',').map(Number);
            topCorner = line[3].split(',').map(Number);
            part1.toggle(bottomCorner,topCorner);
        }
    }
    console.log(`${part1.getLightsLit()} lights are lit.`);
}

solutionPart1();

// Part 2
const part2 = new LightDisplay();

const solutionPart2 = () => {
    for(let i = 0; i < instructions.length; i++) {
        line = instructions[i].split(' ');
        if(line[0] === "turn") {
            bottomCorner = line[2].split(',').map(Number);
            topCorner = line[4].split(',').map(Number);
            if(line[1] === "on") {
                part2.increaseBrightness(bottomCorner,topCorner);
            } else {
                part2.decreaseBrightness(bottomCorner,topCorner);
            }
        } else {
            bottomCorner = line[1].split(',').map(Number);
            topCorner = line[3].split(',').map(Number);
            part2.toggleBrightness(bottomCorner,topCorner);
        }
    }
    console.log(`The total brightness of all lights combined is ${part2.getTotalBrightness()}.`);
}

solutionPart2();