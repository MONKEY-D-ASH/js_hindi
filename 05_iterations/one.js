// for loop

for (let i = 0; i < 10 ; i++) {
    const element = i;
    if (element==7) {
        // console.log("7 is the best number");
    }
    // console.log(i);
}

// NOTE: to select multiple variables having the same name, select the variable and then keep clicking ctrl+D to select the rest one by one 

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    
        for (let j = 1; j <= 10; j++) {
            // console.log(`inner loop value: ${j} and outer loop value is ${i}`);
            // console.log(i + '*' + j + '=' + i*j);
        }
}

let myArray = ["flash", "batman", "superman", "wonder woman", "aquaman"];
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}

// break and continue

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        // console.log(`detected 5`);
        break  // this break sends the control out of the whole control statement including if and for both.
    }
    // console.log(`value of i is ${index}`);
    
}

// continue
for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        continue  // this continue statement skips to the next iteration from the line which it gets activated.so the code below it doesn't run too.
    }
    console.log(`value of i is ${index}`);
    
}