var guessedLetter = process.argv[2];
console.log(guessedLetter);

var Letter = function(letter, guessed){
    this.letter = letter;
    this.guessed = false;
    this.returnChar = function () {
        if(this.guessed === false){
            this.letter = "-";
        }else{this.letter = letter};
        };
    this.guess = function (letter) {
        if(guessedLetter === this.letter){
            this.guessed = true;
            console.log("correct")
        }else{
            console.log("wrong");
        };
    };
};

module.exports = Letter;