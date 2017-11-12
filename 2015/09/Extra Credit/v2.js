// Find all the possible n combinations of array, where n = 3
// example: (3, [1,2,3,4]) -> [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]

const combos = (n, list) => {
	console.log('combos', n, list)
	if (n == 0) {
		return [];
	}
	if (n == list.length) {
		return [list.slice()];
	}
	if (n > list.length) {
		return [];
	}
	const listCopy = list.slice();
	let pickOne = listCopy.splice(0,1);
	console.log('picked', pickOne, listCopy)
	let results = combos(n, listCopy);
	console.log('results', results);
	let subResults = combos(n-1, listCopy);
	console.log('subResults', subResults);
	if (subResults.length == 0) {
		results.push(pickOne);
	}
	for (i = 0; i < subResults.length; i++) {
		results.push(pickOne.concat(subResults[i]));
	}
	return results;
}

console.log(combos(3, [1,2,3,4])); 