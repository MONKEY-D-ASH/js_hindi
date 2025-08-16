// objects : there are two ways to declare an object

// singleton

// objects literals 

// object conatins keys and their values and the keys are by default stored in string format in javascript

const mySym = Symbol("key1") // this is how you declare a symbol, but you cannot directly use this symbol variable in the object

// so i can think it as a box "a" on which there is a symbol named "same" and there is another box "b" on which there is a symbol named "same" , even though they have the same symbol "same" but there are two different boxes and the box's variable name "a" and "b" is used to access these boxes in the code but the symbol name on them remains the same

const js_user = {
    name:"aashish",
    "full name": "aashish  kumar rana", // here a key is defined with white space in between it as a string, 
    age: 21,
    [mySym]: "gadi ki chabbi tera bhai chalayega", // this is how use use a symbol in an object using []
    location: "new delhi",
    email: "dholakpur@gmail.com",
    is_logged_in: false,
    last_log_in_days: ["Monday", "saturday"]
}

// console.log(js_user.location); // this is one way to access the elements of the object but it is not recommended generally

// console.log(js_user["email"]); // since key is stored as a string , we have to use inverted commas in this method 
// console.log(js_user["full name"]); //now this cannot be accessed using the dot method as the white space  will cause an error , that's why the brackets method is recommended

// console.log(js_user[mySym]); // while accessing a symbol in an object we do not use inverted commas 

js_user.email = "gemini@gmail.com" // changing the value of an element of an object

// Object.freeze(js_user) // locks the value of the object elements, for example:
// js_user.name = "bhayanak"
// console.log(js_user);

js_user.greetings = function(){
    console.log("hello js user");
}

js_user.greeting_two = function(){
    console.log(`hello js user, ${this.name}`); // here this is used to indicate that i want to take an element of this js_user object which is name here
}

console.log(js_user.greetings());
console.log(js_user.greeting_two());

