// this is user to refer to the current context of a function or an object or anything in a scope 

const user = {
    username: "aashish",
    price: 999,

    welcome_message: function(){
        console.log(`${this.username}, welcome to website`);   
        console.log(this);
    }
}

// user.welcome_message()
// user.username = "sam"
// user.welcome_message()

// console.log(this);

// function chai(){
//     let username = "tony"
//     console.log(this.username); 
// }

// chai() // this throws undefined because this doesnt work inside a function 


const chai = () => { // this is how you declare a function using an arrow function 
    let username = "tony"
    console.log(this.username);
}

// chai()

// const add_two = (num1, num2) => {
    // return num1 + num2
// } since we started a scope here so we have to explicitly use return keyword to return the result

// const add_two = (num1, num2) => num1 + num2  // this is an implicit return statement in which you don't have to use return statement because we are not using a scope. 

// const add_two = (num1, num2) => (num1 + num2) // this format is used very intensively in react.js, 
const add_two = (num1, num2) => ({username: "aashish"}) // parenthesis are used in this format to return an object


console.log(add_two(3,3));



