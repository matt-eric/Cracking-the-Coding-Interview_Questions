const isUnique = {};

(() => {

    isUnique.displayName = "Is Unique";

    isUnique.instructions = "Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?";
    
    isUnique.method = (string) => {
        if (string.length) {
            const character = string.charAt(0);
            for (let i = 1; i < string.length; i++) {
                if (string[i] !== character) {
                    return false;
                };
            };
            return true;
        };
        return false;
    };
    
    isUnique.tests = {
        inputs: ['hello', 'world', 'hhh', 'www'],
        expectedOutputs: [false, false, true, true]
    };

})();

export default isUnique;

