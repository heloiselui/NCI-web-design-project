/*** File to handle user events on timepicker feature
 * The user selects a start time and the input gets the value selected
 * 
 * @author Javier Bastande 
 */

/*jshint esversion: 6 */


const timeSlot = document.getElementsByClassName("dropdown-item");
let timerPicker;
let timeSlotValue = "";

/***
 * Loop through a list of DOM elements, and listent to events on them
 */
for (let slot of timeSlot) {
    slot.addEventListener("click", (e) => {
        timeSlotValue = e.target.textContent;
        updateTimePicker(timeSlotValue);
    });
}

/***
 * Update timeSlot input value to the user's time choice
 */
function updateTimePicker(timePicked) {
    timerPicker = document.getElementById("timePicker");
    timerPicker.innerHTML = timePicked;
}
