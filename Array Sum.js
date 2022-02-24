//https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/
// 4. Calculate the sum of numbers within an array.
// Create a function that can return the sum of a particular column or row number in a table.



function arraySum(input)
	{
		let sum = 0;
		
		for (let i = 0; i <= input.length -1; i++) 
			sum += input[i];
		
		return sum;
	}

let array = [10.2, -10.1];
console.log(arraySum(array));

//retarded ass floating point math: 0.30000000000000004.com