// perkalian matrix

const matrixA = 
[
    [3, 4],
    [1, 2]
];
const matrixB =
[
    [7, 5],
    [6, 4]
];


const perkalianMatrix = (m1, m2) => {
    let result = [];
    if (m1[0].length == m2.length) {

    
        for (let i = 0; i < m1.length; i++) {
            result[i] = [];
            for (let j = 0; j < m2[0].length; j++) {
                let sum = 0;
                console.log(sum);
                for (let k = 0; k < m1[0].length; k++) {
                    // menjumlahkan setiap perkalian baris m1 dengan kolom m2
                    sum += m1[i][k] * m2[k][j];
                    console.log(sum);
                }
                result[i][j] = sum;
            }
        }
        return result;
    }
}

console.table(perkalianMatrix(matrixA, matrixB));
