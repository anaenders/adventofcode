// Problem 5
const fs = require('fs');
const dimensions = fs.readFileSync('./input.txt', 'utf8');
const lines = dimensions.split('\n');
let line = [];
let atLeast3Vowels;
let doubleLetters;
let badSubstring;
let niceStrings = 0;
let newNiceStrings = 0;

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
        niceStrings ++;
    }
}

console.log(`There are ${niceStrings} nice strings.`);

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
                    // console.log(`${pair[j]} and ${pair[k]} are a pair`);
                    return match = true;
                }
            }
        }
    }
}

const findPalindromes = (line) => {
    let triplet = [];
    let match = false;
    for(let i = 0; i < line.length - 3; i++) {
        triplet[i] = [[line[i], line[i+1], line[i+2]]];
    }
    for(let j = 0; j < triplet.length; j++) {
        if(triplet[j][0][0] === triplet[j][0][2]) {
            // console.log(`${triplet[j]} is a palindrome`);
            return match = true;
        }
    }
}

for(let i = 0; i < lines.length; i++) {
    line = lines[i].split('');
    let pairs = findPairs(line);
    let palindromes = findPalindromes(line);

    if(pairs && palindromes) {
        newNiceStrings ++;
        // console.log(`${lines[i]} is a nice string.`);
    }
}

console.log(`There are ${newNiceStrings} new nice strings.`);