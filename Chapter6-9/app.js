var a = 10;
document.write("Result:<br />");
document.write("The value of a is: "+a+"<br />");
document.write("...............................<br />");
document.write("<br />The value of ++a is: "+ ++a+"<br />");
document.write("Now the value of a is: "+a+"<br />");
document.write("<br />The value of a++ is: "+ a++ +"<br />");
document.write("Now the value of a is: "+ a +"<br />");
document.write("<br />The value of --a is: "+ --a +"<br />");
document.write("Now the value of a is: "+ a +"<br />");
document.write("<br />The value of a-- is: "+ a-- +"<br />");
document.write("Now the value of a is: "+ a +"<br />");

var a = 2, b = 1;
--a;                            /* 1 */
--a - --b;                      /* 0 - 0 = 0 */
--a - --b + ++b;                /* -1 - -1 + 0 = 0 */   
--a - --b + ++b + b--           /* -2 - -1 + 0 + 0 = -1 */

var result = --a - --b + ++b + b--;             /*1 - 0 + 1 + 1 = 3*/
document.write("<br />a is: "+a+"<br />");
document.write("b is: "+b+"<br />");
document.write("result is: "+result+"<br />");

var userName = prompt("Enter your name?");
alert("Welcome "+userName);

var number = +prompt("Enter a number for its multiplication table?");
if (number == ""){
    document.write("<br /><h2>Multiplication Table of 5</h2>");
    for(var i=1; i<=10; i++){
        document.write("5 "+" x "+i+" = "+(5*1)+"<br />");
    }
}
else{
    document.write("<h2>Multiplication Table of "+number+"</h2>");
    for (var i=1; i<=10; i++){
    document.write(+number + " x "+i+" = "+(number*i)+"<br />");
}
}

var subject1 = prompt("Enter first subject?");
var subject2 = prompt("enter second subject?");
var subject3 = prompt("Enter third subject?");
var totalMarksForEachSubject = 100;
var obtainedMarks1 = +prompt("Enter obtained marks for first subject?");
var obtainedMarks2 = +prompt("Enter obtained marks for second subject?");
var obtainedMarks3 = +prompt("Enter obtained marks for third subject?");
document.write("<br /><h2>Subject  Total Marks  Obtained Marks  Percentage </h2>");
var overAllMarks = 300;
var overAllObtainedMarks = obtainedMarks1+obtainedMarks2+obtainedMarks3;
var overAllPercentage = (overAllObtainedMarks/3)
document.write("&nbsp &nbsp"+subject1 +" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ totalMarksForEachSubject +" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ obtainedMarks1 +" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ ((obtainedMarks1 / totalMarksForEachSubject)*100)+"% <br />");
document.write("&nbsp &nbsp"+subject2 +" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ totalMarksForEachSubject +" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ obtainedMarks2 +" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ ((obtainedMarks2 / totalMarksForEachSubject)*100)+"% <br />");
document.write("&nbsp &nbsp"+subject3 +"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ totalMarksForEachSubject +" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ obtainedMarks3 +" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+ ((obtainedMarks3 / totalMarksForEachSubject)*100)+"% <br />");
document.write("<br /> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+"<b>"+overAllMarks+"</b>" +" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+"<b>"+ overAllObtainedMarks+"</b>"+ " &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+"<b>"+ overAllPercentage+"%</b>")