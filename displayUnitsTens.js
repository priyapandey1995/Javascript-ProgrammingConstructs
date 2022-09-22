
const prompt = require('prompt-sync')();

let number = prompt("Enter number");

if(number == 1){
    console.log("units")
}else if(number == 10){
    console.log("Tens")
}else if(number == 100){
    console.log("Hundread")
}else if(number == 1000){
    console.log("Thousands")
}else{
    console.log("Invalid Number")
}