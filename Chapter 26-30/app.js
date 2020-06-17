var userNumber = +prompt("Enter any positive integer?");
document.write("number: "+userNumber+"<br />");
document.write("round off value: "+Math.round(userNumber)+"<br />");
document.write("floor value: "+Math.floor(userNumber)+"<br />");
document.write("ceil value: "+Math.ceil(userNumber)+"<br />");


var userNumber = +prompt("Enter any negative floating point number?");
document.write("<br />number: "+userNumber+"<br />");
document.write("round off value: "+Math.round(userNumber)+"<br />");
document.write("floor value: "+Math.floor(userNumber)+"<br />");
document.write("ceil value: "+Math.ceil(userNumber)+"<br />");


var number = +prompt("Enter any number?");
document.write("<br />Absolute value of "+number+" is "+Math.abs(number)+"<br />");


var dice = Math.floor(Math.random()*6)+1;
document.write("<br />random dice value: "+dice+"<br />");


var coin = Math.floor(Math.random()*2)+1;
var result;
if (coin === 1){
    result = "Tails";
    document.write("<br />"+coin+"<br /> random coin value: "+result+"<br />")
}
else{
    result = "Heads";
    document.write("<br />"+coin + "<br /> random coin value: "+result+"<br />");
}


var num = Math.floor(Math.random()*100);
document.write("<br />random number between 1 and 100: "+num+"<br />");


var userWeight = prompt("Enter your weight in kilograms?");
var weight = parseInt(userWeight);
document.write("<br />The weight of user is: "+(Math.random(weight)*weight) +"kilograms <br />");


var secretNumber = Math.floor(Math.random() * 10) ;
var userGuess = +prompt("Enter a number between 1 and 10?");
if (userGuess === secretNumber){
    alert("Congratulations! your guess matches the secret number");
}
else{
    alert("Try again!");
}


