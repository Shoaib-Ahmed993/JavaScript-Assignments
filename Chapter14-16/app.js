var studentNames = [];

var studentNames2 = new Array();

var stringsArray = ["Shoaib", "Ahmed", "Ali", "Saqib", "Sameer"];

var numbersArray = [11, 22, 33, 44, 55];

var booleanArray = [true, false];

var mixedArray = ["abc", 12, "xyz", 56, "name", 99];

var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
document.write("<h2>Qualifications:</h2>")
var j = 1;
for (var i=0; i<qualification.length; i++){
    document.write(j+") "+qualification[i]+"<br />");
    j++;
} 

var names = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;
document.write("<br />Score of "+names[0]+" is "+scores[0]+". Percentage: "+(scores[0]/totalMarks)*100+"%<br />");
document.write("Score of "+names[1]+" is "+scores[1]+". Percentage: "+(scores[1]/totalMarks)*100+"%<br />");
document.write("Score of "+names[2]+" is "+scores[2]+". Percentage: "+(scores[2]/totalMarks)*100+"%<br />");

var colorNames = ["Red", "Green", "Yellow", "Blue"];
colorNames.unshift(prompt("What color you wants to add to the beginning of the array?"));
alert(colorNames);
colorNames.push(prompt("What color you wants to add to the end of the array?"));
alert(colorNames);
colorNames.unshift("Black", "Brown");
alert(colorNames);
colorNames.shift();
alert(colorNames);
colorNames.pop();
alert(colorNames);
colorNames.splice((prompt("Enter at which index you wants to add a color?")),(prompt("No. of colors wants to remove")),(prompt("color name?")));
alert(colorNames);
colorNames.splice((prompt("Enter at which index you wants to delete a color?")),(prompt("No. of colors wants to remove")));
alert(colorNames);

var studentScores = [320, 230, 480, 120];
document.write("<br />Scores of Students : "+studentScores[0]+","+studentScores[1]+","+studentScores[2]+","+studentScores[3]+"<br />");
document.write("Ordered Score of Students : "+studentScores.sort()+"<br />");

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
document.write("<br />Cities list:<br />");
document.write(cities[0]+","+cities[1]+","+cities[2]+","+cities[3]+","+cities[4]+"<br />");
var selectedCities  = cities.slice(2,4)
document.write("<br />Selected cities list:<br />");
document.write(selectedCities[0]+","+selectedCities[1]+"<br />");

var arr = ["This ", "is ", "my ", "cat"];
document.write("<br />Array:<br />");
document.write(arr[0]+","+arr[1]+","+arr[2]+","+arr[3]+"<br />");
document.write("<br />String:<br />");
document.write(arr.join()+"<br />")

var inputDevices = ["keyboard", "mouse", "printer", "monitor"];
document.write("<br />"+inputDevices[0]);
document.write("<br />"+inputDevices[1]);
document.write("<br />"+inputDevices[2]);
document.write("<br />"+inputDevices[3]+"<br />");

document.write("<br />"+inputDevices[3]);
document.write("<br />"+inputDevices[2]);
document.write("<br />"+inputDevices[1]);
document.write("<br />"+inputDevices[0]);

var phone_manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];     //Question: 15
document.write("<h1> Phone Manufacturers:</h1>");
document.write(phone_manufacturers[0]+"<br />");
document.write(phone_manufacturers[1]+"<br />");
document.write(phone_manufacturers[2]+"<br />");
document.write(phone_manufacturers[3]+"<br />");
document.write(phone_manufacturers[4]+"<br />");
document.write(phone_manufacturers[5]+"<br />");