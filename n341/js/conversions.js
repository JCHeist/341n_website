/**************************************
 TITLE: conversions.js					
 AUTHOR: Jasper Heist (JCH)		
 PURPOSE: practice alerts in JS
 LAST MODIFIED ON: 24 January 2019
 LAST MODIFIED BY: Jasper Heist (JCH)
 MODIFICATION HISTORY:
 24 January 2019: Began Editing
 25 January 2019: final edit
***************************************/

// The $ is the jQuery object
// "document" is the document object
// ready is a method of the jQuery object
// function creates an anonymous function to contain the code that should run
// In English, when the DOM has finished loading, execute the code in the function.
// See pages 312-313 of the text for details.
$(document).ready(function () {
			
    var exchangeRate = 287;
    
    var strQuestion = "What is yer name landLuver?";
    var strDefaultResponse = "Landon McLover";
    
	var strName = prompt(strQuestion, strDefaultResponse);
    
    strQuestion = "How many gold doubloons did ye plunder landluver?";
    strDefaultResponse = "0";
    
    var strNumDoubloons = prompt(strQuestion, strDefaultResponse);
    var intNumDoubloons = parseInt(strNumDoubloons);
    
    var intCalculatedProfit = intNumDoubloons * exchangeRate;
    
    var strFinal = "Yer name be " + strName + " and ye plundered " + strNumDoubloons + " gold doubloons for a profit of $" + intCalculatedProfit + ".";
    
    var outPut = document.getElementById("concatenation");
    outPut.textContent = strFinal;
	
				
}); // end of $(document).ready()