var rightNow = new Date();
document.write(rightNow+"<br />");


var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
var currentMonth = months[d.getMonth()];
document.write("<br /> Current month: "+currentMonth+"<br />");


var day = new Date();
var d = day.toString();
day = d.slice(0,3);
alert(day)


if (day === "Saturday" || day === "Sat"){
    alert("It's Fun day");
}
else if (day === "Sunday" || day === "Sun"){
    alert("It's Fun day");
}


var date = new Date();
var currentDate = date.getDate()
if (currentDate < 16){
    alert("First fifteen days of the month");
}
else{
    alert("Last days of the month");
}


var currentDate = new Date();
document.write("<br /> Current date: "+currentDate+"<br />");
document.write("Elapsed milliseconds since January 1, 1970: "+currentDate.getTime());
document.write("<br /> Elapsed minutes since January 1 1970: "+currentDate.getTime()/(1000*60*60)+"<br />");


var a = new Date();
a.getHours();
if (a <= 12){
    alert("It's AM");
}
else{
    alert("It's PM");
}


var laterDate = new Date("Dec 31, 2020");
document.write("<br /> Later date: "+laterDate+"<br />");


var startingDate = new Date("Apr 24, 2020");
var getDays = new Date("Jun 16, 2020");
var diffDays = ((getDays - startingDate)/(1000*60*60*24));
document.write("<br />"+diffDays+" days have passed since 1st Ramadan, 2020 "+"<br />");


var refrenceDate = new Date();
var beginning = refrenceDate.getTime();
document.write("<br /> On refrence date: "+refrenceDate+"<br />");
document.write(Math.ceil(beginning/(1000*60*60))+" seconds have passed since beginning of 2020"+"<br />");


var currentDate = new Date();
document.write("<br /> Current date: "+currentDate+"<br />");
currentDate.setHours(currentDate.getHours() - 1);
document.write("1 hour ago, it was "+currentDate+"<br />");


var currentDate = new Date();
document.write("<br /> Current date: "+currentDate+"<br />");
currentDate.setHours(currentDate.getHours() - 876576);
document.write("100 years ago, it was "+currentDate+"<br />");


var userAge = +prompt("Enter your age?");
var year = new Date();
var currentYear = year.getFullYear();
var birthYear = currentYear - userAge;
document.write("<br /> Your age is: "+userAge+"<br />");
document.write("Your birth year is "+birthYear+"<br />");


var customerName = prompt("Enter customer name?");
var currentMonth = prompt("Enter current month?");
var numberOfUnits = +prompt("Enter number of units?");
var chargesPerUnit = +prompt("Enter charges per unit?");
var netAmountPayable = numberOfUnits * chargesPerUnit;
var latePaymentSurcharge = +prompt("Enter late payment surcharge?");
var grossAmountPayable =    netAmountPayable + latePaymentSurcharge;
document.write("<br /><h3>K-Electric Bill</h3>");
document.write("Customer Name: "+customerName+"<br />");
document.write("Month: "+currentMonth+"<br />");
document.write("Number of units: "+numberOfUnits+"<br />");
document.write("Charges per unit: "+chargesPerUnit+"<br />");
document.write("<br /> Net Amount Payable (within Due Date): "+netAmountPayable+"<br />");
document.write("Late payment surcharge: "+latePaymentSurcharge+"<br />");
document.write("Gross Amount Payable (after Due Date): "+grossAmountPayable+"<br />");