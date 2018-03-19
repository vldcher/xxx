
let N = 10;
let totalAmount = 0;

class Engine {

    getMatrix(){
        let mass = [[1,2,3],[4,5,6],[7,8,9]];
       return mass
    }
}

class Controller {
    constructor(){
        // let UI =  new UI();
        let EngineUI = new Engine();

    }

    init() {
        // let start = UI.levelStart(matrix);
    }

    openCellHandler(i,j){
        let isOpen = UI.matrixOpen();
        if(isOpen){
            return;
        }
        N--;
        if (N==0){
            UI.levelFailed()
        }
        let matrix = EngineUI.getMatrix();
        let amount = matrix[i,j];
        totalAmount+=amount;
        UI.openCell(i, j, amount, totalAmount);

    }
}

// const EngineK = new Engine();
// console.log(EngineK.getMatrix())
const ControllerUI = new Controller();
ControllerUI.init();