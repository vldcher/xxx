class Controller {
    constructor(){
        let UI =  new UI();
        let EngineUI = new Engine();
        let totalAmount = 0;

    }

    init() {
        let start = UI.levelStart(matrix);
    }

    openCellHandler(i,j){
        let isOpen = UI.isMatrixOpen;           //default - false
        if(isOpen){
            return;
        }
        N--;            //count user's possible click
        if (N==0){
            UI.levelFailed()
        }
        let matrix = EngineUI.getMatrix();
        let amount = matrix[i,j];
        totalAmount+=amount;
        UI.openCell(i, j, amount, totalAmount);     //open cell

    }
};

export Controller;