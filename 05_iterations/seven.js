const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumbers.map( (num)=> num + 10 )

// const newNums = []
// myNumbers.forEach( (num)=> {newNums.push(num+10)} ) // performing the same operation using forEach 

// this is called chaining: applying multiple methods one after another on a same array 

const newNums = myNumbers
                    .map( (num)=> num*10 )
                    .map( (num)=> num + 1 ) // this will take the result of the first map 
                    .filter((num)=> num>=60)

console.log(newNums);

