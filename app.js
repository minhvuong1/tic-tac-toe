// HTML Elements
var status = document.querySelector('.status');
var resetBtn = document.querySelector('.reset');
var instructionsBtn = document.querySelector('.instructions');
var modal = document.querySelector('.modal');
var closeModalBtn = document.querySelector('.close');
var playersTurnDisplay = document.querySelector('.players-turn')
var cellDivs = document.querySelectorAll('.game-cell');


// Game variables
var xIsNext = true;

// Functions
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

    // Check for winner
}



// Event Handlers
var handleReset = function(event) {
    console.log(event);
}

var handleCellClick = function(event) {
    var classList = event.target.classList;
    var location = classList[1];
    
    // If the cell already active, exit func so cell can't be clicked twice
    if (classList[2] === 'o' || classList[2] === 'x') {
        return; 
    }

    // If 'x' is next then change to 'o' then switch turns (vice versa)
    if (xIsNext) {
        classList.add('o');
        xIsNext = !xIsNext;
        playersTurnDisplay.textContent = 'X'
    } else {
        classList.add('x');
        xIsNext = !xIsNext;
        playersTurnDisplay.textContent = 'O'
    }
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