
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let resultArray = [];
    if (matrix.length) {
        for (let i = 1; i < matrix.length; i += 2) {
            matrix[i] = matrix[i].reverse();
        }
        for (let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++) {
                resultArray.push(matrix[i][j]);
            }
        }
        return resultArray;
    }
    return matrix;
}
