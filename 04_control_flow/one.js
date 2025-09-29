// if statement

// const is_user_logged_in = true
// const temperature = 41

// if(temperature < 40){
//     console.log("less than 50");
// } 
// else {
//     console.log("temperature is greater than 50");
// }


// < ,>,<=,>=, = (assignment operator), == (checking operator), !=(negative checking), === strict equal (it also checks if the type of the two opertors is same or not along with their values), another one is !== strict not equal (this checks  if the two operators are of different types, but will still execute if the type of both operators is same but their value is different)

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`); //this line is able to run because in the if statement scope the variable is a "var" type whose scope is global thats why js is able to access it outside the if statement scope. even though this happened but it shouldn't happen, cause it hinders with the code security, and "var" is not practised  now , instead we use "const" or "let".

// shorthand notation of the if statement

// const balance = 1000

// if(balance > 500) console.log("test"); // this is called implicit scope, but has to be written in a single line and you cannot write multiple lines in this format, don't forget the semi-colon 

// // nested conditinal statements

// if(balance < 500){
//     console.log("less than 750");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 1001){
//     console.log("less than 1001");
// }
// else {
//     console.log(balance);
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard ){
    console.log("allowed to go shopping");
}
else {
    console.log("not allowed");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}

