//This document aims to quickly and dirtily explain what types of functions exist and their differences.
//This document does not explain WHEN each type should be -- or -- is best suited to be -- used.
//This document does not explain the rules for what each of these types CAN or CANNOT be used for.

//Functions are like two-way machines. Think of them like a coffee bean grinder, for example.
//- They receive something in one end (coffee beans) and let out a new thing on the other end (coffee powder).
//- What type of thing a Function receives and what it does with it is decided by the programmer.
//- Functions receive "things" throught what is called 'Parameters'.
//- Functions usually have one or more parameters. There limit is 255, but you'll rarely see many.
//- Functions may also not have any parameters. It all depends on what the programmer wants to do.

//There are multiple types of functions:
//- Named Function: Not every function has a name. If they do, they're called 'Named Function'.
//- Anonymous Function: A function that does not have a name. These can only be used in specific ways.
//- Nameless Function: The same as an Anonymous Function.


//----------------------------------------------------------------------------------------------------


//There are also multiple ways of creating a function:

//- Function Declaration: The most basic of functions. These cannot be anonymous, only named.
//Note that the term for >creating< a function is 'declaring', therefore, it is THEORETICALLY not incorrect to claim that the creation of every function is a "function declaration", but in regards to the different types of functions, this is the correct name.
function yourFunctionName(yourParameter) 
{
   return 'whatever you want to do with ' + yourParameter;
}

//- Function Expression: A function stored within a variable. These can be named or anonymous, but are usually anonymous. The example below is named.
var fnExpression = function yourFunctionName(yourParameter) 
{
   return 'whatever you want to do with ' + yourParameter;
}

//- Function Expression: The same as above, but anonymously this time.
var fnExpression = function (yourParameter) 
{
   return 'whatever you want to do with ' + yourParameter;
}

//- Self-Invoking Function: Also called self-executing, is an anonymous function that "runs itself" (is invoked) immediately after its creation. These cannot be named, but they can have parameters or not.
//Due to the nature in which they are constructed, they normally look messy. There's nothing that can be done about it other than getting used to. If they are short functions, they may be written in a single line.
(function(yourParameter){
	console.log(yourParameter);
})('Hello World');

//- Self-Invoking Function: The same as above, but without parameters and on a single line:
(function(){console.log('Hello World');})();

//- Arrow function: Also called Lambda Function, is a shorter way of creating anonymous function expressions.
//These don't require the function method or the curly brackets, but can only be used for short functions.
(yourParameter) => console.log(yourParameter);