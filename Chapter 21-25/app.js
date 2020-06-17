var firstName = prompt("Enter first name?");
var lastName = prompt("Enter last name?");
var fullName = firstName +" "+ lastName;
alert("Welcome "+fullName);


var mobileModel = prompt("Ener your favourite mobile phone model?");
document.write("My favourite phone is: "+mobileModel+"<br />");
document.write("Length of string:  "+mobileModel.length+"<br />");


var country = "Pakistani";
document.write("<br />String: "+country+"<br />");
document.write("Index of 'n': "+country.indexOf("n")+"<br />");


var greeting = "Hello World";
document.write("<br />String: "+greeting+"<br />");
document.write("Last index of 'l': "+greeting.lastIndexOf("l")+"<br />");


var country = "Pakistani";
document.write("String: "+country+"<br />");
document.write("Character at index 3: "+country.charAt(3)+"<br />")


var firstName = prompt("Enter first name? ");
var lastName = prompt("Enter last name? ");
var fullName = firstName.concat(" ",lastName)
alert("Welcome "+fullName)    


var city = "Hyderabad";
document.write("<br />City: "+city+"<br />");
document.write("After replacement: "+city.replace("Hyder","Islam")+"<br />");


var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<br />"+message.replace(/and/g,"&")+"<br />");


var value = "472";
document.write("Value: "+value+"<br />");
document.write("Type: "+typeof(value)+"<br />");
var newValue = Number(value);
document.write("Value: "+newValue+"<br />");
document.write("Type: "+typeof(newValue)+"<br />");


var userInput = prompt("Enter some text?");
document.write("user input: "+userInput+"<br />");
document.write("Upper case: "+userInput.toUpperCase()+"<br />");


var userInput = prompt("Enter something?");
var firstChar = userInput.slice(0,1);
var otherChars = userInput.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
document.write("<br />user input: "+userInput+"<br />");
document.write("Title case: "+firstChar+otherChars+"<br />");


var num = 35.36;
document.write("<br />Number: "+num+"<br />");
number = num + '';
number = number.replace('.', '');
number = number.toString();
document.write("Result: "+number+"<br />");


var userName =  prompt("Enter your name?");
var str = prompt("Enter some text");
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 1) === '@' || str.slice(i, i+1) === '!' || str.slice(i, i+1) === '.' || str.slice(i, i+1) === ',') {
        prompt("Enter valid name");
        break;
    }
}


var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'am?");
item = item.toLowerCase()
document.write("<br />");
for(var i = 0; i<A.length; i++){    
    if (item === A[i]){
        break
    }   
}
if (item === A[i]){
    document.write(item+" is <b>available</b> at index "+[i] +" in our bakery"+"<br />");
}
else {
    document.write("We are sorry "+item+ " is <b> not available</b> in our bakery"+"<br />");
}


var userPassword = prompt("Enter your password?");
if (userPassword.match(/[A-z]/) && userPassword.match(/[a-z]/) && userPassword.match(/[0-9]/)){
    alert("Password doesnot begin with a number");
}
else{
    alert("correct password");
}


var university = "University of Karachi";
var uni = university.split("");
for (var i=0; i<university.length; i++){
    document.write(uni[i]+"<br />");
}


var userCountry = prompt("Enter your country?");
document.write("<br />User input: "+userCountry+"<br />");
document.write("Last character of input: "+userCountry.charAt(userCountry.length-1)+"<br />");


var string = "The quick brown fox jumps over the lazy dog";
var count = (string.match(/the/g) || []).length;
document.write("<br /> Text: "+string+"<br />");
document.write("There are "+count+" occurence(s) of the word 'the'");
