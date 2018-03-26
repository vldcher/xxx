import {Randomizer} from './randomizer';
import {GameField} from "./gamefield";
import {evaluate} from "./clicksevaluator";

export class Engine{
    constructor() {
        this.init(0.2);
    }

    getSuccessRate(){
        return Math.ceil(this.matrix.totalSum() * this.currentSuccessRate)
    }

    startNextLevel() {
        let nsr  = this.currentSuccessRate + 0.05;
        this.init(nsr);
    }

    getMatrix(){
        return this.matrix;
    }

    init(sr) {
        this.currentSuccessRate = sr;
        this.randomizer = new Randomizer();
        this.matrix = new GameField(5);
        this.randomizer.fillMatrix(this.matrix, 10, 1000);
        this.clicks = evaluate(this.matrix, this.getSuccessRate());
    }

}