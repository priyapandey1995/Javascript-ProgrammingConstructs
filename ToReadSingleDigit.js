const prompt = require('prompt-sync')();

let number = (Math.floor((Math.random() * 9)));
console.log(number)

if(number == 0){
    console.log("Zero")
}else if(number == 1){
    console.log("one")
}else if(number == 2){
    console.log("Two")
}else if(number == 3 ){
    console.log("Three")
}else if(number == 4){
    console.log("Four")
}else if(number == 5){
    console.log("five")
}else if(number == 6){
    console.log("six")
}else if(number == 7){
    console.log("seven")
}else if(number == 8){
    console.log("eight")
}else if(number == 9){
    console.log("nine")
}else{
    console.log("invalid number")
}


