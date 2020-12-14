const zeroMatrix = {};

(() => {

    zeroMatrix.displayName = "Zero Matrix";

    zeroMatrix.instructions = "Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to O.";

    zeroMatrix.method = ( matrix ) => {
        const zeroIndexes = [];
        for (let x = 0; x < matrix[0].length; x++) {
            for (let y = 0; y < matrix.length; y++) {
                if (matrix[y][x] === 0) {
                    zeroIndexes.push([x,y]);
                };
            };
        };
        for (let i = 0; i < zeroIndexes.length; i++) {
            matrix[zeroIndexes[i][1]] = Array(matrix[0].length).fill(0);
            for (let m = 0; m < matrix.length; m++) {
                matrix[m][zeroIndexes[i][0]] = 0;
            };
        };
        return matrix;
    };

    zeroMatrix.tests = {
        inputs: [ 
            [
                [ 1, 2, 3, 4, 5],
                [ 1, 0, 3, 4, 5],
                [ 1, 2, 3, 4, 5],
                [ 1, 2, 3, 4, 5]
            ],
            [
                [ 1, 2, 3, 4, 5],
                [ 1, 0, 3, 4, 5],
                [ 1, 2, 3, 0, 5],
                [ 1, 2, 3, 4, 5]
            ]
        ],
        expectedOutputs: [ 
            [
                [ 1, 0, 3, 4, 5],
                [ 0, 0, 0, 0, 0],
                [ 1, 0, 3, 4, 5],
                [ 1, 0, 3, 4, 5]
            ],
            [
                [ 1, 0, 3, 0, 5],
                [ 0, 0, 0, 0, 0],
                [ 0, 0, 0, 0, 0],
                [ 1, 0, 3, 0, 5]
            ]
        ],
    };

})();

export default zeroMatrix;