/*******************************
	Author:  Hugh Brennan
	Assignment:  Assignment 3
	Date:  June 29, 2014
	Filename: alertIndex.js
*******************************/

/****************************************************************************************
 * 
 * 
 * My philosophy regarding error handling is to detect specific issues with form data.
 * I check each field separately and validate each piece of data.  If there is a problem, 
 * I provide the user with a message and reset the focus back to the field in question.  
 * I do not clear the existing data because I want the user to see what they typed in.
 * This method allows them to recall the bad data immediately.  As the forms become larger
 * and more complex, certain feilds will be marked as optional and no validation will occur
 * on these fields.
 * 
 * 
 *****************************************************************************************/


window.onload=getarea;
		
function getarea() {
	var x;
	var y;
	var wid = prompt("Please enter the width");
 	var hgt = prompt("Please enter the height");
	var area = wid * hgt;
	var perim = wid * 2 + hgt * 2;
         
	if (wid =="") {
    	    	alert("The value for the width is blank.");
   		 }
   		 
   		 else if (hgt == "") {
    	    	alert("The value for the height is blank.");
   		 }
         
        else if (isNaN (wid)) {
         		alert("Please enter a numeric value for the width.");
         		document.focus(wid());
        }
        
        else if (isNaN (hgt)) {
         		alert("Please enter a numeric value for the height.");
        }
        
        else if (wid <= 0) {
         		alert("The width is less than or equal to zero.");
        }
        
        else if (hgt <= 0) {
         		alert("The height is less than or equal to zero.");
        }
       
	else {
		alert("The area of a rectangle is " + area + " and the perimeter of a rectangle is " + perim + ".")
		x = "The area of a rectangle is " + area + ".";
		y = "The perimeter of a rectangle is " + perim + ".";
		window.document.getElementById("area").innerHTML = x;
		window.document.getElementById("perim").innerHTML = y;
	}
}