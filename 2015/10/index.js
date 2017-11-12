// Problem 10

const lookAndSay = (value) => {
	let counter = 1;
	let current = value[0];
	let result = '';
	let next;
	for (let i = 0; i < value.length - 1; i++) {
		next = value[i + 1];
		if (current === next) {
			counter += 1;
		} else {
			result += counter.toString() + current;
			counter = 1;
			current = next;
		}
	}
	result += counter.toString() + current;
	return result;
}

const solution = (iterations) => {
	let input = '3113322113';
    for (let j = 0; j < iterations; j++) {
		input = lookAndSay(input);
	}
    console.log(input.length);
}

solution(40);
solution(50);