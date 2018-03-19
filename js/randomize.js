function randomize(a, max, min) {
    let matrix = [];
    for (let i = 0; i < a; i++){
        for (let j = 0; j < a; j++) {
            matrix[i][j] =  Math.random() * (max - min) + min;
        }
    }
    return matrix;
}
