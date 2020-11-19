/**

    Filename: form.js
    Written by: Jasper Heist
    Purpose: Learning jQuery
    Date: 4/19/2019
    Modification History: 
    4/19/19 - date started

**/

$(document).ready(function(){
    var strCheckedBoxes = "";
    
$( "#accordion" ).accordion();



var availableTags = [
	"Buy",
    "Sell",
    "Withdraw",
    "Deposit",
    "Trade",
    "Redemption",
    "Gift",
    "Other"
];
$( "#autocomplete" ).autocomplete({
	source: availableTags
});



$( "#submit" ).button();
$( "#submit" ).click();
    
$( "#reset" ).button();

$( "#button-icon" ).button({
	icon: "ui-icon-gear",
	showLabel: false
});



$( "#radioset" ).buttonset();



$( "#controlgroup" ).controlgroup();



$( "#tabs" ).tabs();



$( "#dialog" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
	event.preventDefault();
});



$( "#datepicker" ).datepicker({
	inline: true
});



$( "#slider" ).slider({
	range: true,
	values: [ 17, 67 ]
});



$( "#progressbar" ).progressbar({
	value: 20
});



$( "#spinner" ).spinner();



$( "#menu" ).menu();



$( "#tooltip" ).tooltip();



$( "#selectmenu" ).selectmenu();



// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);
    
    
    
    /* Output user data to the output area */
		/* Validation plugin - Define form functionality */
$.validator.setDefaults({
    submitHandler: function() {
        
        
    var outputPlace = document.getElementById('result');
    var strCheckedBoxes = [];
        strCheckedBoxes.push("You ");
    var name = new String($('#name').val());
    var email = new String($('#email').val());
    var password = new String($('#password').val());
    var telephone = new String($('#tele').val());
    var learnChecked = "";
    var date = new String($('#datepicker').val());
    var coin = new String($('#selectmenu').val());
    var txType = new String($('#autocomplete').val());
    var amount = new String($('#spinner').val());
    fillOut = $('input[name="radios"]:checked').val();
        
    
    
    $('input[name="checks"]:checked').each(function() {
        strCheckedBoxes.push($(this).val() + " and ");
    });
    
        //different behavior if there was a box or two checked
    if(strCheckedBoxes.length > 10){
        //add everthing from the array to the string
        learnChecked = strCheckedBoxes.join('');
        //add everything to the string
        learnChecked = learnChecked.slice(0,-5);
        learnChecked += "! Yay!";
    }else{
        learnChecked += "You were not conviced to do anything from this form. I'm sorry.";
    }
    
    outputPlace.innerHTML= "Name: " +name + "<br>" +
                            "Email: " + email + "<br>" +
                            "Password: " +password + "<br>" +
                            "Telephone Number: " + telephone + "<br>"+
                            learnChecked+ "<br>"+
                            "Transaction Date: " +date + "<br>" +
                            "Coin: " + coin + "<br>" +
                             "Transaction Type: " + txType + "<br>" +
                            "Amount Transacted: " +amount + "<br>" +
                            "Do you want to fill out again?: " + fillOut;
			
			} // end submitHandler
		}); // end validator.setDefaults
		   
		// Use default rules and error messages when validating
		$("#cryptoForm").validate();

		/* End Validation plugin */
});