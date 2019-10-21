window.addEventListener('DOMContentLoaded', (event) => {
	var i;
	var i2 = 0;
	var sheet = document.getElementsByTagName("div");
	for (i = 3; i < 12; i++) {
		sheet[i].setAttribute("class", "square");
		sheet[i].setAttribute("id", "grid".concat(i2));
		i2++;
	}
	addCellClickListener();
	addHover();
	let replayButton = document.querySelector('.btn');
	replayButton.addEventListener('click', resetGame);

});

let turn = 0;
let win = 0;



function addCellClickListener() {
	var cells = document.getElementsByClassName("square");
	for (var i3 = 0; i3 < cells.length; i3++) {
		cells[i3].addEventListener("click", placeMark);
	}
}

function addHover() {
	var cells = document.getElementsByClassName("square");
	for (var i3 = 0; i3 < cells.length; i3++) {
		cells[i3].onmouseover = function() {
			this.classList.add("hover");
		}
		cells[i3].onmouseout = function() {
			this.classList.remove("hover");
		}
	}
}

function placeMark() {
	var temp = this.innerText;
	if (temp == '') {
		if (turn%2 == 0 ) {
			this.innerHTML = "X";
			this.classList.add("X");
		}
		else {
			this.innerHTML = "O";
			this.classList.add("O");
		}
		this.removeEventListener("click", placeMark);
	}
	else {
		return;
	}
	checkWinner();
	turn ++;
}

function checkWinner() {
	if ((getGrid(0) == 'X' && getGrid(1) == 'X' && getGrid(2) == 'X') ||
	(getGrid(3) == 'X' && getGrid(4) == 'X' && getGrid(5) == 'X') ||
	(getGrid(6) == 'X' && getGrid(7) == 'X' && getGrid(8) == 'X') ||
	(getGrid(0) == 'X' && getGrid(3) == 'X' && getGrid(6) == 'X') ||
	(getGrid(1) == 'X' && getGrid(4) == 'X' && getGrid(7) == 'X') ||
	(getGrid(2) == 'X' && getGrid(5) == 'X' && getGrid(8) == 'X') ||
	(getGrid(0) == 'X' && getGrid(4) == 'X' && getGrid(8) == 'X') ||
	(getGrid(2) == 'X' && getGrid(4) == 'X' && getGrid(6) == 'X'))
	{
		document.getElementById("status").innerHTML = 'Congratulations! X is the Winner!';
		win = 1;
	}
	if ((getGrid(0) == 'O' && getGrid(1) == 'O' && getGrid(2) == 'O') ||
	(getGrid(3) == 'O' && getGrid(4) == 'O' && getGrid(5) == 'O') ||
	(getGrid(6) == 'O' && getGrid(7) == 'O' && getGrid(8) == 'O') ||
	(getGrid(0) == 'O' && getGrid(3) == 'O' && getGrid(6) == 'O') ||
	(getGrid(1) == 'O' && getGrid(4) == 'O' && getGrid(7) == 'O') ||
	(getGrid(2) == 'O' && getGrid(5) == 'O' && getGrid(8) == 'O') ||
	(getGrid(0) == 'O' && getGrid(4) == 'O' && getGrid(8) == 'O') ||
	(getGrid(2) == 'O' && getGrid(4) == 'O' && getGrid(6) == 'O'))
	{
		document.getElementById("status").innerHTML = 'Congratulations! O is the Winner!';
		win = 1;
	}
	if (turn == 8 && win != 1) {
		document.getElementById("status").innerHTML = "It's a draw!";
	}

	return;
}

function getGrid(number) {
	let idee = 'grid'.concat(number);
    return document.getElementById(idee).innerText;
}


 function resetGame() {
	document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
	turn = 0;
	win = 0;
	var paper = document.getElementsByClassName("square");
	for (var i4 = 0; i4 < paper.length; i4++) {
		paper[i4].innerHTML = "";
		paper[i4].classList.remove("X","O");
	}
	addCellClickListener();
}