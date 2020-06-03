var city = prompt("Enter city name?");
if (city === "Karachi"){
    alert("Welcome to city of lights");
}
else{
    alert("Welcome to "+city);
}

var gender = prompt("Enter your gender?");
if (gender === "Male"){
    alert("Good Morning Sir");
}
else if (gender === "Female"){
    alert("Good Morning Ma'am");
}
else{
    alert("Good Morning");
}

var signalColor = prompt("Enter color of road traffic signal?");
if (signalColor === "Red"){
    alert("Must Stop");
}
else if (signalColor === "Yellow"){
    alert("Ready to move");
}
else if (signalColor === "Green"){
    alert("Move now");
}
else{
    alert("Invalid traffic signal color");
}

var fuel = +prompt("Enter remaining fuel in car (in litres)?");
if (fuel < 0.25){
    alert("Please refill the fuel in your car");
}
else{
    alert("Your car have enough fuel");
}

var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}
if (true){
    alert("True");
}
if (false){
    alert("False");
}
if ("car" < "cat"){
    alert("car is smaller than cat");
}

var subject1 = +prompt("Enter marks in first subject?");
var subject2 = +prompt("Enter marks in second subject?");
var subject3 = +prompt("Enter marks in third subject?");
var totalMarks = 300;
var marksObtained = subject1+subject2+subject3;
var percentage = ((subject1+subject2+subject3)/totalMarks)*100;
var grade;
var remarks;
document.write("<br /><h2>Marks Sheet</h2>");
if (percentage >= 80){
    grade = "A-one";
    remarks = "Excellent";
    document.write("Total marks :"+totalMarks+"<br />");
    document.write("Marks obtained : "+marksObtained+"<br />");
    document.write("Percentage : "+percentage+"%<br />");
    document.write("Grade : "+grade+"<br />");
    document.write("Remarks : "+remarks+"<br />");
}
else if (percentage >= 70){
    grade = "A";
    remarks = "Good";
    document.write("Total marks :"+totalMarks+"<br />");
    document.write("Marks obtained : "+marksObtained+"<br />");
    document.write("Percentage : "+percentage+"%<br />");
    document.write("Grade : "+grade+"<br />");
    document.write("Remarks : "+remarks+"<br />");
}
else if (percentage >= 60){
    grade = "B";
    remarks = "You need to improve";
    document.write("Total marks :"+totalMarks+"<br />");
    document.write("Marks obtained : "+marksObtained+"<br />");
    document.write("Percentage : "+percentage+"%<br />");
    document.write("Grade : "+grade+"<br />");
    document.write("Remarks : "+remarks+"<br />");
}else if (percentage < 60){
    grade = "Fail";
    remarks = "Sorry";
    document.write("Total marks :"+totalMarks+"<br />");
    document.write("Marks obtained : "+marksObtained+"<br />");
    document.write("Percentage : "+percentage+"%<br />");
    document.write("Grade : "+grade+"<br />");
    document.write("Remarks : "+remarks+"<br />");
}

var correctNumber = 6;
var guessNumber = +prompt("guess the secret number?");
if (guessNumber === correctNumber){
    alert("Bingo! Correct answer");
}
else if (guessNumber === correctNumber+1){
    alert("Close enough to the correct answer");
}
else if (guessNumber+1 === correctNumber){
    alert("Close enough to the correct answer");
}
else{
    alert("Far away from the correct number");
}

var userNumber = +prompt("Enter any number to check is it divisible by 3 or not?");
if (userNumber % 3 === 0){
    alert(userNumber+" is divisible by 3");
}
else{
    alert(userNumber+" is not divisible by 3");
}

var number = +prompt("Enter any number to check whether it's even or odd?");
if (number % 2 === 0){
    alert(number + " is even number");
}
else{
    alert(number + " is odd number");
}

var temperature = +prompt("Enter temperature?");
if (temperature > 40){
    alert("It is too hot outside.");
}
else if (temperature > 30){
    alert("The Weather today is Normal.");
}
else if (temperature > 20){
    alert("Today’s Weather is cool.");
}
else if (temperature > 10){
    alert("OMG! Today’s weather is so Cool.");
}
else{
    alert("It is too cool outside.");
}

var num1 = +prompt("Enter first number?");
var num2 = +prompt("Enter second number?");
var operator = prompt("Enter any operator?");
var result;
if (operator === '+'){
    result = num1 + num2;
    alert("The sum of "+num1+" + "+num2+" is "+result);
}
else if (operator === '-'){
    result = num1 - num2;
    alert("The difference of "+num1+" - "+num2+" is "+result);
}
else if (operator === '*'){
    result = num1 * num2;
    alert("The product of "+num1+" * "+num2+" is "+result);
}
else if (operator === '/'){
    result = num1 / num2;
    alert("The quotient of "+num1+" / "+num2+" is "+result);
}
else if (operator === '%'){
    result = num1 % num2;
    alert("The modulus of "+num1+" % "+num2+" is "+result);
}
else{
    alert("Invalid operator");
}