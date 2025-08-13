// we can use ctrl+space shortcut key to pop the diffrerent properties of an object 

// Dates

let my_date = new Date(); // creating a new date object called my_date
// console.log(my_date.toString());
// console.log(my_date.toDateString());
// console.log(my_date.toISOString());
// console.log(my_date.toJSON());
// console.log(my_date.toLocaleDateString()); // this provides only date 
// console.log(my_date.toLocaleString()); // this provides both date and time 
// console.log(my_date.toLocaleTimeString()); // this gives only time  

// console.log(typeof my_date);


// let myCreatedDate = new Date(2012, 0, 30) // months start from 0 in javascript
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date(2012, 0, 30,5,3,49) // year, month, date, hour, minutes, seconds and it represents AM and PM also
// console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2022-05-12") // in this yyyy-mm-dd format the month starts from 1
// console.log(myCreatedDate3.toLocaleString());

let myCreatedDate4 = new Date("07-09-1999") // this is another format for declaring date mm-dd-yyyy
// console.log(myCreatedDate4.toLocaleString());


let myTImeStamp = Date.now()
// console.log(myTImeStamp); // this gives the time in milliseconds from the epoch which is a large value

// to compare two date the following method is used to compare two dates in their milliseconds format

// console.log(myCreatedDate4.getTime()); // this functions return the time elapsed from the epoch to the given date in milliseconds

// console.log(Math.floor(Date.now()/1000)); // converting the milliseconds value to seconds and using floor division to remove decimal values.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()); // returns the day of the week sunday as 0 and monday as 1 and so on
console.log(newDate.getFullYear()); // return the year
console.log(newDate.getHours()); // retturns the hours in a date using local time
console.log(newDate.getMonth()); // months start from 0 as january 

console.log(`the current day is ${newDate.getDay()} and the time is ${Math.floor(Date.now()/1000)}`);

newDate.toLocaleString('default', {
        weekday:"long"
})

console.log(newDate.toLocaleString('default', {
        weekday:"long"
}));
