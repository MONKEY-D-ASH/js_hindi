const account_id = 144354
let account_email = "aashish@gmail.com"
var account_password = "dholakpur"
account_city = "new delhi"
let account_state;


// account_id = 34 this is not allowed

account_email = "aashishrana@gmail.com"
account_password = "bankok"
account_city = "mumbai"

console.log(account_id);

/*
prefer not to use var 
because of issues in block scope and functional scope
*/

console.table([account_id, account_email, account_city, account_password, account_state])