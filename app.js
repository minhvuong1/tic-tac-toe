var status = document.querySelector('.status');
var resetBtn = document.querySelector('.reset');
var instructionsBtn = document.querySelector('.instructions');
var modal = document.querySelector('.modal');
var closeModalBtn = document.querySelector('.close');
var nextPlayerDisplay = document.querySelector('.next-player');
var cellDivs = document.querySelectorAll('.game-cell');

var gameRunning = true;
var oIsNext = true;
var winner = null;
var xSymbol = '✖';
var oSymbol = '✪';

// Functions
var convertLetter = (letter) => letter === 'x' ? xSymbol : oSymbol; 

var checkForWinner = function(letter) {
    gameRunning = false;
    winner = letter;
    nextPlayerDisplay.classList.add('next-player');
    if (winner === 'x') {
        nextPlayerDisplay.textContent = `PLAYER ${convertLetter(letter)} HAS WON!`;
        nextPlayerDisplay.style.color = 'rgb(255, 196, 40)';
    } else {
        nextPlayerDisplay.textContent = `PLAYER ${convertLetter(letter)} HAS WON!`;
        nextPlayerDisplay.style.color = 'white';
    }
}

var checkGameStatus = function() {
    // Check whether the cell is a 'x' or 'o'
    var topLeft = cellDivs[0].classList[1]; 
    var topMiddle = cellDivs[1].classList[1];
    var topRight = cellDivs[2].classList[1];
    var middleLeft = cellDivs[3].classList[1];
    var middleMiddle = cellDivs[4].classList[1];
    var middleRight = cellDivs[5].classList[1];
    var bottomLeft = cellDivs[6].classList[1];
    var bottomMiddle = cellDivs[7].classList[1];
    var bottomRight = cellDivs[8].classList[1];

    // Check for winner - winning possibilities
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        checkForWinner(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        checkForWinner(middleLeft);
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[5].classList.add('won');
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        checkForWinner(bottomLeft);
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        checkForWinner(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[6].classList.add('won');
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        checkForWinner(topMiddle);
        cellDivs[1].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[7].classList.add('won');
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        checkForWinner(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        checkForWinner(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        checkForWinner(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[4].classList.add('won');
        cellDivs[6].classList.add('won');
    }
}

// Event Handlers
var handleCellClick = function(event) {
    if (gameRunning) {
        // If the cell already has an 'x' or 'o' exit function
        var targetClassList = event.target.classList;
        if (targetClassList[1] === 'o' || targetClassList[1] === 'x') { 
            return;  
        }
        // If 'o' is next then next target cell will be 'o' then switch turns
        if (oIsNext) {
            targetClassList.add('o');
            nextPlayerDisplay.innerHTML = '<p>PLAYER <span style="color: rgb(255, 198, 41);" class="players-turn">✖</span> IS NEXT </p>';
            nextPlayerDisplay.style.color = 'rgb(34, 34, 34)';
            oIsNext = !oIsNext;
            checkGameStatus();
        } else {
            targetClassList.add('x');
            oIsNext = !oIsNext;
            nextPlayerDisplay.innerHTML = '<p>PLAYER <span class="players-turn">✪</span> IS NEXT </p>';
            nextPlayerDisplay.style.color = 'rgb(34, 34, 34)';
            checkGameStatus();
        }
        // If all cells have been clicked and there is no winner then DRAW
        if (document.querySelectorAll('.o').length + document.querySelectorAll('.x').length === cellDivs.length && winner === null) {
            nextPlayerDisplay.textContent = 'DRAW';
        }
    }
}

var handleReset = function(event) {
    gameRunning = true;
    winner = null;
    oIsNext = true;
    cellDivs.forEach(elem => elem.classList.remove('x','o', 'won'));
    nextPlayerDisplay.innerHTML = '<p>PLAYER <span class="players-turn">✪</span> IS NEXT </p>';
    nextPlayerDisplay.style.color = 'rgb(34, 34, 34)';
}

// Event listeners
resetBtn.addEventListener('click', handleReset);
instructionsBtn.addEventListener('click', function() { modal.style.display = 'block'; });
closeModalBtn.addEventListener('click', function() { modal.style.display = "none"; });
cellDivs.forEach(elem => elem.addEventListener('click', handleCellClick));
window.onclick = function(event) {
    if (event.target == modal) { modal.style.display = "none"; }
  }
