const prompt = require('prompt-sync')();
let year = prompt("Enter the year");
console.log(year);

if((year % 4 == 0)  && (year % 100 != 0 ) || (year % 400 == 0))
{
    console.log("year is leap year")
}else{
    console.log("year is not a leap year");
}