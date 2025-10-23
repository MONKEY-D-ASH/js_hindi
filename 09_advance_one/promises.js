// these are the three states of a promises 
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// promise is an object that's why we are creating a new object from it  

// this is how you create a promise

let a = 1
const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    // DB calls , cryptograpy , network call 
    if (a > 2) {
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    }, 3000)
    }
    else{
        setTimeout(function(){
              console.log("we are inside the else case");
              reject()
        },3000)
    }
})

// resolve is directly connected to the then() function
// reject is directly connected to the catch() function

// so what is happening here: a promise is created which is an object that represents the state of an asynchronous task, if an async task is completed then resolve will trigger the then() function and it will get executed, but if the async task fails then the reject() will get triggered and the catch() will get executed

promiseOne.then(function(){
    console.log("promise consumed");
}).catch(function(){
    console.log("promise is rejected");
    
})

// this is another way of creating a promise without storing it in a variable and executing it's then() on the go
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },2000)

}).then(function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
        
})