/*** File to validate booking form submmision
 * 
 * @author Javier Bastande 
 */


const contactForm = document.querySelector("#contact #contact-form");
/**CONTACT FORM INPUTS */
const contactName = document.getElementById("contact-form-fullname");
const contactEmail = document.getElementById("contact-form-email");
const contactComment = document.getElementById("contact-form-comment");
let errorMessage = "";


/** START CONTACT FORM VALIDATION */
const validContact = (event) => {
    validateForm();
    let countSuccessfulInputs = document.getElementsByClassName("success");
    if (countSuccessfulInputs.length === 3) {
        alert("We'll get back to you as soon as posible! : )")
    } else {
        event.preventDefault();
        event.stopPropagation();
    }
}

/**
 *Function initializes form inputs validation
 */
function validateForm() {

    // catch input values and eliminate any white spaces
    const contactNameValue = contactName.value.trim();
    const contactEmailValue = contactEmail.value.trim();
    const contactCommentValue = contactComment.value;

    checkInput(contactNameValue
        , contactEmailValue, contactCommentValue);

}

function checkInput(contactNameValue, contactEmailValue, contactCommentValue) {
    if (contactNameValue === "") {
        errorMessage = "This field cannot be empty";
        showErrorMessage(contactName, errorMessage)
        setErrorClass(contactName);
    } else {
        setSuccesClass(contactName);
    }

    if (contactEmailValue === "") {
        errorMessage = "This field cannot be empty";
        showErrorMessage(contactEmail, errorMessage);
        setErrorClass(contactEmail);
    } else {
        validEmailFormat(contactEmailValue);
    }
    if (contactCommentValue.length === 0) {
        errorMessage = "Tell us how we can help";
        showErrorMessage(contactComment, errorMessage);
        setErrorClass(contactComment);
    } else {
        setSuccesClass(contactComment);
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
function validEmailFormat(contactEmailValue) {
    errorMessage = "Please enter a valid email caramba@whatever.domain'";
    let wrongEmail = document.getElementById("contact-form-email");

    // let isValid = false;
    const validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (contactEmailValue.match(validRegex)) {
        wrongEmail.classList.remove("wrongEmail");
        setSuccesClass(contactEmail);
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
    if (input === contactComment) {
        input.nextElementSibling.classList.remove("inputBaseLine");
        input.nextElementSibling.classList.remove("success");
        input.classList.add("redPlaceholder")
    } else {
        input.nextElementSibling.classList.remove("inputBaseLine");
        input.nextElementSibling.classList.remove("success");
        input.nextElementSibling.classList.add("inputError");
        input.classList.add("redPlaceholder")
    }


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

