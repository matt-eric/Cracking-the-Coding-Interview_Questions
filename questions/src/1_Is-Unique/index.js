const displayName = "Is Unique"

const instructions = "Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?"

const method = (string) => {
    if(string.length){
        const character = string.charAt(0);
        for(let i=1; i<string.length; i++){
            if(string[i] !== character){
                return false
            }
        }
        return true
    }
    return false
}

const tests = {
    inputs: ['hello', 'world', 'hhh', 'www'],
    expectedOutputs: [false, false, true, true]
}

const isUnique = {
    displayName,
    instructions,
    method,
    tests
}

export default isUnique