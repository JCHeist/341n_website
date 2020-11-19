/**************************************
 TITLE: JS Hello World					
 AUTHOR: Jasper Heist (JCH)		
 PURPOSE: practice alerts in JS
 LAST MODIFIED ON: 23 January 2019
 LAST MODIFIED BY: Jasper Heist (JCH)
 MODIFICATION HISTORY:
 1623January 2019: Began Editing
***************************************/

$(document).ready(function () {
	
    var initialWrite = `
<!doctype html>              
<html lang="en">
<head>
   <meta charset="utf-8">
   <title>Writing with JS</title>
   
    

        <link rel="stylesheet" type="text/css" href="css/pirate.css">
    </head>
    <body>

                    <h1 id="greeting"></h1>
                    
                    <p> ".write: I certainly hope that this counts as using all three functions.</p>
    
                    <p id="tables"></p>
    </body>
</html>
                    `
    
    document.write(initialWrite);
    
	var message = "Text Content: Welcome to the pirate javascript writing class with JaspARRR!";
    var outputUno = document.getElementById("greeting");
    
    outputUno.textContent = message;
    
    outputUno = document.getElementById("tables")
    message = "innerHTML: Us pirates don't eat veggie-tables, <span style='color: yellow'>we eat gold tables.</span>"
    
    outputUno.innerHTML = message;
    
    

				
}); // end of $(document).ready()