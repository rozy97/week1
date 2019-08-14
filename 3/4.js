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
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

console.table(perkalianMatrix(matrixA, matrixB));
