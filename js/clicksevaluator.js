export function evaluate(matrix, rate) {
    let arr = [];
    let sum = matrix.totalSum();
    for(let i = 0; i < matrix.size; i++){
        for(let j = 0; j < matrix.size; j++){
           arr.push(matrix.getValue(i,j));
        }
    }
    arr = arr.sort((a,b)=>a-b);
    let acc = 0;
    let i = 0
    for (i = 0; i < matrix.size * matrix.size && i < acc / sum < rate; ++i) {
        acc += arr[i];
    }
    return (matrix.size * matrix.size - i) + 1;
}