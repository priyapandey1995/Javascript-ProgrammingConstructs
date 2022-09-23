
//Q:1 to generate random number to get single digit number
console.log(Math.floor(Math.random() * 10));

//Q:2 
console.log(Math.floor(Math.random() * 6 + 1));

//Q:3 TO Add Two random Dice numbers

let num1 = Math.floor(Math.random() * 6 + 1);
let num2 = Math.floor(Math.random() * 6 + 1);
console.log("Sum is "  + num1 + num2);

//Q:4 To read 5 random of 2 digit numbers and then finds its av

let random
let sum= 0;
let average =0;
for(i=0;i<5;i++){
random = (Math.floor(Math.random()*89) +10)
console.log("the dice numbers generated is " +random)
sum = sum + random;
}
console.log("the sum is" + sum)
average = sum/5
console.log("the average of all te values is" + average);
