/*******************************
	Author:  Hugh Brennan
	Assignment:  Assignment 3
	Date:  June 29, 2014
	Filename: formIndex.js
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

 function getarea() 
 {
         var wid = document.getElementById("wid").value;
         var hgt = document.getElementById("hgt").value;
         var area = wid * hgt;
         var perim = wid * 2 + hgt * 2;
         
         if (wid =="") {
    	    	document.getElementById("errors").innerHTML = "The value for the width is blank.";
    	    	document.getElementById('wid').focus();
   		 }
   		 
   		 else if (hgt == "") {
    	    	document.getElementById("errors").innerHTML = "The value for the height is blank.";
    	    	document.getElementById("hgt").focus();
   		 }
         
        else if (isNaN (wid)) {
         		document.getElementById("errors").innerHTML = "Please enter a numeric value for the width.";
         		document.getElementById('wid').focus();
        }
        
        else if (isNaN (hgt)) {
         		document.getElementById("errors").innerHTML = "Please enter a numeric value for the height.";
         		document.getElementById("hgt").focus();
        }
        
        else if (wid <= 0) {
         		document.getElementById("errors").innerHTML = "The width is less than or equal to zero.";
         		document.getElementById('wid').focus();
        }
        
        else if (hgt <= 0) {
         		document.getElementById("errors").innerHTML = "The height is less than or equal to zero.";
         		document.getElementById("hgt").focus();
        }
       
       else {
         	window.document.getElementById("area").innerHTML = area;
         	window.document.getElementById("perim").innerHTML = perim;
         	document.getElementById("errors").innerHTML = "Please see results listed above.";
       }
}