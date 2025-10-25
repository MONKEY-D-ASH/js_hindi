// these are the three states of a promises 
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// promise is an object that's why we are creating a new object from it  

// this is how you create a promise

// let a = 1
// const promiseOne = new Promise(function(resolve, reject){
//     // do an async task
//     // DB calls , cryptograpy , network call 
//     if (a > 2) {
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     }, 3000)
//     }
//     else{
//         setTimeout(function(){
//               console.log("we are inside the else case");
//               reject()
//         },3000)
//     }
// })

// resolve is directly connected to the then() function
// reject is directly connected to the catch() function

// so what is happening here: a promise is created which is an object that represents the state of an asynchronous task, if an async task is completed then resolve will trigger the then() function and it will get executed, but if the async task fails then the reject() will get triggered and the catch() will get executed

// promiseOne.then(function(){
//     console.log("promise consumed");
// }).catch(function(){
//     console.log("promise is rejected");
    
// })

// this is another way of creating a promise without storing it in a variable and executing it's then() on the go
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve()
//     },2000)

// }).then(function(){
//     console.log("Async 2 resolved");
    
// })

// Let's say the promise function did a lot of work and provides us with a lot of data but what we will do with the data is defined in the then() function so, we can also pass values retreived in the resolve function as an object to give it to the then() function
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "chai", email: "chai@example.com"})
//     },1000)      
// })

// promiseThree.then(function(user){ // the object is passed as an argument in the function 
//     console.log(user);
// })


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "aashish", password: "123"})
//         }
//         else{
//             reject('ERROR: something went wrong')
//         }
//     },1000)
// })

// this process is called chaining using which we can apply multiply function to the retreived data from the promise, the return value of the previous then() become the argument of the next then() function
// writing the chaining in this way increases it readibility which is generally preferred
// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(() => {
//     console.log("the promise is either resolved or rejected")
// })
// this finally method always runs no matter what by defualt to give the user the final result of the promise

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         }
//         else{
//             reject('ERROR: javascript went wrong')
//         }
//     },5000)  
// })

// this also a way to consume a promise by using async await format in which await waits for the promiseFive to give a response. but there is a problem with async await that they can't directly handle an error, it will suggest you to throw a try catch block that will grab the error case too
// async/await in JavaScript provides a more synchronous-looking and readable way to handle asynchronous operations, building upon the foundation of Promises.

// async keyword:Used to declare an asynchronous function.
// An async function implicitly returns a Promise. The value returned by an async function is wrapped in a resolved Promise. If an async function throws an error, it returns a rejected Promise.

// await keyword: Used inside an async function to pause its execution until a Promise resolves or rejects.
// It can only be used within an async function (or at the top-level of a module in modern JavaScript environments).
// When await is placed before an expression that returns a Promise, the function execution pauses until that Promise settles.
// If the Promise resolves, await returns the resolved value.
// If the Promise rejects, await throws the rejected value, which can then be caught using a try...catch block. 

// this try and catch will try to run the program in the try block and if it throws an error it will execute the catch block to gracefully resolve the error 

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
// consumePromiseFive()

// so what is happening here: we created an async function in which the try block will executed the fetch function with await keyword , the fetch will return a promise and js will "await" until the promised is resolved, when the promise is resovled the next line will execute which is also an asynchronous task so it will return a promise and if we don't write await here the js will store the promise object in the data variable and it will get printed
async function getAllUsers(){
    try {
        const response = await fetch('https://api.github.com/users/MONKEY-D-ASH')
        const data = await response.json() // here we are type casting the fetch response into a json format which is also an asynchronous task so we have to put await in this too
        console.log(data);
        console.log(data.login);
    } catch (error) {
        console.log("E:", error);
    }
}
getAllUsers()