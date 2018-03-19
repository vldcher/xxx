import {Engine} from './index'

class Controller {
    constructor(UI, engine) {
        this.UI = UI;
        this.Engine = engine;
        let totalAmount = 0;
        let level = 0;
    }

    init() {
        let start = this.UI.levelStart(matrix);
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
        if (totalAmount > this.Engine.getSuccessRate()) {
            UI.levelSuccess();
            Engine.startNextLevel();

        }
        let matrix = this.Engine.getMatrix();
        let amount = matrix.getValue(i,j);
        totalAmount += amount;
        UI.openCell(i, j, amount, totalAmount); //open cell
    }
}

const controller = new Controller(new UI(), new Engine());
