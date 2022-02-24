//https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/
// 3. Create a length converter function.



function convertLength(input)
	{
		return input / 1.609;
	}

let userInput = 10;
console.log(`${userInput } kilometers equals to ${convertLength(userInput).toFixed(2)} miles!`);