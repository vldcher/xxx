export function evaluate(matrix, rate) {
    let arr = [];
    let sum = matrix.totalSum();
    for(let i = 0; i < matrix.size; i++){
        for(let j = 0; j < matrix.size; j++){
           arr.push(matrix.getValue(i,j));
        }
     }
    // arr = arr.sort((a,b)=>a-b);
    // console.log(arr)
    // let acc = 0;
    // let i = 0
    // for (i = 0; i <matrix.size * matrix.size && i < acc / sum < rate; ++i) {
    //     acc += arr[i];
    // }
    // return (matrix.size * matrix.size - i) + 1;

       let min = arr[0];
       let max = 0;
        let rateSum = 0;
        let arrMax = [];
        let counter = 1;
        for (let i = 1; i < arr.length; ++i) {
            if (arr[i] > max && (rateSum += arr[i]) < rate) {
                max = arr[i];
                arrMax.push(max);
                counter++;
            }
        }
        console.log(counter)
    return counter;
}