const displayName = "URLify"

const instructions = "URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string. (Note: If implementing in Java, please use a character array so that you can perform this operation in place.)"

const method = ( string ) => {
    const stringToArray = string.split(' ')
    let URLifiedResult = ""
    for(let i=0; i<stringToArray.length; i++){
        URLifiedResult += stringToArray[i]
        if ( i === stringToArray.length-1 ) return URLifiedResult
        URLifiedResult += '%20'
    }
}

const tests = {
    inputs: [ "I also have the ability to do this on a whiteboard.", "Whiteboards are a good way to practice technical interviewing", "I guess I'll need to buy a whiteboard." ],
    expectedOutputs: [ "I%20also%20have%20the%20ability%20to%20do%20this%20on%20a%20whiteboard.", "Whiteboards%20are%20a%20good%20way%20to%20practice%20technical%20interviewing", "I%20guess%20I'll%20need%20to%20buy%20a%20whiteboard." ]
}

const URLify = {
    displayName,
    instructions,
    method,
    tests
}

export default URLify