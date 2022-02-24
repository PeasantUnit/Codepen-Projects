let day = Math.ceil(Math.random() * 7); //Generates a random number between 1 and 7.

function weekendChecker(input)
	{
		switch (input) 
		{
			case 1: 
			case 2: 
			case 3: 
			case 4: 
			case 5:
				return `Today is ${input}. It is not the weekend.`;
				
			case 6: 
			case 7:
				return `Today is ${input}. It is the weekend!`;
				
			default: 
				return 'Something is wrong...';	
		}
	}

console.log(weekendChecker(day));