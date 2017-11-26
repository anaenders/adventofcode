// Problem 11

const incrementString = (input) => {
	let arr = input.split("")
	for (let i = arr.length - 1; i >= 0; i--) {
		let currentLetter = arr[i].charCodeAt(0)
		if (currentLetter === 122) {
			currentLetter = 97
			arr[i] = String.fromCharCode(currentLetter)
		} else {
			currentLetter += 1
			arr[i] = String.fromCharCode(currentLetter)
			return arr
		}
	}
}

const validateString = (arr) => {
	let increasingStraight = false;
	for (let i = 0; i < arr.length - 2; i++) {
		// Passwords must include one increasing straight of at least three letters, like abc, bcd, cde, and so on, up to xyz. 
		// They cannot skip letters; abd doesn't count.
		let currentLetter = arr[i].charCodeAt(0)
		let currentPlusOne = currentLetter + 1
		let currentPlusTwo = currentLetter + 2
		if (((arr[i + 1].charCodeAt(0)) === currentPlusOne) && (arr[i + 2].charCodeAt(0)) === currentPlusTwo) {
			increasingStraight = true
			break;
		}
	}
	let allowedLetters = true
	for (let i = 0; i < arr.length; i++) {
		// Passwords may not contain the letters i, o, or l, as these letters can be mistaken for other characters and 
		// are therefore confusing.
		let currentLetter = arr[i].charCodeAt(0)
		if (currentLetter === 105 || currentLetter === 111 || currentLetter === 108) {
			allowedLetters = false
			break
		}
	}
	let minPairs = false
	let pairs = 0
	for (let i = 0; i < arr.length - 1; i++) {
		// Passwords must contain at least two different, non-overlapping pairs of letters, like aa, bb, or zz.
		let currentLetter = arr[i].charCodeAt(0)
		let currentPlusOne = arr[i+1].charCodeAt(0)
		if (currentLetter === currentPlusOne) {
			pairs += 1
			i += 1
		}
		if (pairs >= 2) {
			minPairs = true
			break
		} 
	}
	return increasingStraight && allowedLetters && minPairs
}

const solution = (input) => {
	let current = input
	while (true) {
		let arr = incrementString(current)
		let valid = validateString(arr)
		current = arr.join("")
		if (valid) {
			return current
		}
	}
}

let part1 = solution('hxbxwxba')
let part2 = solution('hxbxxyzz')

console.log(part1)
console.log(part2)