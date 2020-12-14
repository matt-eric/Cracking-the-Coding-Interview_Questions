const palindromePermutation = {};

(() => {

    palindromePermutation.displayName = "Palindrome Permutation";

    palindromePermutation.instructions = "Given a string, write a function to check if it is a permutation of a palin- drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.The palindrome does not need to be limited to just dictionary words.";

    palindromePermutation.method = ( string ) => {
        for (let i = 0; i < string.length/2; i++) {
            let firstLetter = string[i];
            let lastLetter = string[string.length-i-1];
            if ( firstLetter !== lastLetter ) return false;
        };
        return true;
    };

    palindromePermutation.tests = {
        inputs: [ "abcdedcba", "use a whiteboard draobetihw a esu", "This is not a palindrome." ],
        expectedOutputs: [ true, true, false ]
    };

})();

export default palindromePermutation;