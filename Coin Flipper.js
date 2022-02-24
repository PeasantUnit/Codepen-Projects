//Simulate the flipping of a single coin, however many times the user decides, recording the outcomes and counting the number of tails and heads.

function coinFlip(input)
{
	let heads = 0;
	let tails = 0;
	
	for (let i = 0; i < input; i++)
		{
			if (Math.floor(Math.random() * 2) == 0)
				heads++;
			
			else tails++;
		}
	return `Heads: ${heads} Tails: ${tails}`
}

console.log(coinFlip(10));