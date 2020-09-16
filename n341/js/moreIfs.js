/**************************************
 TITLE: moreifs.js					
 AUTHOR: Jasper Heist (JCH)		
 PURPOSE: practice if statements in JS
 LAST MODIFIED ON: 12 February 2019
 LAST MODIFIED BY: Jasper Heist (JCH)
 MODIFICATION HISTORY:
 12 February 2019: Began Editing
***************************************/

//jqurey object
$(document).ready(function () {
			
    //variables for longitudes and latitudes
    var intCurrentLatitude = 0;
    var intCurrentLongitude = 0;
    var intDestinationLatitude = 0;
    var intDestinationLongitude = 0;
    
    
    /*********
    Description: outputs the text to the page
    Parameters: output - string to output
                id - element ID on page
    
    ************/
    
    function pageOutput(strOutput, id){
        var elementID = document.getElementById(id);
        
        elementID.textContent = strOutput;
    }//end output
	
    
    //get input from user and make sure it is in the range -180 to 180
    var strInput = "";
    var strUserEcho = "";
    var keepGoing = true;
    var intCheckRange = 0;
    
    strUserEcho += "Current Latitude: ";
    
    //current latitude check
    while(keepGoing){
        //current longitutde and latitude
        strInput = prompt("Enter the integer of your current latitude.", "'-180 to 180'");
    
        intCurrentLatitude = parseInt(strInput);
        
        intCheckRange = intCurrentLatitude;
        
        //check input range
        if((intCheckRange <= 180)&&(intCheckRange >= -180)){
            keepGoing = false;
        }
    }
    
    strUserEcho = strUserEcho + intCurrentLatitude + ", Current Longitude: ";
    
    //current longitude check
    keepGoing = true;
    while(keepGoing){
        strInput = prompt("Enter the integer of your current longitude.", "'-180 to 180'");

        intCurrentLongitude = parseInt(strInput);
        
        intCheckRange = intCurrentLongitude;
        
        //check input range
        if((intCheckRange <= 180)&&(intCheckRange >= -180)){
            keepGoing = false;
        }
    }
    
    strUserEcho = strUserEcho + intCurrentLongitude + ", Destination Latitude: ";
    
    
    //destination latitude check
    keepGoing = true;
    //destination longitutde and latitude
    while(keepGoing){
        strInput = prompt("Enter the integer of your destination latitude.", "'-180 to 180'");

        intDestinationLatitude = parseInt(strInput);
        
        intCheckRange = intDestinationLatitude;
        
        //check input range
        if((intCheckRange <= 180)&&(intCheckRange >= -180)){
            keepGoing = false;
        }
    }
    
    strUserEcho = strUserEcho + intDestinationLatitude + ", Destination Longitude: ";
    
    //destination longitude check
    keepGoing = true;
    while(keepGoing){
        strInput = prompt("Enter the integer of your destination longitude.", "'-180 to 180'");

        intDestinationLongitude = parseInt(strInput);
        
        intCheckRange = intDestinationLongitude;
        
        //check input range
        if((intCheckRange <= 180)&&(intCheckRange >= -180)){
            keepGoing = false;
        }
    }
    
    strUserEcho += intDestinationLongitude;
    
    pageOutput(strUserEcho, "echo");
    
    
    
    var strOutput = "";
    //begin if/else
    if(intCurrentLatitude < intDestinationLatitude){
        strOutput += "Head North ";
        if(intCurrentLongitude < intDestinationLongitude){
            strOutput += "East";
        }else if(intCurrentLongitude > intDestinationLongitude){
            strOutput += "West";
        }
    } else if (intCurrentLatitude > intDestinationLatitude){
        strOutput += "Head South";
        if(intCurrentLongitude < intDestinationLongitude){
            strOutput += "East";
        }else if(intCurrentLongitude < intDestinationLongitude){
            strOutput += "West";
        }
    } else {
        if(intCurrentLongitude < intDestinationLongitude){
            strOutput += "Head East";
        }else if(intCurrentLongitude < intDestinationLongitude){
            strOutput += "Head West";
        }else{
        strOutput += "Land Ho!";
        }
    }
    
    pageOutput(strOutput, "ifElse");
    
    
    strOutput = "";
    
    //begin switch statememnt
    switch (true){
        
        case ((intCurrentLatitude <= intDestinationLatitude)&&(intCurrentLongitude < intDestinationLongitude)):
      
        strOutput += "Head North East";
        break;
            
        case ((intCurrentLatitude >= intDestinationLatitude)&&(intCurrentLongitude < intDestinationLongitude)):
      
        strOutput += "Head South East";
        break;
            
        case ((intCurrentLatitude <= intDestinationLatitude)&&(intCurrentLongitude > intDestinationLongitude)):
      
        strOutput += "Head North West";
        break;
            
        case ((intCurrentLatitude >= intDestinationLatitude)&&(intCurrentLongitude > intDestinationLongitude)):
      
        strOutput += "Head South West";
        break;
            
        default:
        //land ho
        strOutput += "Land Ho!!"
        break;
     }
    
    pageOutput(strOutput, "caseSwitch")

}); // end of $(document).ready()