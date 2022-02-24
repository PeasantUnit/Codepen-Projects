// https://www.codecademy.com/resources/blog/10-javascript-code-challenges-for-beginners/
// 2. Print a table containing multiplication tables.



//TODO: fix the "negativity" issue with subtraction. 
//TODO: Fix .toFixed(2) showing two zeroes on rounded numbers.
//NOTE: console.table(array); //Codepen does not display 'console.table' properly.
function tables(inputType, inputNumber) 
{ 
	let array = [];
	for (let i = 0; i <= 10; i++)
		
		if (inputType == '*' && inputNumber >= 0 && inputNumber <= 10)
			array.push(`${inputNumber} ${inputType} ${i} = ${inputNumber * i}`); 
		
		else if (inputType == '+' && inputNumber >= 0 && inputNumber <= 10)
			array.push(`${inputNumber} ${inputType} ${i} = ${inputNumber + i}`); 

		else if (inputType == '/' && inputNumber >= 0 && inputNumber <= 10)
			array.push(`${inputNumber} ${inputType} ${i} = ${(inputNumber / i).toFixed(2)}`); 

		else if (inputType == '-' && inputNumber >= 0 && inputNumber <= 10)
			array.push(`${inputNumber} ${inputType} ${i} = ${inputNumber - i}`); 
	
		else
			return 'Something is wrong. Valid operators: ( * / + - ). Valid numbers: from 1 to 10. Negative numbers are invalid.';
	
    return array;
}

console.log(tables('i', 3));