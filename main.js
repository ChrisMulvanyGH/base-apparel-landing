/* Get the required form elements */
var myForm = document.querySelector('.subForm');
var myField = document.querySelector('.emailAddr');
var myBtn = document.querySelector('.subBtn');
var myMsg = document.querySelector('.msg');
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
        myMsg.classList.add('msg-show');
        myMsg.innerHTML = "Please enter a valid email address!";
        myForm.reset();
    }
});
