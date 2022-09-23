
const prompt = require('prompt-sync')()({ sigint: true});
let number = prompt("Enter the number");
switch(number){
    case 1:
        console.log("Units");
        break;
    case 10:
        console.log("Tens");
        break;
    case 100:
        console.log("Hundreads");
        break;
    case 1000:
        console.log("Thousands");
        break;
    default:
        console.log("Invalid numbers");
    
}