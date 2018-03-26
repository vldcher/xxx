import { Engine } from './engine';
import { UI } from './ui';

class Controller {
  constructor(UI, engine) {
    this.UI = UI;
    this.Engine = engine;
    this.totalAmount = 0;
    this.level = 0;
    this.n = engine.clicks;
  }

  init() {
    let cellItemArray = document.querySelectorAll('.gold');
    cellItemArray.forEach((item, i) => {
      item.innerHTML = '';

    });

    let matrix = this.Engine.getMatrix();
    this.UI.showEntireMatrix(matrix);
    this.UI.showGoal(this.Engine.getSuccessRate());
    this.UI.showCountOfClicks(this.n);
    this.level+=1;
    this.UI.showCurrentLevel(this.level);
    alert('Are you ready?');
    this.print()
  }

  print(){
    let cellItemArray = document.querySelectorAll('.cell-item');
    cellItemArray.forEach((item, i) => {
      let col = item.getAttribute('data-col');
    let row = item.getAttribute('data-row');
    item.addEventListener('click', () => { this.openCellHandler(col,row) })
  })
  }

  openCellHandler(i, j) {
    let isOpen = UI.isMatrixOpen; //default - false
    if (isOpen) {
      return;
    }
	
    this.n--; //count user's possible click

    if(this.totalAmount < this.Engine.getSuccessRate()){
      console.log('here')
      if (this.n < 0) {
        this.UI.levelFailed();
      }
    }


    let matrix = this.Engine.getMatrix();
    let amount = matrix.getValue(i, j);
    this.totalAmount += amount;

    if (this.totalAmount > this.Engine.getSuccessRate()) {
      this.UI.openCell(i, j, amount, this.totalAmount); //open cell
      this.UI.showScore(this.totalAmount);
      this.level+=1;
      this.UI.levelSuccess(this.level);
      this.totalAmount = 0;
      // this.Engine.startNextLevel();
      // let matrix = this.Engine.getMatrix();
      // this.UI.showEntireMatrix(matrix);
      this.init();
    } else {

      this.UI.openCell(i, j, amount, this.totalAmount); //open cell
      this.UI.showScore(this.totalAmount);
      //this.UI.showEntireMatrix(matrix);
    }
  }
}

let c = new Controller(new UI(), new Engine());
document
  .querySelector('.startButton')
  .addEventListener('click', () => c.init());
