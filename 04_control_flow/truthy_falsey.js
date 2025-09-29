const userEmail = []

if (userEmail) {
    console.log("got the user email");
} else {
    console.log("don't have user email");
    
}

// falsy values (the values which are assumed as false in the if statement even if there is no comparison being done): false, 0,-0, BigInt 0n, "", null, undefined, NaN. except these rest are treated as truthy values.

//  truthy values: "0" , 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

// const empty_obj = {}

// if ((Object.keys(empty_obj)).length === 0) {
//     console.log("object is empty");
// }

// nullish coalescing operator (??): it basically has to do with null and undefined 
// this operator is designed to deal with the case in which when you call a value from the database , you get two values one is either null and another value. this generally works as a safety check for null value , so that we would be prepared to deal with this case. 

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 1021 // for more than two options it chooses the one which is written first


// console.log(val1);


// ternary operator 

// condition ? true : false (this is the syntax)

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");

