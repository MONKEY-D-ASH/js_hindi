//  immediately invoked function expression (IIFE)


// this format allows you to executed a function immediately after its declaration, without calling it
//  the first () is for function definition and second () is function calling
// why do we use iife: because many times the pollution of global scope causes problem , so to remove the polution caused by the variables and their declaration this format is used 

(function chai(){ // this is a named iife
    console.log('DB coonected');
})();   // now we have to apply this semi-colon here in order for the below function to execute or siimply if we want to write two iife's simultaneously because since it is immediately invoked function, javascript doesn't now where to stop, so this ; acts as a termination point 

( (name) => {     // this is a un-named iife arrow function can also be used as an iife, and this is how parameters and arguments can be passed in it.
    console.log(`DB connected too ${name}`);
})("aashish")

