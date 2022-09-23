const prompt =require("prompt-sync")({ sigint: true});
console.log ("Enter the value ");
let choice = parseInt(prompt("1:feet-inch 2:inch-feet 3:feet-meter 4:meter-feet "));
switch(choice){
    case 1 :
        let feet = parseInt(prompt("Enter value in feet -> "))
        console.log("the converted value in inch = "+ feet*12);
        break;
    case 2 :
        let inch = parseInt(prompt("Enter length in inch -> "))
        console.log("The converted value in feet is = "+ inch/12);
    case 3 :
        let feet1 = parseInt(prompt("Enter lenght in feet -> "))
        console.log("the converted value in meter is = "+ feet1/3.25);
    case 4 :
        let meter = parseInt(prompt("Enter value in meter -> "));
        console.log("the converted value in feet is =" + meter*3.28);
    default :
    console.log("please select correct oprtion");
}