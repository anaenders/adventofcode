// Find all the possible n combinations of array
const combos = (arr, n) => {
    // Base case 1: if it's asking for as many or more combinations than there are elements, return the entire array
    if(n >= arr.length) {
        return [arr];
    }
    // Base case 2: if it's asking for zero or less combinations than there are elements, return empty array
    else if(n <= 0) {
        return [[]];
    }
    // Recursive case 1: if it doesn't meet the conditions above, recursion is allowed
    else {
        // Store the removed 0th element of original array into new array
        let firstElement = arr.slice(0, 1);
        // Make array smaller by removing the 0th element
        let allButFirstElement = arr.slice(1);
        // All possible combinations of array without 0th element
        let solutionsWithoutFirstElement = combos(allButFirstElement, n);
        // All possible combinations of array with 0th element before adding 0th element
        let solutionsRequiringFirstElement = combos(allButFirstElement, n - 1);
        // Add first element to the solutions that we know need it.
        let solutionsWithFirstElement = []
        for(let i = 0; i < solutionsRequiringFirstElement.length; i++) {
            solutionsWithFirstElement.push(firstElement.concat(solutionsRequiringFirstElement[i]));
        }
        return solutionsWithFirstElement.concat(solutionsWithoutFirstElement)
    }
}

console.log(combos([ 1, 2, 3, 4], 3));