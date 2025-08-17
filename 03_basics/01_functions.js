// function defination

function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
}

sayMyName // this is called function reference
// sayMyName() // this is called function execution or function calling

// function add_two_numbers(number1 , number2){
//     console.log(number1 + number2);       
// }

// using the return statement , after the return statement in the function no line of code executes
function add_two_numbers(number1 , number2){
    // let result = number1+number2
    // return result
    
    return number1+number2
}

const result = add_two_numbers(3, 5)

// console.log("Result:", result);


function logInUserMessage(username = "ash"){   // you can also give a default value in the function for the case when no argument is passed, but when an argument is passed the default value will be overwrited
    if(username === undefined){
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}

// function logInUserMessage(username){
//     if(!username){          // this is more of a professional code 
//         console.log("please enter a username");
//         return 
//     }
//     return `${username} just logged in`
// }


// console.log(logInUserMessage("aashish"));
console.log(logInUserMessage()); // if you don't pass anything the value will be undefined


