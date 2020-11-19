/**************************************
 TITLE: functionBattle.js					
 AUTHOR: Jasper Heist (JCH)		
 PURPOSE: practice alerts in JS
 LAST MODIFIED ON: 30 January 2019
 LAST MODIFIED BY: Jasper Heist (JCH)
 MODIFICATION HISTORY:
 30 January 2019: Began Editing
***************************************/

// The $ is the jQuery object
// "document" is the document object
// ready is a method of the jQuery object
// function creates an anonymous function to contain the code that should run
// In English, when the DOM has finished loading, execute the code in the function.
// See pages 312-313 of the text for details.
$(document).ready(function () {
			
   battle("greeting", 1, "It was the first time in a long time Redbeard and Captain Green saw each other, they were", "mile");
    
    battle("captain_green", 500, "Captain green was done messing with this scum once and for all, he turned his boat towards Redbeard", "feet");
   
    battle("redbeard", 350, "Redbeard, sensing agression was not going to go down without a figh. 'Go at that ship!' he yelled", "feet");
    
    battle("ship", 25, "As they go closer and closer, both crews preparing for battle were not afraid", "feet");
    
    battle("concatenation", 3, "In a great concatenation of ships, a storming of enemy ships was in full swing on both sides", "inches");
				
}); // end of $(document).ready()

function battle( eID, intFeetAway, strBattleSetUp, strUnits){
    var battleLocation = document.getElementById(eID);
    
    var strOutput = strBattleSetUp + ", " + intFeetAway + " " + strUnits + " away from each other.";
    
    battleLocation.textContent = strOutput;
}//end battle