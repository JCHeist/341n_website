/**

    Filename: customForm.js
    Written by: Jasper Heist
    Purpose: Learning jQuery
    Date: 4/19/2019
    Modification History: 
    4/19/19 - date started
    4/22/19 - custom functionality added (cloned from old js)

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


$( "#tabs" ).tabs();




$( "#datepicker" ).datepicker({
	inline: true
});



$( "#spinner" ).spinner();



$( "#menu" ).menu();



$( "#tooltip" ).tooltip();



$( "#selectmenu" ).selectmenu();

    
    
    /**
    Description: This runs upon submission of form (checks input and echos output)
    no parameters or return values
    **/
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
    var amount = new String($('#customSpin').val());
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
		   
		// Use custom rules and error messages when validating
		$("#cryptoForm").validate({
           
            rules: {
               name: {
                  required: true,
                   maxlength: 12
            },
                password: {
                  required: true,
                  minlength: 5
            },
               tele: {
                  required: true,
                    number:true,
                   maxlength:12,
                   minlength: 10
            },
                email: {
                  required: true
            }, 
                txtype: {
                  required: true
            },
                amount: {
                  required: true,
                    min: 0.0000001
                    
            }
              
            }, // end rules

            messages: {               // displayed when user input doesn't match the rules
                name: {
                   required: " Please enter a username",
                   maxlength: $.validator.format("Must not have more than {0} characters")
                },
                password: {                                           //<input name="password">
                    required: "Please provide a password",
                    minlength: $.validator.format("Must have at least {0} characters")
                },
                tele: {
                    required: " Please enter a telephone number",
                    number: " Enter a number",
                    minlength: " Please use no characters or separators other than the 10-12 numbers",
                    maxlength: " Max length 12 numbers"
                },
                email: {
                    required: " Please enter a valid email"
                },
                txtype: {
                    required: " Enter what type of transaction this was"
                },
                amount: {
                    required: " Please enter an amount purchased",
                    min: " You must buy at least 0.00000001 of this coin"
                }
            }  // end messages
        });

		/* End Validation plugin */
});