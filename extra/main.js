var board = document.createElement('div');
board.setAttribute('id', 'board');
document.body.appendChild(board);
var cells = [];
for (var i = 0; i < 9; i++) {
    var cell = document.createElement('div');
    cell.setAttribute('id', 'cell' + i);
    cell.setAttribute('class', 'cell');
    board.appendChild(cell);
    cells.push(cell);
}
var turn = 'X';
var gameOver = false;
function checkForWin() {
    var winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (var i = 0; i < winningCombos.length; i++) {
        var combo = winningCombos[i];
        if (cells[combo[0]].innerHTML === turn &&
            cells[combo[1]].innerHTML === turn &&
            cells[combo[2]].innerHTML === turn) {
            gameOver = true;
            alert(turn + ' wins!');
        }
    }
}
function checkForTie() {
    for (var i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML === '') {
            return;
        }
    }
    gameOver = true;
    alert('Tie!');
}
function switchTurn() {
    if (turn === 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }
}
function handleClick(event) {
    if (gameOver) {
        return;
    }
    if (event.target.innerHTML === '') {
        event.target.innerHTML = turn;
        checkForWin();
        checkForTie();
        switchTurn();
    }
}
board.addEventListener('click', handleClick);

var ticTacToe = document.createElement('div');
ticTacToe.innerHTML = '<div class="container"> <div class="row"> <div class="col-xs-4"> <div class="box"></div> </div> <div class="col-xs-4"> <div class="box"></div> </div> <div class="col-xs-4"> <div class="box"></div> </div> </div> <div class="row"> <div class="col-xs-4"> <div class="box"></div> </div> <div class="col-xs-4"> <div class="box"></div> </div> <div class="col-xs-4"> <div class="box"></div> </div> </div> <div class="row"> <div class="col-xs-4"> <div class="box"></div> </div> <div class="col-xs-4"> <div class="box"></div> </div> <div class="col-xs-4"> <div class="box"></div> </div> </div> </div>';
document.body.appendChild(ticTacToe);