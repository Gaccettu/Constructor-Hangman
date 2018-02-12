var Word = require("./word.js");
var inquirer = require("inquirer");
var availableWords = ["rick","morty", "beth", "jerry"];

var selWord = availableWords[Math.floor(Math.random() * 4)];

