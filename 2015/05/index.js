// Problem 5
const fs = require('fs');
const dimensions = fs.readFileSync('./input.txt', 'utf8');
const lines = dimensions.split('\n');
let line = [];

const checkForVowels = (line) => {
    let atLeast3Vowels = false;
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
    return atLeast3Vowels;
}

const checkForRepeats = (line) => {
    let doubleLetters = false;
    for(let i = 0; i < line.length - 1; i++) {
        if(line[i] === line[i+1]) {
            doubleLetters = true;
        }
    }
    return doubleLetters;
}

const checkForBadSubstrings = (line) => {
    let badSubstring = false;
    let substring = "";
    for(let i = 0; i < line.length - 1; i++) {
        substring = `${line[i]}${line[i+1]}`;
        if(substring === "ab" || substring === "cd" || substring === "pq" || substring === "xy") {
            badSubstring = true;
        }
    }
    return badSubstring;
}

// Part 1
const solutionPart1 = () => {
    let niceStrings = 0;
    for(let i = 0; i < lines.length; i++) {
        line = lines[i].split('');
        if(checkForVowels(line) && checkForRepeats(line) && !checkForBadSubstrings(line)) {
            niceStrings ++;
        }
    }
    return console.log(`There are ${niceStrings} nice strings.`);
}

solutionPart1();

// Part 2
const findPairs = (line) => {
    let pair = [];
    let match = false;
    for(let i = 0; i < line.length - 1; i++) {
        pair[i] = `${line[i]}${line[i+1]}`;
    }
    for(let j = 0; j < pair.length; j++) {
        for(let k = 0; k < pair.length; k++) {
            if(k != j && (k != j - 1) && (k != j+1)) {
                if(pair[j] === pair[k]) {
                    match = true;
                }
            }
        }
    }
    return match;
}

const findPalindromes = (line) => {
    let findMatch = [];
    let match = false;
    for(let i = 0; i < line.length; i++) {
        findMatch[i] = line[i];
    }
    for(let j = 0; j < findMatch.length; j++) {
        if(findMatch[j] === findMatch[j+2]) {
            match = true;
        }
    }
    return match;
}

const solutionPart2 = () => {
    let niceStrings = 0;
    let pairs = "";
    let palindromes = "";
    for(let i = 0; i < lines.length; i++) {
        line = lines[i].split('');
        pairs = findPairs(line);
        palindromes = findPalindromes(line);
        if(pairs && palindromes) {
            niceStrings ++;
        }
    }
    return console.log(`There are ${niceStrings} nice strings.`);
}

solutionPart2();