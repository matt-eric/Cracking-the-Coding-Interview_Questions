const displayName = "Rotate Matrix"

const instructions = "Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. (an you do this in place?"

const method = ( matrix ) => {
    const newMatrix = [ [], [], [], [] ]
    for(let x=0; x<4; x++){
        for( let y=0; y<4; y++){
            newMatrix[x].push(matrix[y][x])
        }
    }
    return newMatrix
}

const tests = {
    inputs: [ 
        [
            [ 1, 2, 3, 4],
            [ 1, 2, 3, 4],
            [ 1, 2, 3, 4],
            [ 1, 2, 3, 4]
        ]
     ],
    expectedOutputs: [ 
        [
            [ 1, 1, 1, 1],
            [ 2, 2, 2, 2],
            [ 3, 3, 3, 3],
            [ 4, 4, 4, 4]
        ]
     ],
}

const rotateMatrix = {
    displayName,
    instructions,
    method,
    tests
}

export default rotateMatrix