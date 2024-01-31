/*** File to validate booking form submmision
 * 
 * @author Javier Bastande 
 */


window.addEventListener("DOMContentLoaded", () => {

    const reservationForm = document.getElementById("reservation-form");
    // catch input values and eliminate any white spaces

    const fullName = document.getElementById("fullName");
    const partySize = document.getElementById("partySize");
    const email = document.getElementById("email");
    const prefix = document.getElementById("prefix");
    const phone = document.getElementById("phone");
    const validAge = document.getElementById("checkbox-label");
    const startDate = document.getElementById("startDate");
    const startTime = document.getElementById("timeDropdown");
    let errorMessage = "";


    /** START RESERVATION FORM VALIDATION */
    reservationForm.addEventListener("submit", function (event) {

        validateForm();
        let countSuccessfulInputs = document.getElementsByClassName("success");
        console.log(countSuccessfulInputs.length);

        if (countSuccessfulInputs.length === 6) {
            alert("Thanks for booking a table with us! : )")
            reservationForm.submit();
        } else {
            event.preventDefault();
            event.stopPropagation();
        }
    }, false);


    /**
     *Function initializes form inputs validation
     */
    function validateForm() {
        // catch input values and eliminate any white spaces
        const nameValue = fullName.value.trim();
        const emailValue = email.value.trim();
        const partySizeValue = partySize.value;
        const phoneValue = phone.value.trim();
        const startDateValue = startDate.value;
        const startTimeValue = startTime.innerText;
        const checkbox = document.getElementById("checkbox");
        checkInput(startDateValue, startTimeValue, nameValue, emailValue, partySizeValue, phoneValue, checkbox)

    }

    /***
     * Check blank inputs and legth of inputs
     */
    function checkInput(startDateValue, startTimeValue, nameValue, emailValue, partySizeValue, phoneValue, checkbox) {

        if (startDateValue === "") {
            errorMessage = "Select a date";
            showErrorMessage(startDate, errorMessage)
            setErrorClass(startDate);
        } else {
            setSuccesClass(startDate);
        }

        if (startTimeValue === "00:00") {
            errorMessage = "Select start time";
            showErrorMessage(startTime, errorMessage)
            setErrorClass(startTime);
        } else {
            setSuccesClass(startTime);
        }

        if (nameValue === "") {
            errorMessage = "This field cannot be empty";
            showErrorMessage(fullName, errorMessage)
            setErrorClass(fullName);
        } else {
            setSuccesClass(fullName);
        }

        if (partySizeValue === "") {
            errorMessage = "This field cannot be empty";
            showErrorMessage(partySize, errorMessage);
            setErrorClass(partySize);
        } else if (partySizeValue === 0 || partySizeValue >= 10) {
            errorMessage = "Party size must be of at least 1, or a max of 10"
            showErrorMessage(partySize, errorMessage);
        } else {
            setSuccesClass(partySize);
        }

        if (emailValue === "") {
            errorMessage = "This field cannot be empty";
            showErrorMessage(email, errorMessage);
            setErrorClass(email);
        } else {
            // let isValid = validEmailFormat(emailValue);
            validEmailFormat(emailValue);
        }

        if (phoneValue === "") {
            errorMessage = "This field cannot be empty";
            showErrorMessage(phone, errorMessage);
            setErrorClass(phone);
        } else if (phoneValue.length < 9 || phoneValue.length > 10) {
            errorMessage = "Enter a valid number";
            showErrorMessage(phone, errorMessage);
            setErrorClass(phone);
        } else {
            setSuccesClass(phone);
        }

        if (checkbox.checked) {
            validAge.classList.remove("redText");
        } else {
            validAge.classList.add("redText");
        }

    }

    /**
     * Function displays error message withing the element scope
     * @param {DOM element} input 
     * @param {error message} message 
     */
    function showErrorMessage(input, message) {
        input.setAttribute("placeholder", message);
    }

    /**
     * Check user email entered matches valid format
     * @param {DOM form element} input 
     */
    function validEmailFormat(emailValue) {
        errorMessage = "Please enter a valid email caramba@whatever.domain'";
        let wrongEmail = document.getElementById("email");

        // let isValid = false;
        const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (emailValue.match(validRegex)) {
            wrongEmail.classList.remove("wrongEmail");
            setSuccesClass(email);
        } else {
            // clear input
            wrongEmail.value = "";
            wrongEmail.setAttribute("placeholder", "Enter a valid email e.g 'sipmen@sipem.com'");
            wrongEmail.classList.add("wrongEmail");
        }
    }

    /**
     * Add customed class to element passed in 
     * to highlight wrong inputs to the user
     * @param {DOM form element} input 
     */
    function setErrorClass(input) {
        input.nextElementSibling.classList.remove("inputBaseLine");
        input.nextElementSibling.classList.remove("success");
        input.nextElementSibling.classList.add("inputError");
        input.classList.add("redPlaceholder")

    }

    /**
     *  * Add customed class to element passed in
     * to highlight reset wrong inputs back to success
     * @param {DOM form element} input 
     */
    function setSuccesClass(input) {
        input.classList.remove("color")
        input.nextElementSibling.classList.remove("inputError")
        input.nextElementSibling.classList.add("inputBaseLine");
        input.nextElementSibling.classList.add("success");
    }

});