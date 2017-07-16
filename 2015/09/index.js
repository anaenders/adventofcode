// Problem 9

const fs = require('fs');
const instructions = fs.readFileSync('./input.txt', 'utf8');
const line = instructions.split('\n');

const sortObj = (obj) => {
    const sortedObj = {};
    const tempArr = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
    tempArr.forEach((key) => sortedObj[key] = obj[key]);
    return sortedObj;
}

const objToArr = (obj) => {
    for(let i = 0; i < Object.keys(obj).length; i++) {
        arr = Object.keys(obj);
    }
    return arr;
}

const getShortestRoute = () => {
    const routes = {}, uniqueLocations = {}, combos = {};
    let uniqueLocationsArr, routesArr, combosArr;

    // Object with routes
    for(let i = 0; i < line.length; i++) {
        let [ locations, distances ] = line[i].split(' = ');
        let [ location1, location2 ]  = locations.split(' to ');
        let flipLocations = `${location2} to ${location1}`;
        routes[locations] = parseInt(distances);
        routes[flipLocations] = parseInt(distances);
    }

    // Array with routes
    routesArr = objToArr(routes);

    // Object with unique locations
    for(let i = 0; i < routesArr.length; i++) {
        const [ pointA, pointB ] = routesArr[i].split(' to ');
        if(!uniqueLocations[pointA]) {
            uniqueLocations[pointA] = 1;
        }
        if(!uniqueLocations[pointB]) {
            uniqueLocations[pointB] = 1;
        }
    }

    // Array with unique locations
    uniqueLocationsArr = objToArr(uniqueLocations);

    // Permutation logic
    const permutator = (inputArr) => {
        let results = [];
        const permute = (arr, m = []) => {
            if(arr.length === 0) {
                results.push(m);
            } else {
                for(let i = 0; i < arr.length; i++) {
                    let dupArr = arr.slice();
                    let tempArr = dupArr.splice(i, 1);
                    permute(dupArr.slice(), m.concat(tempArr));
                }
            }
        }
        permute(uniqueLocationsArr);
        return results;
    }

    // Permuted array
    combosArr = permutator(uniqueLocationsArr);

    // Distance logic
    for(let i = 0; i < combosArr.length; i++) {
        let temp = combosArr[i];
        let counter = 0;
        for(let j = 0; j < temp.length-1; j++) {
            if(routes[`${temp[j]} to ${temp[j + 1]}`]) {
                counter += routes[`${temp[j]} to ${temp[j + 1]}`];
            }
        }
        combos[temp] = counter;
    }

    // Object with sorted combos
    const sortedCombos = sortObj(combos);

    return [Object.keys(sortedCombos)[0] , sortedCombos[Object.keys(sortedCombos)[0]]];
}

const solutionPart1 = () => {
    const answer = getShortestRoute();
    console.log(`The shortest of these is ${answer[0]} with a distance of ${answer[1]}.`);
}

solutionPart1();