// what matters is coding is that the code should be readable and easy to understand , don't use complex terminologies , use the KISS concept which is "keep it simple stupid"

let score = "aashish"

// console.log(typeof score);
// console.log(typeof(score));

let value_in_number = Number(score)
// console.log(typeof value_in_number);
// console.log(value_in_number)

// while converting a variable use the datatype with the first letter capital
// "33" this string can easily be converted into a number
// but "33abs" cannot be converted into a number as it gives a NaN output which stands for not a number

let is_logged_in = "aashish"
let boolean_is_logged_in = Boolean(is_logged_in)
// console.log(boolean_is_logged_in)

// "true" gives 1 and "false" gives 0
//  "" empty string give false and "aashish" gives true\

let sum_number = 69
let sum_string = String(sum_number)
// console.log(sum_string)
// console.log(typeof sum_string)

// console.log(sum_string + 3);
// console.log(sum_number + 3);

// *****************************************operations**************************************

let value = 3
let neg_value = -value
// console.log(neg_value);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " hey"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 3); // a string is written first then all the following will be converted into a string implicitly
// console.log(1 + 2 + "3"); // a number is written first then all the following will be converted into a number implicitly

// console.log(+true);
// console.log(+"");

let num1 , num2 , num3
 
num1 = num2 = num3 = 2+4

let game_counter = 100
++game_counter;
console.log(game_counter);
game_counter++;
console.log(game_counter);

// study this topic in js mdn under prefix and postfix 