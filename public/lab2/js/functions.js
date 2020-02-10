var randomNumber = Math.floor(Math.random()*99)+1;
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHigh = document.querySelector('#lowOrHigh');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton = document.querySelector('#reset');
resetButton.style.display= 'none';

function check(){
    var userGuess = Number(guessField.value);
    if(guessCount === 1){
        guessField.value = '';
        guessField.focus();
        return;
    }
    if(userGuess > 99){
        alert('Please choose a number ranging from 1 to 99!');
    }
    guesses.innerHTML += userGuess + ' ';
    if (userGuess === randomNumber){
        lastResult.innerHTML = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.innerHTML = '';
        setGameOver();
    } else if (guessCount === 7){
        lastResult.innerHTML = 'Sorry, you lost!';
        setGameOver();
    } else {
        lastResult.innerHTML = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber) {
            lowOrHigh.innerHTML = 'Last guess was too low!'; 
        } else if (userGuess > randomNumber) {
            lowOrHigh.innerHTML = 'Last guess was too high!';
        }
    }
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', check);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    resetButton.style.display= 'none';
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 99)+1;
}
            
            