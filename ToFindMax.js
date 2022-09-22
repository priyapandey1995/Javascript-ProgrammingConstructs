
const prompt = require("prompt-sync")();

let a = prompt("Enter the value of a ")
let b = prompt(" Enter the value of b")
let c = prompt("Enter the value of c")

let exprOne = a+b*c;
let exprTwo = a% b + c;
let expreThree = c+a/b;
let expreFour = a*b+c;

if((exprOne >= exprTwo) && (exprOne >= expreThree) && (exprOne >= expreFour)){
    console.log("Maximum is exprOne:" + " " + exprOne)
}else if((exprTwo >= exprOne) && (exprTwo >= expreThree) && (exprTwo >= expreFour)){
    console.log("Maximim is exprTwo:" + " " + exprTwo)
}else if((expreThree >= exprOne) && (expreThree >= exprTwo) && (expreThree >= expreFour)){
    console.log("Maximum is expreThree :" + " " + expreThree)
}else{
    console.log("Maximum is expreFour: " + " "+ expreFour)
}


if((exprOne <= exprTwo) && (exprOne <= expreThree) && (exprOne <= expreFour)){
    console.log("Maximum is exprOne:" + " " + exprOne)
}else if((exprTwo <= exprOne) && (exprTwo <= expreThree) && (exprTwo <= expreFour)){
    console.log("Maximim is exprTwo:" + " " + exprTwo)
}else if((expreThree <= exprOne) && (expreThree <= exprTwo) && (expreThree <= expreFour)){
    console.log("Maximum is expreThree :" + " " + expreThree)
}else{
    console.log("Maximum is expreFour: " + " "+ expreFour)
}