/**
 * ===== Troubleshooting =====
 * The function below should log the number 2, however it does not, 
 * see if you can fix it!
 * Be sure to fix it in the spirit of the code, do not hard code the result.
 */

function troubleshooting()
{
    const a = 1;
    const b = 1;

    return a + b;
}
console.log(troubleshooting(), "\n");

/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 * 
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

//  number = Number(prompt("enter a number"));

 function numberChecker() {
     if(number >= 10) {
         return true;
     } else {
         return false;
     }
 }

//  console.log(numberChecker());

/**
 * Lets do some math!
 * Some rules first:
 *   Do not enter the answers into the ? slots below, 
 *   enter the operations, make the computer do the work for you. 
 * 
 * a = one plus eight
 * b = 22 times three
 * c = the *remainder* of 5/4
 * d = the variable 'a' minus 17
 * e = the sum of the previous four variables
 */

 const a = 1 + 8;
 const b = 22 * 3;
 const c = 5 % 4;
 const d = a - 17;
 const e = a + b + c + d;

 console.log(`a = ${a} \n`,`b = ${b} \n`,`c = ${c} \n`,`d = ${d} \n`,`e = ${e} \n`);

 /**
 * Take note of the comments at the bottom. Be sure to uncomment the items under each step below the editable section. Be sure to comment out 
 * the entire last step. If your code fails to run, or you see a "ReferenceError" in the console, make sure you have completed all of the objectives 
 * 
 * Don't forget you can put "console.log" anywhere to see what your values are at any time.
  
  
  
	Step 1:
	 Take a look at this code and try to predict what it's going to do before running it...
	
	After making your guess, press 'run' at the top and take a look at the output in the console. If you were surprised by anything, go back and 
    look at the code to see what's going on.
	



	Step 2:
	Once you have a good handle on the code snippet, delete the code then follow the following instructions between the lines and try to recreate 
    the snippet on your own.
	
	---------------------------------------------------------------
	
	4 variables: first name, last name, current year, and birth year.
	a 5th variable (greeting) that is constructed from the previous 4, it should contain a greeting with the person's full name and their age.
	print the greeting with console.log
	
	---------------------------------------------------------------
	
	Once you have your version of the code working let's go back over it and edit it to make it easier to read.  After each step, make sure to 
    run the code to make sure the code still works!





	Step 3:
	Add 2 more variables: "fullName" and "age"

	Edit the greeting string to use fullName and age instead of doing the calculations in the string itself. (the greeting should look something 
        like this: "Hello, my name is " + fullName)

	*Do NOT simply type the full name and age into the new variables, but set them using the calculations that were originally being done in the 
    greeting.
	
	*note - in order to make the tests pass you will need to use these exact values for the years and names.  The wording needs to be exact.  
    If the tests fail, check spacing and punctuation:
	
	birthYear = 1948
	thisYear = 1965
	firstName = Carlos
	lastName = Stevenson
*/

// Edit below this line =============
const firstName = "Muna";
const lastName = "Mani";
const birthYear = 1990;
const currentYear = 2021;

let fullName = firstName + ' ' + lastName;
let age = currentYear - birthYear;

let greeting = `Ola! My full names are ${firstName} ${lastName} and I am ${currentYear - birthYear} years old.`;
greeting = `Sasa, naitwa ${fullName}. I'm ${age} years old.`
console.log(greeting);
