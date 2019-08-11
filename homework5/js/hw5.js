/* Homework 5
By: Tofik Mussa
Submitted to : Dr. Laurence
*/

//I have done 2 for extra credit

// #1 challenge - Dynamically matching passwords
function checkIfPasswordsMatch(){
    var password1 = $('#pwd1').val();
    var password2 = $('#pwd2').val();

    if(password1.length < 8){
        $('#pwd1Hint').show();
    }
    else if(password1 != password2){
        $('#pwd2Hint').show();
    } else {
        $('#pwd2Hint').hide();
        $('#pwd1Hint').hide();
    }
}

// #2 challenge - Counting down number of characters left
function countDownNumberOfCharactersLeftToType(){   
    var textArea = $('#bio').val();
    var charsLeft = 140 - parseInt(textArea.length);

    if(charsLeft >= 0 ){
        $('#charsLeft').text(charsLeft);
    } 
    else {
        charsLeft = -charsLeft;
        $('#charLimit').text("You have gone " + charsLeft + " over the limit!");
    }  
}

// #3 challenge - populating a second drop down upon selection of a primary drop down
var stateToCity = {
    "Minnesota" : ["Minneapolis", "Saint Paul", "Saint Cloud", "Brooklyn park"],
    "Ohio": ["Cleveland", "Dayton", "Columbus", "Polaris"],
    "Maryland": ["Ocean City", "Takoma Park", "Silver Spring"]
}

function populateCityByState(){
    
    //Populate cities based on state
    $('#firstSelect option:selected').each(function(){
       
        for(var c = 0; c < stateToCity[this.value].length; c++){
                    
            $('#secondSelect')
                .append($("<option>")
                .attr('value', this.value) 
                .text(stateToCity[this.value][c]));
        }
    })

    //Remove cities from the non selected state
    $('#firstSelect option:not(:selected)').each(function(){
        
        var optionsToBeRemoved = this.value;

        $("#secondSelect option[value='" + optionsToBeRemoved + "']").remove();
        
    })
}
function populateStates(){
   
    for(var state in stateToCity){
        $('#firstSelect').append($("<option>").attr('value', state).text(state));
    }
}

// #4 challange - populate the form with more checkboxes during a selection of a checkbox 
function populateBasedOnSelection(){
    
    //COnstruct checkboxes based on choice
    if($('#socialMedia').prop('checked') == true){
        $('#socialMediaCheckBox')
            .append("</br> <label for='fb'/></label> Facebook <input type='checkbox' value='facebook' id='fb'/>");
        $('#socialMediaCheckBox')
            .append("<label for='quo'/></label> Quora <input type='checkbox' value='quora' id='quo'/>");
        $('#socialMediaCheckBox')
            .append("<label for='lin'/></label> Linkedin <input type='checkbox' value='linkedin' id='lin'/>");
    } 
    else{
        $('#socialMediaCheckBox').html("");
    }
}

// #5 challenge - change format of phone number to acceptable
function changePhoneNumberToAcceptableFormat(){
    
    var justDigits = $('#phone').val()
                     .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    
    //If digits is not equal to 10
    if(justDigits.length != 10){
        $('#digitHint').css("display", "block");
    } 
    else {
        //hide the hint
        $('#digitHint').css("display", "none");

        //Format the phone number
        var formattedDigits = justDigits.substr(0, 3) + '-' +
                            justDigits.substr(3, 3) + '-' +
                            justDigits.substr(6, 4);

        //Set value of input field                      
        $('#phone').val(formattedDigits); 
    }             
}

// #6 challenge - reject submission if one of phone and email are not submitted
function checkIfOneOfPhoneOrEmailIsFilledOut(event){
    
    var phone = $('#phone').val();
    var email = $('#email').val();

    if(phone.length <= 0 && email.length <= 0){
        $('#phoneHint').css("display", "block");
        event.preventDefault();
    } 
}


window.onload = function(){
    
    $('#pwd2').keyup(checkIfPasswordsMatch);
    $('#bio').keyup(countDownNumberOfCharactersLeftToType);
    $('#socialMedia').click(populateBasedOnSelection);
    $('#submitBtn').click(checkIfOneOfPhoneOrEmailIsFilledOut);   
    
    populateStates();
    
    $('#firstSelect').click(populateCityByState);
    $('#phone').blur(changePhoneNumberToAcceptableFormat);
}
