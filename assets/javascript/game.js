var letters = ["a", "b", "c"];

// This array will hold what we guess
var guessedLetters = [];

// This variable will be randomly assigned one of the three letters
var letterToGuess = null;


// initialize counter for wins/losses
var wins = 0;
var losses = 0;

// Function will be called when we reset everything
var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};


// This function will capture the keyboard clicks.
// document.onkeydown = function(event) {
//   // It's going to reduce the guesses by one
//   guessesLeft--;

//   // Lowercase the letter
//   var letter = String.fromCharCode(event.which).toLowerCase();

//   // Then add the guess to the guessedLetters array
//   guessedLetters.push(letter);


  // If anwer is correct add one to wins
  if (letter === letterToGuess) {

    // If there is then we win and we'll update the HTML to display the win.
    wins++;
    document.querySelector("#wins").innerHTML = wins;

    // Then we'll reset the game
    reset();
  }

  // if answer is wrong add one to loss
  if (guessesLeft === 0) {

    // Then we will loss and we'll update the HTML to display the loss.
    losses++;
    document.querySelector("#losses").innerHTML = losses;

    // Then we'll call the reset.
    reset();
  }
};