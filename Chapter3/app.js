var age = 20;
alert("I am"+" "+age+" "+"years old");

for (var visit = 1;visit<=20; visit++){
    alert("You have visited this site"+" "+visit +" "+"times");
}

var birthYear = 1999;
document.write("My birth year is"+" "+birthYear+"<br />" + "\nData type of my declared variable is"+" "+typeof(birthYear)+"<br />");

var visitorName = prompt("What is your name?");
var productTitle = prompt("Enter the product you want to buy?");
var quantity = prompt("Enter the quantity of the product you want?");
document.write("<br />"+"<b>"+visitorName+"</b>"+" "+"ordered"+" "+"<b>"+quantity+"</b>"+" "+"<b>"+productTitle+"</b>"+"(s)"+" "+"on XYZ Clothing Store");