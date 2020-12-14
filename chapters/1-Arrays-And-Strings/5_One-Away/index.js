const oneAway = {};

(() => {

    oneAway.displayName = "One Away";

    oneAway.instructions = "There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.";

    //Possible situations that would constitute an edit:
    //Adding/Removing a character to one string would make the two strings equal
    //Changing a character in one string would make the two strings equal

    oneAway.method = ( strings ) => {

        if (strings[0] !== strings[1]) {

            const tryChangingACharacter = ( stringOne, stringTwo ) => {
                let changeHasBeenMade = false
                for (let i = 0; i < stringOne.length; i++) {
                    if (stringOne[i] !== stringTwo[i]) {
                        if (changeHasBeenMade) { return false } else { changeHasBeenMade = true };
                    };
                };
                return true;
            };

            const tryAddingOrRemovingACharacter = ( stringOne, stringTwo ) => {
                const canCharacterBeAddedOrRemoved = ( firstString, secondString, index ) => {
                    const stringOneWithInsertedCharacter = firstString.slice(0, index) + secondString[index] + firstString.slice(index);
                    const stringTwoWithInsertedCharacter = secondString.slice(0, index) + firstString[index] + secondString.slice(index);
                    if ( (stringOneWithInsertedCharacter === secondString) || (stringTwoWithInsertedCharacter === firstString) ) { return true } else { return false };
                }
                for (let i = 0; i < stringOne.length; i++) {
                    if (stringOne[i] !== stringTwo[i]) {
                        return canCharacterBeAddedOrRemoved( stringOne, stringTwo, i );
                    };
                };
                return true;
            };

            if (strings[0].length === strings[1].length) {
                return tryChangingACharacter(strings[0], strings[1]);
            } else if (strings[0].length === strings[1].length+1 || strings[0].length === strings[1].length-1) {
                return tryAddingOrRemovingACharacter(strings[0], strings[1]);
            } else {
                return false;
            };
            
        };
        return true;
    };

    oneAway.tests = {
        inputs: [ [ 'hello', 'hllo' ], [ 'hellos', 'hello' ], [ 'world', 'wirld' ], [ 'hello', 'world' ] ],
        expectedOutputs: [ true, true, true, false ]
    };

})();

export default oneAway;