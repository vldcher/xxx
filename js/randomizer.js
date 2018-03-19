export class Randomizer{
    fillMatrix(matrix, max, min){
        let len = matrix.length;
        for (let i = 0; i < len; i++){
            for (let j = 0; j < len; j++) {
                matrix.setValue(i,j, Math.random() * (max - min) + min);
            }
        }
        return matrix;
    }
}