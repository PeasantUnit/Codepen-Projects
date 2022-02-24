//Create a function that checks if the input is a Palindrome.



//TODO: add support for phrases or apostrophes.
function palindromeChecker(input) 
{ 
	for (let i = 0; i < Math.floor(input.length / 2); i++)
		if (input[i] != input[input.length - 1 - i]) 
			return false;

	return true;
}
console.log(palindromeChecker("racecar"));