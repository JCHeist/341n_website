/**************************************
 TITLE: iffyPrograming.js					
 AUTHOR: Jasper Heist (JCH)		
 PURPOSE: practice if statements in JS
 LAST MODIFIED ON: 12 February 2019
 LAST MODIFIED BY: Jasper Heist (JCH)
 MODIFICATION HISTORY:
 12 February 2019: Began Editing
***************************************/

//jqurey object
$(document).ready(function () {
			
    /*********
    Description: outputs the text to the page
    Parameters: output - name of pirate
                id - element ID on page
    
    ************/
    
    function pageOutput(strOutput, id){
        var elementID = document.getElementById(id);
        
        elementID.textContent = strOutput;
    }//end output
				
    
    
    
        var strQuestion = "Did you make it to port on time?";
    
    
    /*********
    Description: prompts user with promt given (called recursively if input is incorrect (not yes or no))
    Parameters: strPQuestion -question to be asked to user
    
    ************/
    function determineTime(strPQuestion) {
        
        
        var strDefaultResponse = "Yes/No";

        
        var strName = prompt(strPQuestion, strDefaultResponse);
        var strUpperName = strName.toUpperCase();

        if (strUpperName === "YES") {
            pageOutput("Wooo! Have ye some extra Gold Doubloons!", "redbeard")
        }else if (strUpperName === "NO") {
            pageOutput("Walk the plank!!", "redbeard")
        }else{//if the user did not answer correctly, ask the user agian but be more forceful
            determineTime("Now dont be playin' games with me son, give me a straight answer!! Yes or No?!!");
        }
    }
    
    determineTime(strQuestion);
}); // end of $(document).ready()