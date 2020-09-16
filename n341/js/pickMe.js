/*
    Filename: pickMe.js
    Written by: Jasper Heist
    Purpose: Learning jQuery
    Date: 3/27/2019
    Modification History: 
    3/27/19 - date started
*/
$(document).ready(function(){
    
    $("#sTag").click(selectTag);
    $('#sClass').click(selectClass);
    $('#sID').click(selectID);
    $('#combo').click(combo);
    $('#sFTag').click(filterSelectTag);
    $('#sFClass').click(filterSelectClass);
    $('#sFID').click(filterSelectID);
    
    /*********
    Description: selects element by tag
    ************/
	function selectTag(){
        $('p').append("</br> another line to the paragraph");
    }
    
    /*********
    Description: selects element by class
    ************/
    function selectClass(){
        $('.apples').css("background-color", "blue");
    }
    
    /*********
    Description: selects element by ID
    ************/
    function selectID(){
        $('#tables').css("background-color", "green")
    }
    /*********
    Description: performs multiple css operations on a tag
    ************/
    function combo(){
        $('p').css("background-color", "yellow").append("</br>apples speak louder that nothing does");
    }
    
    /*********
    Description: selects element by filtered tag
    ************/
    function filterselectTag(){
        $('ul:parent').css("color", "red");
    }
    
    /*********
    Description: selects element by class filtered
    ************/
    function filterSelectClass(){
        
    }
    
    /*********
    Description: selects element by ID filtered
    
    ************/
    function filterSelectID(){
        
    }
});