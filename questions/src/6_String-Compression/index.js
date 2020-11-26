const displayName = "String Compression"

const instructions = "Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the 'compressed' string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a - z)."

const method = ( string ) => {
    let count = 0;
    let newString = '';
    for(let i=0; i<string.length; i++){
        count++;
        if( string[i] !== string[i+1] ){
            newString += string[i];
            newString += count.toString();
            count = 0;
        }
    }
    if( newString.length < string.length ) { return newString } else { return string };
}

const tests = {
    inputs: [ 'aabcccccaaa', 'helloworld', 'hhheeellllllooowwwooorrrlllddd' ],
    expectedOutputs: [ 'a2b1c5a3', 'helloworld', 'h3e3l6o3w3o3r3l3d3'  ]
}

const stringCompression = {
    displayName,
    instructions,
    method,
    tests
}

export default stringCompression