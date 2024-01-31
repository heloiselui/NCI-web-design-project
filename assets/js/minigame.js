/*** File holds the random minigame start and logic
 * 
 * @author Bence Pillips
 */

/*jshint esversion: 6 */

// Error counter
var errors = 0;

// Array of cards
var cardArray = [
    "assets/images/Cosmopolitan",
    "assets/images/EspressoMartini",
    "assets/images/Margarita",
    "assets/images/Martini",
    "assets/images/MintJulep",
    "assets/images/WhiskeySour"
];

var cardSet;
var board = [];

var rows = 4;
var columns = 3;

var card1Selected;
var card2Selected;

var matchedPairs = 0;

// Upon Page load
window.onload = function () {
    shuffleCards();
    startGame();
};

// Function to shuffle the cards
function shuffleCards() {
    //two of each card from above array
    cardSet = cardArray.concat(cardArray);

    //shuffle cards
    for (let i = 0; i < cardSet.length; i++) {
        //get random index as integer
        let j = Math.floor(Math.random() * cardSet.length);

        //shuffle cards in the array above
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
}

// Function to start the game
function startGame() {
    // Calculate the width for the cards dynamically based on the number of columns and available space
    let boardWidth = document.getElementById("board").clientWidth;
    let cardWidth = (boardWidth - 20 - (columns + 1) * 10) / columns; // Subtracting paddings and margins

    //setting up board as 4 rows * 3 columns
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg);

            // Printing/Adding the following example to HTML element <img id="0-0" class="card" src="water.jpg">
            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = cardImg + ".webp";
            card.classList.add("card");
            card.style.width = cardWidth + "px"; // Set the calculated width
            card.addEventListener("click", selectCard);
            document.getElementById("board").append(card);
        }

        board.push(row);
    }

    // Get a second (1500ms = 1.5s) to see what cards are before they are flipped
    setTimeout(hideCards, 1500);
}

// Function to initially hide cards
function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "assets/images/logo.png";
        }
    }
}

// Function to handle card selection
function selectCard() {

    // This ensures that a card being clicked is not already revealed
    if (this.src.includes("logo")) {
        // First card is selected
        if (!card1Selected) {
            card1Selected = this;


            let coords = card1Selected.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card1Selected.src = board[r][c] + ".webp";
        }
        else if (!card2Selected && this != card1Selected) {
            card2Selected = this;

            // get co-ordinates of card as above
            let coords = card2Selected.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card2Selected.src = board[r][c] + ".webp";

            // Update board & show cards (for 1000ms or 1s)
            setTimeout(update, 1000);
        }
    }

}

// Function to update card matches
function update() {
    // Ensure cards are same & if not, flip back & adjust error counter
    if (card1Selected.src != card2Selected.src) {
        card1Selected.src = "assets/images/logo.png";
        card2Selected.src = "assets/images/logo.png";
        errors += 1;
        document.getElementById("errors").innerText = errors;
    } else {
        // Cards match - increment a counter for matched pairs
        matchedPairs++;
    }

    // Reset selected cards
    card1Selected = null;
    card2Selected = null;

    // Check if all pairs are matched
    if (matchedPairs === rows * columns / 2) {
        // All cards are matched - ask user to play again
        var playAgain = confirm("Congratulations! You've matched all the cards!\n\nDo you want to play again?");
        if (playAgain) {
            // If the user wants to play again, reset the game
            resetGame();
        } else {
            // If the user doesn't want to play again, display a message or perform other actions
            alert("Thank you for playing! Feel free to refresh the page to restart the game.");
        }
    }
}

// Function to reset the game
function resetGame() {
    // Reset variables
    errors = 0;
    matchedPairs = 0;

    // Clear the board & reset error counter
    document.getElementById("board").innerHTML = "";
    document.getElementById("errors").innerText = errors;

    // Restart the game by shuffling and starting again
    shuffleCards();
    startGame();
}