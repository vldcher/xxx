import {Engine} from './engine';
import {UI} from './ui';

class Controller {
    constructor(UI, engine) {
        this.UI = UI;
        this.Engine = engine;
        this.totalAmount = 0;
        this.level = 0;
    }

    init() {
        let start = this.UI.levelStart(this.level);
        let matrix = this.Engine.getMatrix();
        this.UI.showEntireMatrix(matrix);
    }

    openCellHandler(i, j) {
        let isOpen = UI.isMatrixOpen; //default - false
        if (isOpen) {
            return;
        }

        N--; //count user's possible click
        if (N < 1) {
            UI.levelFailed();
        }
        if (this.totalAmount > this.Engine.getSuccessRate()) {
            UI.levelSuccess();
            this.totalAmount = 0;
            Engine.startNextLevel();
            let matrix = Engine.getMatrix();
            UI.showEntireMatrix(matrix);
        } else{
            let matrix = this.Engine.getMatrix();
            let amount = matrix.getValue(i,j);
            this.totalAmount += amount;
            UI.openCell(i, j, amount, this.totalAmount); //open cell
            UI.showEntireMatrix(matrix);
        }

    }
}

let c = new Controller(new UI(), new Engine());
document.querySelector('.startButton').addEventListener('click', ()=>c.init());
