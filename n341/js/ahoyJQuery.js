/*
    Filename: ahoyJQuery.js
    Written by: Jasper Heist
    Purpose: Learning jQuery
    Date: 3/27/2019
    Modification History: 
    3/27/19 - date started
*/
$(document).ready(function(){
    
    var textToUse = "Text To Be Manipulated"
    
    //this is the button clicked when you say append
	$("#append").click(function(){
        $('p').append("</br>" + textToUse);
    })
    
    $("#replace").click(function(){
        $('p').html(textToUse);
    })
});