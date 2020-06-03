var items = [                   
    ["", ""],
    ["", ""],
    ["", ""]
]


var multi_dim = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
for (var i = 0;i<multi_dim.length;i++){
    for (var j=0; j<4;j++){
        document.write(multi_dim[i][j]);
    }
    document.write("<br />");
}

document.write("<br />");
for (var i=1;i<=10;i++){
    document.write(i+"<br />");
}

var tableNumber = +prompt("Enter a number for it's multiplication table?");
var tableLength = +prompt("Enter length of the table?");
document.write("<br />Multiplication table of "+tableNumber+"<br />");
document.write("Length "+tableLength+"<br />");
for (var i=1;i<=tableLength;i++){
    document.write(tableNumber+" x "+i+" = "+(tableNumber*i)+"<br />");
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i=0;i<fruits.length;i++){
    document.write("<br />"+fruits[i]);
}
document.write("<br />");
for (var j=0;j<fruits.length;j++){
    document.write("<br />Element at index "+j+" is "+fruits[j]);
}

document.write("<br />");
document.write("<h4>Counting: </h4>");
for (var a=1;a<=15;a++){
    document.write(a+",");
}
document.write("<h4>Reverse Counting: </h4>");
for (var b=10;b>0;b--){
    document.write(b+",");
}
document.write("<h4>Even: </h4>");
for (var c=0;c<=20;c++){
    if (c%2==0){
        document.write(c+",");
    }
}
document.write("<h4>Odd: </h4>");
for (var d=0;d<=20;d++){
    if (d%2==1){
        document.write(d+",");
    }
}
document.write("<h4>Series: </h4>");
for (var c=2;c<=20;c++){
    if (c%2==0){
        document.write(c+"k,");
    }
}

document.write("<br />");
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'am?");
document.write("<br />");
for(var i = 0;i<bakeryItems.length;i++){
    
    if (item === bakeryItems[i]){
        break
    }   
}

if (item === bakeryItems[i]){
    document.write(item+" is <b>available</b> at index "+[i] +" in our bakery"+"<br />");
}
else {
    document.write("We are sorry "+item+ " is <b> not available</b> in our bakery"+"<br />");
}

var arrayItems = [24, 53, 78, 91, 12];
document.write("<br />Array items: "+arrayItems[0]+","+arrayItems[1]+","+arrayItems[2]+","+arrayItems[3]+","+arrayItems[4]+"<br />");
document.write("The largest number is "+Math.max(21,53,78,91,12)+"<br />");

var arrayItems = [24, 53, 78, 91, 12];
document.write("<br />Array items: "+arrayItems[0]+","+arrayItems[1]+","+arrayItems[2]+","+arrayItems[3]+","+arrayItems[4]+"<br />");
document.write("The smallest number is "+Math.min(21,53,78,91,12)+"<br />");


document.write("<br />");
for (var x=5;x<=100;x+=5){
    document.write(x+",")
}