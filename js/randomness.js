/**************************************
 TITLE: conversions.js					
 AUTHOR: Jasper Heist (JCH)		
 PURPOSE: practice objects in JS
 LAST MODIFIED ON: 24 January 2019
 LAST MODIFIED BY: Jasper Heist (JCH)
 MODIFICATION HISTORY:
 6 February 2019: Began Editing
***************************************/

// The $ is the jQuery object
// "document" is the document object
// ready is a method of the jQuery object
// function creates an anonymous function to contain the code that should run
// In English, when the DOM has finished loading, execute the code in the function.
// See pages 312-313 of the text for details.
$(document).ready(function () {
			
    /*********
    Description: This creates a pirate
    Parameters: name - name of pirate
                rank - rank of pirate
                id - element ID on page
    Returns: 
    ************/
    function Pirate(name, rank, eID) {
        
        /*******
        description: picks a random number for the pirate
        parameters: none
        returns: random number
        ********/
        this.pickNumber = function() {
            var num = Math.floor(Math.random() * 10 + 1);
            //for some reason I have to divide by two or else it gives me a range 2-20 of all even numbers
            //num = num / 2;
            return num;
        };
        
        
        /******
        description: shows text to ID on page
        parameters: what the pirate will say
        returns: nothing
        
        *****/
        this.speak = function(strOutput) {
            
           if(strOutput === 1) {
               strOutput = ("I, " + this.name + ", the " + this.rank + " guess the number " + this.favNum + ".");
           }
           
            this.pirateID.textContent +=  strOutput;
        };
        
        /*
        description-returns doncument element by id
        parameters-element ID
        returns documents element
        
        */
        this.assignID = function(newID){
            return document.getElementById(newID);
        };
        
        //instance variables
        this.name = name;
        this.favNum = this.pickNumber();
        this.rank = rank;
        this.pirateID = this.assignID(eID);
 };//end pirate class def
    
    var captain = new Pirate("Captain", "RedBeard", "redbeard");
        
        captain.speak("Hello all, the game shall begin now and I will choose a number, If you choose the same number you will get me ol' bottle of Grog. If ye lose, I will keep it for meself. All of you, guess a number!");
    
    var ds = new Pirate("The heir of Captian Green","Deck Swapper","captain_green");
    var dt = new Pirate("Dwight Toot","Assistant TO the Captain Redbear", "ship");
    var ll = new Pirate("Land Lover","Cook", "concatenation");
    var bill = new Pirate("Billy","Bill Payer", "billy");
    
    var crew = new Array();
    crew.push(ds);
    crew.push(dt);
    crew.push(ll);
    crew.push(bill);
    
    var intCorrectGuess = -1;
    
    for (i = 0; i < crew.length; i++){
        crew[i].speak(1);
        if(crew[i].favNum == captain.favNum){
            intCorrectGuess = i;
        }
        
    }
    
    captain.assignID("reveal");
    
    if(parseInt(intCorrectGuess) === -1){
        captain.speak("......................................................................Ha! You are all dumb as the grog.... I keep Me grog!!!!");
    }else{
        captain.speak("......................................................................Oh rats! Here, " + crew[intCorrectGuess].name + ", take me Grog!.... I knew I should not have guessed " + captain.favNum + "!!");
    }
   
				
}); // end of $(document).ready()