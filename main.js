(function () {

    'use strict';

    /* Get the required form elements */
    const myForm = document.querySelector('.subForm');
    const myField = document.querySelector('.subForm__email');
    const myBtn = document.querySelector('.subForm__button');
    const myMsg = document.querySelector('.msg');
    const errIcon = document.querySelector('.subForm__error-icon');
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    // When the Submit button is clicked pass in the event
    myBtn.addEventListener('click', function (event) {
        event.preventDefault();

        // Test to see if field is empty or has content
        if (myField.value != "" && emailRegex.test(myField.value)) {

            myMsg.classList.add('msg-show');
            myMsg.innerHTML = "You have successfully subscribed!";
            myForm.reset();
        } else {
            errIcon.classList.add('icon-show');
            myMsg.classList.add('msg-show');
            myMsg.innerHTML = "Please enter a valid email address!";
            myField.focus();
        }
    });

})();