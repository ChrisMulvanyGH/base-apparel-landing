/* Get the required form elements */
var myForm = document.querySelector('.subForm');
var myField = document.querySelector('.subForm__email');
var myBtn = document.querySelector('.subForm__button');
var myMsg = document.querySelector('.msg');
var errIcon = document.querySelector('.subForm__error-icon');
var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

// When the Submit button is clicked pass in the event
myBtn.addEventListener('click', function(event){
    event.preventDefault();

    // Test to see if field is empty or has content
    if(myField.value != "" && emailRegex.test(myField.value))  {

        myMsg.classList.add('msg-show');
        myMsg.innerHTML = "You have successfully subscribed!";
        myForm.reset();
    }
    else
    {
        errIcon.classList.add('icon-show');
        myMsg.classList.add('msg-show');
        myMsg.innerHTML = "Please enter a valid email address!";
        myField.focus();
    }
});