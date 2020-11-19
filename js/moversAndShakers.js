/*
    Filename: moversAndShakers.js
    Written by: Jasper Heist
    Purpose: Learning jQuery
    Date: 4/3/2019
    Modification History: 
    4/3/19 - date started
*/
$(document).ready(function() {
    $("#hide").click(function(){hide();});
    $('#show').click(function(){show();});
    $('#toggle').click(function(){toggle();});
    $('#Rtoggle').click(function(){regretfulToggle();});
    $('#slideUp').click(function(){slideUp();});
    $('#slideDown').click(function(){slideDown();});
    $('#fadeOut').click(function(){fadeOut();});
    $('#fadeIn').click(function(){fadeIn();});
});



/*********
    Description: hides ship
    ************/
	function hide(){
        $('#ship').hide(500);
    }
    
    /*********
    Description: shows ship
    ************/
	function show(){
        $('#ship').show(500);
    }
    
    /*********
    Description: toggle show and hide
    ************/
	function toggle(){
        $('#ship').toggle(500);
    }
    
    /**
    Description: toggle show and hide and again
    ************/
	function regretfulToggle(){
        $('#ship').toggle(500, function(){regretfulToggle()});
        $('#ship').append("this was a mistake<br>");
    }

    /*********
    Description: slides up
    ************/
	function slideUp(){
        $('#ship').slideUp(500).slideDown(300);//chaining
    }
    
    /*********
    Description: slides down
    ************/
	function slideDown(){
        $('#ship').slideDown(500);
    }
    
    /*********
    Description: fades out
    ************/
	function fadeOut(){
        $('#ship').fadeOut(500);
    }
    
    /*********
    Description: fades in
    ************/
	function fadeIn(){
        $('#ship').fadeIn(500);
    }