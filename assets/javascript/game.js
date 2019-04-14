//Define relevant variables and arrays to capture data
var answers = ["a", "b", "c", "d", "e", "f", "g"];
var guessed = [];
var targetletter = "b"; 
var totalGuesses = 10;
var totalGuessesLeft = 10;
var wins = 0;
var losses = 0;

//Functions
//Tracks & Updates Guesses
var RefreshGuess = function() {
    document.getElementById("guessesAttempted").innerHTML = guessed.join(", ");
};

//Tracks and updates Guesses remaining
var RefreshGuessesRemaining = function(){
    document.getElementById("guessesLeft").innerHTML = totalGuessesLeft;
};

//Creates a letter to guess
var newLettertoGuess = function(){
    this.targetletter = this.answers[Math.floor(Math.random() * this.answers.length)];
};

//Resets Game
var reset = function() {
    totalGuesses = 15;
    totalGuessesLeft = 15;
    guessed = [];
    RefreshGuess();
    RefreshGuessesRemaining();
    newLettertoGuess();
}

//Reset Page to default by calling functions to start 
RefreshGuessesRemaining();
newLettertoGuess();

//Look in console for the first right answer! or just watch 'targetletter'
console.log(targetletter);


//Capturing Keyboard events
document.onkeyup = function(event){
    totalGuessesLeft--;
    var guessletter = String.fromCharCode(event.keyCode).toLowerCase();
    guessed.push(guessletter);

    //Call functions to update page..
    RefreshGuess();
    RefreshGuessesRemaining();

    // Checks if letter = targetletter and updates wins HTML, then the game loops back to the beginning.
    if (guessletter === targetletter) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        reset();
    }

    if (totalGuessesLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        reset();
    }
};