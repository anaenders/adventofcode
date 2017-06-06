// Problem 5
const fs = require('fs');
const dimensions = fs.readFileSync('./input.txt', 'utf8');
const lines = dimensions.split('\n');
let line = [];
let atLeast3Vowels;
let doubleLetters;
let badSubstring;
let count = 0;

const checkForVowels = (line) => {
    atLeast3Vowels = false;
    let vowels = 0;
    for(let i = 0; i < line.length; i++) {
        switch(line[i]) {
            case "a":
                vowels ++;
                break;
            case "e":
                vowels ++;
                break;
            case "i":
                vowels ++;
                break;
            case "o":
                vowels ++;
                break;
            case "u":
                vowels ++;
                break;
        }
    }
    if(vowels >= 3) {
        atLeast3Vowels = true;
    }
}

const checkForRepeats = (line) => {
    doubleLetters = false;
    for(let i = 0; i < line.length - 1; i++) {
        if(line[i] === line[i+1]) {
            doubleLetters = true;
        }
    }
}

const checkForBadSubstrings = (line) => {
    badSubstring = false;
    let substring = "";
    for(let i = 0; i < line.length - 1; i++) {
        substring = `${line[i]}${line[i+1]}`;
        switch(substring) {
            case "ab":
                badSubstring = true;
                break;
            case "cd":
                badSubstring = true;
                break;
            case "pq":
                badSubstring = true;
                break;
            case "xy":
                badSubstring = true;
                break;
        }
    }
}

// Part 1

for(let i = 0; i < lines.length; i++) {
    line = lines[i].split('');
    checkForVowels(line);
    checkForRepeats(line);
    checkForBadSubstrings(line);
    if(atLeast3Vowels && doubleLetters && !badSubstring) {
        count ++;
    }
}

console.log(`There are ${count} nice strings.`);

// Part 2