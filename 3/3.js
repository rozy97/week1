// TRANSPOSE MATRIX

const arr2D = [
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
];

// const transpose = arr => {
//     let returnValue = '';
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             returnValue += arr[j][i] + '  ';
//         }
//         returnValue += '\n';
//     }
//     return returnValue;
// }
// console.table(transpose(arr2D));

const transpose = arr => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = [];
        for (let j = 0; j < arr.length; j++) {
            result[i][j] = arr[j][i];
            
        }
        
    }
    return result;
}

console.table(transpose(arr2D));
