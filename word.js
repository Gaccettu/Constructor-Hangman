var Letter = require("./letter.js");

var wordArr = [];

var Word = function(selWord){
    this.wordArr = selWord.split('');    
    for(i=0; i < this.wordArr.length; i ++){
        this.wordArr[i] = new Letter (this.wordArr[i]);
    };
    this.returnLetters = function (){
        for(i=0; i < this.wordArr.length; i ++){
            this.wordArr[i].returnChar();
        };
        console.log(this.wordArr.map(function(le){
            return le.display;
        }).join('')
        );
    };
    this.checkLetters = function (){
        for(i=0; i < this.wordArr.length; i ++){
            this.wordArr[i].guess();
        };
    };
};

module.exports = Word;