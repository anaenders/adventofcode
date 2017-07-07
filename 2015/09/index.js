// Problem 9

const fs = require('fs');
const instructions = fs.readFileSync('./input.txt', 'utf8');
const line = instructions.split('\n');
const unsortedRoutes = {};
const sortedRoutes = {};
const uniqueLocations = {};

const getShortestRoute = () => {

    // Location pairs -> distances
    for(let i = 0; i < line.length; i++) {
        let [ locations, distances ] = line[i].split(' = ');
        unsortedRoutes[locations] = parseInt(distances);
    }

    console.log(unsortedRoutes);

    // Sort from shortest to longest distances
    shortestToLongestDistances = Object.keys(unsortedRoutes).sort(function(a,b) {
        return unsortedRoutes[a] - unsortedRoutes[b];
    });

    // New object with sorted location pairs -> distances
    for(let i = 0; i < shortestToLongestDistances.length; i++) {
        for (let key of Object.keys(unsortedRoutes)) {
            if (key === shortestToLongestDistances[i]) {
                sortedRoutes[key] = unsortedRoutes[key];
            }
        }
    }

    // Identify unique locations
    for(let i = 0; i < shortestToLongestDistances.length; i++) {
        const [ pointA, pointB ] = shortestToLongestDistances[i].split(' to ');
        if(!uniqueLocations[pointA]) {
            uniqueLocations[pointA] = 1;
        }
        if(!uniqueLocations[pointB]) {
            uniqueLocations[pointB] = 1;
        }
    }

}

const solutionPart1 = () => {
    console.log(`The shortest route would be ${getShortestRoute()}`);
}

solutionPart1();