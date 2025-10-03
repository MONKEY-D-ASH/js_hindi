const myNums = [1,2,3,4,5]

const initializer = 0
// const result = myNums.reduce( function (acc, currval) {
//     console.log(`accumulator is ${acc} and currentValue is ${currval}`); // this statement run in loop until the last element of the array and then the last return statement runs     
//     return acc + currval
// },0) // in this format of reduce function we use the general function syntax and then write the initialization value after the scope 


//  performing the same operation using the arrow function and explicit return type funtion 
// const result = myNums.reduce((acc,currval) => {
//     console.log(`accumulator is ${acc} and currentValue is ${currval}`);
//     return acc + currval}, 0)

// console.log(result);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "web dev course",
        price: 5999
    },
    {
        itemName: "data science",
        price: 12999
    },
    {
        itemName: "mobile dev",
        price: 7999
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price ,0)
console.log(priceToPay);
