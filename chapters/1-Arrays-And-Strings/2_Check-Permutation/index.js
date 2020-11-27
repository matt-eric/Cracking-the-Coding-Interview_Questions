const displayName = "Check Permutation"

const instructions = "Given two strings, write a method to decide if one is a permutation of the other"

const method = ( strings ) => {
    const stringOne = strings[0]
    const stringTwo = strings[1]
    if (stringOne.length === stringTwo.length){
        for(let i=0; i<stringOne.length; i++){
            const letter = stringOne[i]
            if(!stringTwo.includes(letter)){
                return false
            }
            return true
        }
    }
    return false
}

const tests = {
    inputs: [ [ 'hello', 'lehol' ], [ 'world', 'lwrod' ], [ 'abcd', 'abcdefg '], [ 'I should be doing this', 'on a whiteboad' ] ],
    expectedOutputs: [true, true, false, false]
}

const checkPermutation = {
    displayName,
    instructions,
    method,
    tests
}

export default checkPermutation