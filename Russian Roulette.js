//Good luck!

function russianR(input)
{
	if (Math.ceil(Math.random() * input) < input)
		{
			return "Click";
		}
	return "BANG";
}

let chamber = 6;
console.log(russianR(chamber));