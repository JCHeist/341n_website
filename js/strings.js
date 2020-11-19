/**************************************
 TITLE: strings.js					
 AUTHOR: Jasper Heist (JCH)		
 PURPOSE: using strings in JS
 LAST MODIFIED ON: 27 February 2019
 LAST MODIFIED BY: Jasper Heist (JCH)
 MODIFICATION HISTORY:
 27 February 2019: Began Editing
***************************************/

//jqurey object
$(document).ready(function () {
    /*********
    Description: outputs the text to the page
    Parameters: output - string to output
                id - element ID on page
    ************/
    function pageOutput(strOutput, id) {
        var elementID = document.getElementById(id);
        
        elementID.textContent = strOutput;
    }//end output
	
    
    /*********
    Description: generates a boat name. something special for the first 12 and then just the special name_(number)
    Parameters: sigOtherName - string to generate name from
                intNameGenNum - int of type of name to generate
    ************/
    function generateName(sigOtherName, nameNum) {
        if (nameNum === 1) {//regular name plus concatination of boat
            return ("boat: " + sigOtherName);
            
        } else if (nameNum === 2) {//name to uppercase
            return (sigOtherName.toUpperCase());
            
        } else if (nameNum === 3) {//substring to get middle part
            if (sigOtherName.length < 5) {
                return (sigOtherName + "McShortName");
            } else {
                return (sigOtherName.substring(2, 5));
            }

        } else if (nameNum === 4) {//replace vowels with x'x
            var replacedName = sigOtherName.toLowerCase();
            replacedName = replacedName.replace("a", "x");
            replacedName = replacedName.replace("e", "x");
            replacedName = replacedName.replace("i", "x");
            replacedName = replacedName.replace("o", "x");
            replacedName = replacedName.replace("u", "x");
            replacedName = replacedName.replace("y", "x");
            
            return replacedName;
            
        } else if (nameNum === 5) {//char at function
            return (sigOtherName.charAt(0))
            
        } else if (nameNum === 6) {//name to lowercase
            return (sigOtherName.toLowerCase());
            
        } else if (nameNum === 7) {//trim
            return (sigOtherName.trim());
            
        } else if (nameNum === 8) {//return the number of x'x in the name
            var i;
            return("Index " + sigOtherName.indexOf("j"));
            
        } else if (nameNum === 9) {//using char at
            return (sigOtherName.charAt(0) + sigOtherName.charAt(sigOtherName.length - 1));
            
        } else if (nameNum === 10) {
            return (sigOtherName.charAt(0) + sigOtherName.charAt(1));
            
        } else if (nameNum === 11) {//replaces char at index 1 with an actual 1
            return(sigOtherName.replace(sigOtherName.charAt(1), "1"));
            
        } else if (nameNum === 12) {
            return ("Arg... the mighty " + sigOtherName);
            
        } else {
            return (sigOtherName + "_" + nameNum);
        }
    }//end generateName
    
    var strName = prompt("What is the name of your queen's beloved?", "Name Here");
    
    var nameArray = new Array(12);
    var i;
    for (i = 1; i < 13; i = i + 1) {
        nameArray[i - 1] = generateName(strName, i);
        
    }
    
    //put array to page
    for (i = 1; i < 13; i = i + 1) {
        pageOutput(i + ") " + nameArray[i - 1], i);
        
    }
   
    
}); // end of $(document).ready()