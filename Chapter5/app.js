var num1 = 3;
var num2 = 5;
var add = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;
document.write("Sum of "+num1+" and "+num2+" is "+add+"<br />");
document.write("Difference of "+num1+" and "+num2+" is "+sub+"<br />");
document.write("Product of "+num1+" and "+num2+" is "+mul+"<br />");
document.write("Quotient of "+num1+" and "+num2+" is "+div+"<br />");
document.write("Modulus of "+num1+" and "+num2+" is "+mod+"<br />");

var dec;
document.write("<br />"+"Value after variable declaration is "+dec);
dec=5;
document.write("<br />"+"Initial value: "+dec);
dec++;
document.write("<br />"+"Value after increament: "+dec);
dec+=7;
document.write("<br />"+"Value after addition: "+dec);
dec--;
document.write("<br />"+"Value after decreament: "+dec);
dec%=3;
document.write("<br />"+" The Remainder is : "+dec+"<br />");

var ticketPrice = 600;
var quantity = 5;
var total = ticketPrice * quantity;
document.write("<br />Total cost to buy "+quantity+" tickets to a movie is "+total+"PKR"+"<br />");

var tableNumber = +prompt("Enter a number for it's multiplication table?");
document.write("<br />"+"Table of "+tableNumber);
for(var i=1;i<=10;i++){
    document.write("<br />"+tableNumber+" x "+i+" = "+tableNumber*i);
}
document.write("<br />");

var celcius = prompt("Enter temperature in celsius?");
var fahrenheit = prompt("Enter temperature in fahrenheit?");
document.write("<br />"+celcius+"<sup>0</sup>C is "+((celcius*9/5)+32)+"<sup>o</sup>F");
document.write("<br />"+fahrenheit+"<sup>0</sup>F is "+((fahrenheit-32)*5/9)+"<sup>o</sup>C"+"<br />");

var item1 = 650;
var item2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shippigCharges = 100;
var totalCost = ((item1 * quantity1)+(item2 * quantity2)+shippigCharges)
document.write("<br /><h2>Shopping Cart</h2><br />");
document.write("Price of item 1 is "+item1+"<br />"+"Quantity of item 1 is "+quantity1+"<br />"+"Price of iem 2 is "+item2+"<br />"+"Quantity of item 2 is "+quantity2+"<br />"+"Shipping charges "+shippigCharges+"<br />"+"<br />"+"Total cost of your order is "+totalCost+"<br />");

var marksObtained = 804;
var totalMarks = 980;
var percentage = ((marksObtained/totalMarks)*100);
document.write("<br /><h2>Marks Sheet</h2>");
document.write("Total marks: "+totalMarks+"<br />");
document.write("Marks obtained: "+marksObtained+"<br />");
document.write("Percentage: "+percentage+"%<br />");

document.write("<br /><h2>Currency in PKR</h2>");
var dollar = 10;
var riyal = 25;
document.write("Total currency in PKR: "+(dollar*104.80+riyal*28)+"<br />");

var number = 5 + 5 * 10 / 2;
console.log(number);

document.write("<br /><h2> Age Calculator </h2>");
var currentYear = 2020;
var birthYear = +prompt("Enter your birth year?");
document.write("Current Year: "+currentYear+"<br />");
document.write("Birth Year: "+birthYear+"<br />");
document.write("Your Age is: "+(currentYear - birthYear)+"<br />");

document.write("<br /><h2>The Geometrizer</h2>");
var radius = 20;
var pie = 3.142;
var circumference = 2 * pie * radius;
var area = pie * radius * radius;
document.write("Radius of a circle: "+radius+"<br />");
document.write("The circumference is: "+circumference+"<br />");
document.write("The area is: "+area+"<br />");

document.write("<br /><h2>The Lifetime Supply Calculator</h2>");
var favouriteSnacks = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var estimatedAmount = 3;
document.write("Favourite Snack: "+favouriteSnacks+"<br />");
document.write("Current age: "+currentAge+"<br />");
document.write("Estimated Maximum Age: "+maxAge+"<br />");
document.write("Amount of snacks per day: "+estimatedAmount+"<br />");
document.write("You will need "+((maxAge - currentAge)*estimatedAmount)+" "+favouriteSnacks+ " to last you until the rip old age of "+maxAge+"<br />")
