//Creates a random array
function arrayMaker(input)
{
	let array = [];
	for (let i = 0; i < input; i++) 
		array.push(Math.floor(Math.random() * 10 * input));
	
	return array;
}
let arrayRandom = arrayMaker(12); //How many elements should the array have.
console.log("Array: " + arrayRandom);



//Prints even numbers of a given array.
function evenChecker(input) 
{	
	let array = [];
	for (let i = 0; i <= input.length - 1; i++)
		if ((input[i] % 2) == 0)
			array.push(input[i]);
		
	return array;
}
let arrayEven = evenChecker(arrayRandom);
console.log("Even: " + arrayEven);



//Prints odd numbers of a given array.
function oddChecker(input) 
{	
	let array = [];	
	for (let i = 0; i <= input.length - 1; i++)
		if ((input[i] % 2) == 1)
			array.push(input[i]);
		
	return array;
}
let arrayOdd = oddChecker(arrayRandom);
console.log("Odd: " + arrayOdd);