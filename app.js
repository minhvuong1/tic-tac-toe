var status = document.querySelector('.status');
var resetBtn = document.querySelector('.reset');
var instructionsBtn = document.querySelector('.instructions');
var modal = document.querySelector('.modal');
var closeModalBtn = document.querySelector('.close');
var playersTurnDisplay = document.querySelector('.players-turn');
var nextPlayerDisplay = document.querySelector('.next-player');
var cellDivs = document.querySelectorAll('.game-cell');

var gameRunning = true;
var xIsNext = true;
var winner = null;
var xSymbol = '✖';
var oSymbol = '✪';

var convertLetter = (letter) => letter === 'x' ? xSymbol : oSymbol; 

var checkForWinner = function(letter) {
    gameRunning = false;
    winner = letter;
    nextPlayerDisplay.classList.add('next-player');
    if (winner === 'x') {
        nextPlayerDisplay.classList.add('x-winner');
        nextPlayerDisplay.textContent = `${convertLetter(letter)} HAS WON!`;
        nextPlayerDisplay.style.color = 'rgb(255, 196, 40)';
    } else {
        nextPlayerDisplay.textContent = `${convertLetter(letter)} HAS WON!`;
        nextPlayerDisplay.style.color = 'white';
    }
}

var checkGameStatus = function() {
    // Check whether the cell is a 'x' or 'o'
    var topLeft = cellDivs[0].classList[2]; 
    var topMiddle = cellDivs[1].classList[2];
    var topRight = cellDivs[2].classList[2];
    var middleLeft = cellDivs[3].classList[2];
    var middleMiddle = cellDivs[4].classList[2];
    var middleRight = cellDivs[5].classList[2];
    var bottomLeft = cellDivs[6].classList[2];
    var bottomMiddle = cellDivs[7].classList[2];
    var bottomRight = cellDivs[8].classList[2];
    console.log(topLeft, topMiddle, topRight, middleLeft, middleMiddle, middleRight, bottomLeft, bottomMiddle, bottomRight);

    // Check for winner - winning possibilities
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        checkForWinner(topLeft);
    } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
        checkForWinner(middleLeft);
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        checkForWinner(bottomLeft);
    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
        checkForWinner(topLeft);
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        checkForWinner(topMiddle);
    } else if (topRight && topRight === middleRight && topRight === bottomRight) {
        checkForWinner(topRight);
    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
        checkForWinner(topLeft);
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        checkForWinner(topRight);
    }
}

// Event Handlers
var handleCellClick = function(event) {
    if (gameRunning) {
        var classList = event.target.classList;
        var location = classList[1];
        
        if (classList[2] === 'o' || classList[2] === 'x') {
            return;  // If the cell has been clicked, exit func so cell can't be clicked twice

        }
    
        // If 'x' is next then change to 'o' then switch turns (vice versa)
        if (xIsNext) {
            nextPlayerDisplay.innerHTML = '<p>PLAYER <span class="players-turn">✖</span> IS NEXT </p>';
            nextPlayerDisplay.style.color = 'rgb(34, 34, 34)';
            classList.add('o');
            xIsNext = false;
            checkGameStatus();
        } else {
            nextPlayerDisplay.innerHTML = '<p>PLAYER <span class="players-turn">✪</span> IS NEXT </p>';
            nextPlayerDisplay.style.color = 'rgb(34, 34, 34)';
            classList.add('x');
            xIsNext = true;
            checkGameStatus();
        }
    }
}

var handleReset = function(event) {
    gameRunning = true;
    cellDivs.forEach(elem => elem.classList.remove('x','o'));
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





















 

/* 
Create an HTML page that display's a Tic Tac Toe grid
Ask for player one's name (use prompts or HTML Form)
Ask for player two's name (use prompts or HTML Form)
Display a message on the page that says "Joe's Turn" (or whatever player one's name is)
Let "Joe" take his turn by clicking on a square in the grid
Mark it with an X (or O)
Display a message on the page that says "Sue's Turn" (or whatever player two's name is)
Let "Sue" take her turn by clicking on a square in the grid
Mark it with an O (or X)
Continue alternating until there is a winner or a tie
Display a message declaring the winner (or tie)
Allow the user to Play Again (without re-entering their names) if they'd like
Users should not be able to click in a square that has already been marked
*/