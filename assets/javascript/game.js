

var letter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var randomLetter = letter[Math.floor(Math.random() * letter.length)];
console.log(randomLetter);

var wins = 0;
var losses = 0;
var guessesLeft = 3;
var guessesSoFar = 0;
var guessedLetter = [];



document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById("losses").innerHTML = "Losses: " + losses;
document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
document.getElementById("guessesSoFar").innerHTML = "Your Guesses So Far: " + guessesSoFar;

	function reset(){
	wins=0;
	losses=0;
	guessesLeft=0;
	guessesSoFar=0;

	};



	onkeyup=function(event){
	var playerGuess = event.key.toLowerCase();
	guessesLeft--;
	document.getElementById("guessesLeft").innerHTML = "Gusses Left: " + guessesLeft;
	/*This will dynamically update HTML"*/


	if (guessesLeft > 0 && playerGuess == randomLetter){
		wins++;
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		reset();
	}
	if (guessesLeft == 0){
		losses++;
		document.getElementById("losses").innerHTML = "Losses: " + losses;
		reset();
	}
	
	}


















