var userInput = prompt("Enter any character (number or string)?");
if (userInput >= '0' && userInput <= "9"){
    alert("The given character is a number.");
}
else if (userInput >= "A" && userInput <= "Z"){
    alert("The given character is an Uppercase letter.");
}
else if (userInput >= "a" && userInput <= "z"){
    alert("The given character is a lowercase letter.");
}

var num1 = +prompt("Enter first number?");
var num2 = +prompt("Enter second number?");
if (num1 > num2){
    alert(num1+" is greater than "+num2);
}
else if (num2 > num1){
    alert(num2 + " is greater than "+num1);
}
else{
    alert("Both numbers are equal");
}

var number = +prompt("Enter a number?");
if (number > 0){
    alert(number+" is positive");
}
else if (number < 0){
    alert(number+" is negative");
}
else{
    alert(number+" is zero");
}

var ch = prompt("Enter any character?");
if (ch === "a" || ch === "A" || ch === "e" || ch === "E" || ch === "i" || ch === "I" || ch === "o" || ch === "O" || ch === "u" || ch === "U"){
    alert("The given character is a vowel");
}
else{
    alert("The given character is not a vowel");
}

var correctPassword = "123456";
var userPassword = prompt("Enter your password?");
if (userPassword === ""){
    alert("Please enter your password");
}
else if (userPassword === correctPassword){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    alert(greeting);
}
else{
    greeting = "Good evening";
    alert(greeting);
}

var time = +prompt("Enter time in 24 hours format like 1900 = 7pm?");
if (time >= 0000 && time < 1200 ){
    alert("Good Morning!");
}
else if (time >= 1200 && time < 1700){
    alert("Good afternoon!");
}
else if (time >= 1700 && time < 2100){
    alert("Good evening!");
}
else if (time >= 2100 && time <= 2359){
    alert("Good night!");
}