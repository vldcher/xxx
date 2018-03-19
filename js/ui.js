export class UI {

	constructor() {
		this.isMatrixOpen = false;
		this.TIME = 2000;
		this.startButton = document.querySelector('.startButton');
		this.nextButton = document.querySelector('.nextButton');
		this.matrixCells = Array.from(document.querySelectorAll('.cell-item'));
	}

	levelStart(level) { // get current level
		this.startButton.disabled = true;
		// this.nextButton.style.display = none;
		alert('start new level');
	}

	levelSuccess() {
		alert('go to the nex level');
		this.nextButton.style.display = block;
	}

	levelFailed() {
		alert('you are failed, try again');
		this.startButton.disabled = false;
		this.nextButton.style.display = none;
	}

	openCell(i, j, amount, totalAmount) { // i, j - box address, amount - gold in box, totalAmount - sum of golg from open boxes

	}

	onClick(e) {
		console.log(e.target.dataset)
		e.target.classList += 'rotateRing';
	}

	showEntireMatrix(matrix) { //show matrix at start and close it for play
		try {
            this.matrixCells.forEach((element, index) => {

                element.innerHTML = `<p class="gold"> ${matrix.getValue(Math.floor(index / matrix.size), index % matrix.size)} </p>`;
            	element.addEventListener('click',(e) => this.onClick(e))
            });
        }
        catch (e) {}
		this.isMatrixOpen = true;
		setTimeout(() => {
			this.isMatrixOpen = false;
			document.querySelector('.gold').style.display = none;
			}, this.TIME);
	}

}