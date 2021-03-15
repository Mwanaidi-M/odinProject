console.log("Hellow Therew; Lets Do Some Simple Arithmetics.");

console.log(23 + 97);
console.log(2 + 34 + -4 + 23.456 + 77 + 23e4);
console.log((4 + 6 + 9) / 77);

let a = 10;
let b = 7 * a;
console.log(9 * a);
console.log(b);


const max = 57;
let actual = max - 13;
let percentage = actual / max;

console.log(percentage);

console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

console.log(`the max value is ${max}`);

console.log(typeof 890n);

let oneLine = "This is a one liner text";
console.log('What\'s your name?');

console.log(true && false);


// Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.

let age = 12;
if(age >= 14 && age <=90)
{
    console.log('inclusivity for you.');
}
else
{
    console.log('exclusivity for you');
}

// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

if(!(age >= 14 && age <=90))
{
    console.log('You are not in the range');
}

if(14 > age  || age > 90)
{
    console.log('COME BACK IN A FEW YEARS OR NEVER');
}


// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”


// Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.

// let user = prompt("What is your name? ", "");

// if(user === null || user === '')
// {
//     alert("Cancelled!");
// }
// else if(user !== 'Admin')
// {
//     alert("I dont know you.");
// }
// else
// {
//     let userPassword = prompt("Please enter your password...", "");

//     if(userPassword ==='TheMaster')
//     {
//         alert("Welcome Admin");
//     }
//     else if(userPassword === null || userPassword === '')
//     {
//         alert("Cancelled!");
//     }
//     else
//     {
//         alert("Wrong Password");
//     }
    
// }


