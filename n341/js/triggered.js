/*
    Filename: triggered.js
    Written by: Jasper Heist
    Purpose: Learning jQuery
    Date: 4/3/2019
    Modification History: 
    4/3/19 - date started
*/
var screenHeight = 0;
var screenWidth = 0;

$(document).ready(function() {
    resizeLabels();
    
    
   
});

$(window).resize(function(){resizeLabels()});


/*********
    Description: displays current window height
    ************/
	function resizeLabels(){
        screenHeight = window.innerHeight;
        screenWidth = window.innerWidth;
        $('#height').text("Page Height: " + screenHeight);
        $('#width').text("Page Width: " + screenWidth);
    }
    
    /*********
    Description: moves box around
    ************/

    $(document).keydown(function(e){
        
        e = e || window.Event;
        if (e.keyCode == '38') {
        // up arrow
            $('#textbox').animate({
            'marginTop' : "-=30px" //moves up
            })
        }
        else if (e.keyCode == '40') {
            // down arrow
            $('#textbox').animate({
            'marginTop' : "+=30px" //moves up
            })
        }
        else if (e.keyCode == '37') {
           // left arrow
            $('#textbox').animate({
            'marginLeft' : "-=30px" //moves up
            })
        }
        else if (e.keyCode == '39') {
           // right arrow
            $('#textbox').animate({
            'marginLeft' : "+=30px" //moves up
            })
        }
    });
    
    
    /*********
    Description: turn text yellow
    ************/
	$(document).mouseenter(function(){
        $('#textbox').css({'color': "yellow"})
    });

/*********
    Description: toggle show and hide
    ************/
	$(document).mouseleave(function(){
        $('#textbox').css({'color': "black"})
    });