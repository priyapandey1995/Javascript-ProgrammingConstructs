
let randomOne = Math.floor((100+Math.random()*900));
let randomSecond = Math.floor((100+Math.random()*900));
let randomThird = Math.floor((100+Math.random()*900));
let randomFourth = Math.floor((100+Math.random()*900));
let randomFifth = Math.floor((100+Math.random()*900));

console.log(randomOne,randomSecond,randomThird,randomFourth,randomFifth)
let maximum,minimum;

if((randomOne >= randomSecond) && (randomOne >= randomThird) && (randomOne >= randomFourth) && (randomOne >= randomFifth)){
   console.log("maximum is" + " " + randomOne)
}else if((randomSecond >=randomOne) && (randomSecond >= randomThird) && (randomSecond >= randomFourth) && (randomSecond >= randomFifth) ){
    console.log("maximum is" + " "+ randomSecond)
}else if((randomThird >= randomOne) && (randomThird >= randomSecond) && (randomThird >= randomFourth) && (randomSecond >= randomFifth)){
    console.log("maximum is" +" "+ randomThird)
}else if((randomFourth >= randomOne) && (randomFourth >= randomSecond) && (randomFourth >= randomThird) && (randomSecond >= randomFifth)){

    console.log("maximum is" +" "+ randomFourth)
}else{
    console.log("maximum is" + " "+ randomFifth)
}

if((randomOne <= randomSecond) && (randomOne <= randomThird) && (randomOne <= randomFourth) && (randomOne <= randomFifth)){
    console.log("miminum is" + " " + randomOne)
 }else if((randomSecond <= randomOne) && (randomSecond <= randomThird) && (randomSecond <= randomFourth) && (randomSecond <= randomFifth) ){
     console.log("minimum is" + " "+ randomSecond)
 }else if((randomThird <= randomOne) && (randomThird <= randomSecond) && (randomThird <= randomFourth) && (randomSecond <= randomFifth)){
     console.log("minimum is" +" "+ randomThird)
 }else if((randomFourth <= randomOne) && (randomFourth <= randomSecond) && (randomFourth <= randomThird) && (randomSecond <= randomFifth)){
 
     console.log("minimum is" +" "+ randomFourth)
 }else{
     console.log("minimum is" + " "+ randomFifth)
 }
 