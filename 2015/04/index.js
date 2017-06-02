// Problem 4

let md5 = require('md5');
let secret = "yzbqklnj";
let md5Hash = "";
let md5HashArr = [];
let num = 0;
let startOfString = "";
let newSecret = "";

const hashIt = (secret) => {
    md5Hash = md5(secret);
    return md5Hash;
}

const growIt = () => {
    num ++;
    num.toString();
    newSecret = secret + num;
    return newSecret;
}

const findZeros = (secret, zeros) => {
    md5Hash = hashIt(secret);
    md5HashArr =  md5Hash.split('');
    startOfString = "";
    for (let j = 0; j < zeros; j++) {
        startOfString += md5HashArr[j];
    }
    return startOfString.toString();
}

// Part 1

startOfString = findZeros(secret, 5);

while (startOfString != "00000") {
    newSecret = growIt();
    startOfString = findZeros(newSecret, 5);
}

console.log(`With a secret key of ${secret}, the lowest number it combines with to make an MD5 hash starting with five zeroes is ${num}.`);

// Part 2

startOfString = findZeros(secret, 6);

while (startOfString != "000000") {
    newSecret = growIt();
    startOfString = findZeros(newSecret, 6);
}

console.log(`With a secret key of ${secret}, the lowest number it combines with to make an MD5 hash starting with six zeroes is ${num}.`);