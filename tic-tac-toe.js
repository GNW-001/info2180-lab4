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
});

let board = ['', '', '', '', '', '', '', '', ''];
let turn = 0;

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
	turn ++;
}
