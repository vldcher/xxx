export class UI {
  constructor() {
    this.isMatrixOpen = false;
    this.TIME = 2000;
    this.startButton = document.querySelector('.startButton');
    this.nextButton = document.querySelector('.nextButton');
    this.matrixCells = Array.from(document.querySelectorAll('.cell-item'));
  }

  levelStart(level) {
    // get current level
    // this.startButton.disabled = true;
    // this.nextButton.style.display = none;
    alert('start new level');
  }

  levelSuccess(level) {
    alert('go to the nex level');
     this.showCurrentLevel(level);
      // this.showGoal('');
      // this.showScore('');
      // this.showCountOfClicks('');
      this.levelStart();
    // this.nextButton.style.display = block;
  }

  levelFailed() {
    alert('you are failed, try again');
    this.startButton.disabled = false;
    this.nextButton.style.display = none;
  };


  openCell(i, j, amount, totalAmount) {
    // i, j - box address, amount - gold in box, totalAmount - sum of golg from open boxes
	let cellItemArray = document.querySelectorAll('.cell-item');
	  cellItemArray.forEach((item) => {
		  let col = item.getAttribute('data-col');
		  let row = item.getAttribute('data-row');
			if(col==i && row==j){
				item.removeAttribute('class');
				item.setAttribute('class','cell-item rotateRing');
                setTimeout(() => {
                    item.style.background = 'none';
                }, 500);
				setTimeout(() => {
					item.childNodes[0].style.display = 'block';
					item.childNodes[0].style.transform = 'rotate(180deg)';
				}, 600)
			}
	  })
  };




  showEntireMatrix(matrix){
    //show matrix at start and close it for play
    try {
      this.matrixCells.forEach((element, index) => {
        element.innerHTML = `<p class="gold"> ${matrix.getValue(
            Math.floor(index / matrix.size),
            index % matrix.size
        )} </p>`;
         element.addEventListener('click', () => {});
      });
    } catch (e) {}
    this.isMatrixOpen = true;

    setTimeout(() => {
        this.isMatrixOpen = false;
        document
            .querySelectorAll('.gold')
            .forEach((item) => {
                item.style.display = 'none';
                // item.parentNode.removeAttribute('class');
                // item.parentNode.setAttribute('class','cell-item background');
                console.log(item)
            })
    }, this.TIME);
  }

  showGoal(goal) {
    document.querySelector('.goal-value').innerHTML = goal;
  }

  showCountOfClicks(clicks){
      document.querySelector('.clicks-value').innerHTML = clicks;
  }

  showCurrentLevel(level){
      document.querySelector('.level-value').innerHTML = level;
  }

  showScore(score){
      document.querySelector('.score-value').innerHTML = score;
  }
}
