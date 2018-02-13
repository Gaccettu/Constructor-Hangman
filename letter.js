var Letter = function(letter, display, guessed){
    this.letter = letter;
    this.display = display;
    this.guessed = false;
    this.returnChar = function () {
        if(this.guessed === false){
            this.display = "-";
        }else{this.display = letter};
        };
    this.guess = function (letter) {
        if(guessedLetter === this.letter){
            this.guessed = true;
        }
    };
};

module.exports = Letter;