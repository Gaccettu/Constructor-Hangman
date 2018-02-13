var Word = require("./word.js");
var inquirer = require("inquirer");
var availableWords = ["rick","morty", "beth", "jerry", "summer"];

var newWord = availableWords[Math.floor(Math.random() * 4)];

var selWord = new Word (newWord);

var remainingGuesses = 7;
var corlet = false;


var hangmanGame = function () {
inquirer.prompt([
    {
        name: "guess",
        message: "Guess a letter"
    }
]).then(function(selection){
    guessedLetter = selection.guess;
    corlet = false;
    console.log("You guessed the letter " + guessedLetter);
    selWord.checkLetters();
    var correctGuesses = newWord.split('').length;
    for(i=0; i < newWord.length; i++){
        if(selWord.wordArr[i].guessed === true){
            correctGuesses --;
            corlet = true;
        }
    };
    if(corlet === false){
        remainingGuesses --;
    };

    selWord.returnLetters();
    console.log("You have " + remainingGuesses + " guesses remaining");
    if(correctGuesses > 0 && remainingGuesses > 0){
    hangmanGame();
    };

});
};
hangmanGame();

