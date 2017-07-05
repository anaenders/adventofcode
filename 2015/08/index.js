// Problem 8

const fs = require('fs');
const strings = fs.readFileSync('./input.txt', 'utf8');
const line = strings.split('\n');

const getTotalCharCount = (action) => {
    let original = 0;
    let strArr, encoded;
    let counter = 0;
    for(let i = 0; i < line.length; i++) {
        const str = line[i];
        for(let j = 0; j < str.length; j++) {
            strArr = str.split("");
            original ++;
        }
        if(action === "decode") {
            strArr.splice(0, 1);
            strArr.splice(-1, 1);
            counter += getDecodedStrLength(strArr);
        } else if(action === "encode") {
            counter += getEncodedStrLength(str);
        }
    }
    if(action === "decode") {
        return original - counter;
    } else if (action === "encode") {
        return counter - original;
    }
}

const getDecodedStrLength = (strArr) => {
    for (let i = 0; i < strArr.length-1; i++) {
        if(strArr[i] === "\\" && strArr[i+1] === "\\") {
            strArr.splice(i, 1);
        }
        else if(strArr[i] === "\\" && strArr[i+1] === "\"") {
            strArr.splice(i, 1);
        }
        else if(strArr[i] === "\\" && strArr[i+1] === "x") {
            let hex = isHex(strArr, i)
            if(hex !== null) {
                strArr.splice(i, 4, hex);
            } else {
                continue;
            }
        }
    }
    return strArr.length;
}

const getEncodedStrLength = (str) => {
    let newStr = "";
    let firstRule = "\\\\";
    let secondRule = "\\\"";
    let re1 = /\\/gi;
    let re2 = /\"/gi;
    newStr = str.replace(re1, firstRule).replace(re2, secondRule);
    newStr = "\"" + newStr + "\"";
    return newStr.length;
}

const isHex = (strArr, i) => {
    if (!strArr[i + 3]) {
        return null
    }
    if(strArr[i] === "\\" && strArr[i+1] === "x") {
        let hex = `${strArr[i]}${strArr[i+1]}${strArr[i+2]}${strArr[i+3]}`;
        if(/(^\\x[0-9A-F]{2}$)/i.test(hex)) {
            return hex;
        } else {
            return null;
        }
    }
}

const solutionPart1 = () => {
    console.log(`Total number of characters in the file is ${getTotalCharCount("decode")}`);
}

solutionPart1();

const solutionPart2 = () => {
    console.log(`Total number of characters in the file is ${getTotalCharCount("encode")}`);
}

solutionPart2();