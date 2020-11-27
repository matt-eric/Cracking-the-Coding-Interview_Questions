const displayName = "String Rotation"

const instructions = "Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, 51 and 52, write code to check if 52 is a rotation of 51 using only one call to isSubstring (e.g., 'waterbottle' is a rotation of 'erbottlewat')."

const method = ( strings ) => {
    const stringOne = strings[0];
    let stringTwo = strings[1];
    if(stringOne.length === stringTwo.length){
        for(let i=0; i<stringOne.length; i++){
            let stringWithRemovedCharacter = stringTwo.replace(stringOne[i], "")
            if (stringTwo.length === stringWithRemovedCharacter.length){
                break;
            } else {
                stringTwo = stringWithRemovedCharacter;
            }
        }  
    }
    return !stringTwo.length
}

const tests = {
    inputs: [ 
        ['waterbottle', 'erbottlewat'],
        ['aterbottle', 'waterbottle'],
        ['waterbottled', 'waterbottle'],
        ['watrbottlez', 'waterbottle'],
     ],
    expectedOutputs: [ 
        true, 
        false ,
        false,
        false
    ],
}

const zeroMatrix = {
    displayName,
    instructions,
    method,
    tests
}

export default zeroMatrix