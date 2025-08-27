//  global execution context and function execution context and eval(no necessary right now)

// memory creation phase and execution phase

let val1 = 10
let val2 = 4
function addnum(num1, num2) {
    let total = num1 + num2 
    return total
}
let result1 = addnum(val1, val2)
let result2 = addnum(13,4)

// here the steps for the execution   