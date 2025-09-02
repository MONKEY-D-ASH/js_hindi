//  javascript is a mutli-threaded programming language

//  global execution context and function execution context and eval(no necessary right now)
// memory creation phase and execution phase , these are the two steps in which javascripts executes the code
    

let val1 = 10
let val2 = 4
function addnum(num1, num2) {
    let total = num1 + num2 
    return total
}
let result1 = addnum(val1, val2)
let result2 = addnum(13,4)

// here the steps for the execution   

// 1. global execution and is allocated in "this".This step will definitely happen no matter how much bigger or smaller a code is 

// 2. memory phase : all the variables are collected and stored in a place. so the following things will happen step by step 

        // val1 -> undefined memory will be created for each variable and "undefined will be assigned inside it."
        // val2 -> undefined 
        // addnum -> definition of the function 
        // result1 -> undefined
        // result2 -> undefined
        //  this is called the first cycle, it will always happen no matter what 

    // 3. execution phase: the following will happen 

    // val1 <- 10  values will be assigned to their respective variables in the memory
    // val2 <- 5
    // now result1 will call the addnum function and this addnum function will create a seperate new variable environment and execution thread. now this memory creation phase and execution phase will repeat for this function again and again if there is another function inside it. 
    
// (((((((
    // memeory phase for function 
    // val1 -> undefined (this is because inside the function there is a whole new world and js doesn't know the variables outside the function.)
    // val2 -> undefined
    // total -> undefined

    //  execution context for function 
    //  num1 <-10
    //  num2 <-5
    // total <- 15
    // now this total will be returned to the global execution context or will be returned to the code outside the function in result1 variable.
    // now this seperate environment which was created for the function will get deleted after this step as its work is done now.
// )))))))

    // result1 = 15 (this happened after the above process)

//((((((
    // memeory phase for function 
    // val1 -> undefined (this is because inside the function there is a whole new world and js doesn't know the variables outside the function.)
    // val2 -> undefined
    // total -> undefined

    //  execution context for function 
    //  num1 <-10
    //  num2 <-2
    // total <- 12
    // now this total will be returned to the global execution context or will be returned to the code outside the function in result2 variable.
// )))))) 

    //  result2 = 12 (this happened after the above process)

    // the concept of CALL STACK
    //  in the inspect , sources, snippets you can write a code and see its call stack

    // ALL THIS IS REALLY VERY SIMPLE
    
