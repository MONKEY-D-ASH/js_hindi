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
// console.log(logInUserMessage()); // if you don't pass anything the value will be undefined


function calculate_cart_price(...num1){  // these three dots is called rest operator, both spread and rest operator have the same syntax. what this will do is , it will pack all the argument and will return it in the form of an array.
    return num1;
}

function calculate_cart_price2(val1, val2, ...num1){ // the first two arguments will be taken as val1 and val2 and the rest will be taken by the rest operator.
    return num1;
}

console.log(calculate_cart_price(200,300,2500,343,244,2443));
console.log(calculate_cart_price2(200,300,2500,343,244,2443));

const user = {
    username: "aashish",
    price: 299
}

function handle_Object(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);   
}

// handle_Object(user) // either pass a predefined object.

handle_Object({ // pass an object while calling the function.
    username: "mayank",
    price:349  
})

const my_new_array = [200,482,300,600]

function return_second_value(arr){
    return arr[1];
}

// console.log(return_second_value(my_new_array));
console.log(return_second_value([1,2,3,4,5]));

