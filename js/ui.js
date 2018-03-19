export class UI {

	let startButton = document.querySelector('startButton');
	let nextButton = document.querySelector('nextButton');
	let matrixCells = Array.from(document.querySelectorAll('cell_itiem'));

	constructor() {
		this.isMatrixOpen = false;
		this.TIME = 2000;
	}

	levelStart(level) { // get current level
		startButton.disabled = true;
		nextButton.style.display = none;
		alert('start new level');
	}

	levelSuccess() {
		alert('go to the nex level');
		nextButton.style.display = block;
	}

	levelFailed() {
		alert('you are failed, try again');
		startButton.disabled = false;
		nextButton.style.display = none;
	}

	openCell(i, j, amount, totalAmount) { // i, j - box address, amount - gold in box, totalAmount - sum of golg from open boxes

	}

	showEntireMatrix(matrix) { //show matrix at start and close it for play
		this.isMatrixOpen = true;
		setTimeout(() => {this.isMatrixOpen = false;}, this.TIME);
	}
}