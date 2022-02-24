//Create a function that receives a cost and its payment. The function should figure out the change, with the number of quarters, dimes, nickels, pennies needed for it.

//This function only finds how much change needs to be given back.
function payment(cost, paid)
{
	if (paid > cost && paid - cost >= 1)
		return `The change is ${paid - cost} dollars`;
	
	else if (paid > cost && paid - cost < 1)
		return `The change is ${paid - cost} cents`;
	
	else if (paid == cost)
		return `There is no change`;
	
	return `Something is wrong...`
}
console.log(payment(13.50, 20));


const test1 = [2, 1, 0, 0.1, 0.2];
const test2 = [0.2, 0.1, 0, 1, 2];
const MONEY = [100, 50, 20, 10, 5, 2, 1, 0.50, 0.25, 0.10, 0.05];
console.log(MONEY.sort(function(a, b) {
	if (a > b)
		return 1;
	
	else if (a < b)
		return -1;
	
	return 0;
}));



















//let price = Math.ceil(Math.random() * 100);
//let payment = price * 1.3;