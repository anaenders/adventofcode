// Problem 7

const fs = require('fs');
const circuit = fs.readFileSync('./input.txt', 'utf8');
const instructions = circuit.split('\n');
let gateDefinitions = {};
let knownGates = {};

const executeInstruction = () => {
    for(let i = 0; i < instructions.length; i++) {
        const [ definition, gate ] = instructions[i].split(' -> ')
        gateDefinitions[gate] = definition;
    }
    return getGateValue("a");
}

const getGateValue = (gate) => {
    if(!knownGates[gate]) {
        knownGates[gate] = evaluateGate(gate);
    }
    return knownGates[gate];
}

const evaluateGate = (gate) => {
    let definition = gateDefinitions[gate];
    let definitionArray = definition.split(' ');
    if(definitionArray.length === 1) {
        if(isNaN(parseInt(definitionArray[0]))) {
            return getGateValue(definitionArray[0]);
        }
        return parseInt(definitionArray[0]);
    }
    if(definitionArray.length === 2) {
        return ~ getGateValue(definitionArray[1]);
    }
    if(definitionArray.length === 3) {
        let leftValue = 0;
        let rightValue = 0;
        if(isNaN(parseInt(definitionArray[0]))) {
            leftValue = getGateValue(definitionArray[0]);
        } else {
            leftValue = definitionArray[0];
        }
        if(isNaN(parseInt(definitionArray[2]))) {
            rightValue = getGateValue(definitionArray[2]);
        } else {
            rightValue = definitionArray[2];
        }
        if(definitionArray[1] === "AND") {
            return leftValue & rightValue;
        }
        if(definitionArray[1] === "OR") {
            return leftValue | rightValue;
        }
        if(definitionArray[1] === "LSHIFT") {
            return leftValue << rightValue;
        }
        if(definitionArray[1] === "RSHIFT") {
            return leftValue >> rightValue;
        }
    }
}

const solutionPart1 = () => {
    return executeInstruction();
}

console.log(`The value of a is ${solutionPart1()}`);

const solutionPart2 = () => {
    let a = solutionPart1();
    knownGates = {};
    knownGates["b"] = a;
    return executeInstruction();
}

console.log(`The value of a is ${solutionPart2()}`);