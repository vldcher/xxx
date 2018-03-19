import {Randomizer} from 'js/randomizer';
import {GameField} from "./gamefield";
import {evaluate} from "./clicksevaluator";

export class Engine{
    constructor() {
        this.randomizer = new Randomizer();
        this.matrix = new GameField(5);
        this.randomizer.fillMatrix(this.matrix);
        this.clicks = evaluate(this.matrix);
    }


}