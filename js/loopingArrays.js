/**************************************
* TITLE: Arrays and Loopiness
* AUTHOR: Christian Dodds
* CREATE DATE: 2/20/2019
* PURPOSE: base code for the Arrays and Loopiness assignment, 
*	you are encouraged to use the following code to start 
*	your arrays and loopiness assignment
* LAST MODIFIED ON: 2/20/2019
**************************************/

$(document).ready(function (){
			
	alert("Hoist the secret message ye scurvy dawgs!");
	var charChar;
	var keepGoing = true;
    while(keepGoing){
        charChar = prompt("What is yer letter?", "a-z");
        if (charChar.length === 1){
            keepGoing = false;
        }
    }
	
	/*****			
	Purpose: converts character to ascii character			
	Parameters: single character / letter		
	Return: integer representing an ascii value
	*****/
	function parseAscii(chrCharacter)
	{
		intAscii = chrCharacter.charCodeAt(0);
		return intAscii;
	}
	
    /*********
    Description: outputs the text to the page
    Parameters: output - string to output
                id - element ID on page
    
    ************/
    
    function pageOutput(strOutput, id){
        var elementID = document.getElementById(id);
        
        elementID.textContent = strOutput;
    }//end output
    
	/*****			
	Purpose: converts ascii character value to binary		
	Parameters: single integer representing an ascii value	
	Return: binary, base 2 representation of the number passed to this function
	*****/
	function parseBin(intAscii)
	{
        var i;
		strBin = parseInt(intAscii, 10).toString(2);
		if(strBin.length < 8)
		{
			var intPlaceHolders = 8 - strBin.length;
			for(i = 0; i < intPlaceHolders; i = i + 1)
			{
				strBin = "0" + strBin;
			}
		}
		
		return strBin;
	}
    
    var intAscii = parseAscii(charChar);
    var charBin = parseBin(intAscii);
    
    var charArray = charBin.split("");
    
    var i;
    for( i = 0; i < charArray.length; i = i + 1){
        var boolString;
        if(charArray[i] == 0){
            boolString = "false";
        } else {
            boolString = "true";
        }
        var strNum = i + 1;
        var strNum = strNum.toString();
        pageOutput(boolString, strNum);
    }
    
});