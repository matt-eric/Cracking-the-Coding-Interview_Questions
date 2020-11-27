import chapters from './chapters'

const pre = document.querySelector('pre')
const select = document.querySelector('select')
const button = document.querySelector('button')
const instructions = document.getElementById('instructions')
const showResults = document.getElementById('results')
const showExpectations = document.getElementById('expectations')
const inputDisplay = document.getElementById('inputs')
const outcome = document.getElementById('outcome')

select.addEventListener( "change", ( e ) => {
    handleSelectChange(e.target.value)
});

button.addEventListener( "click", ( e ) => {
    getSolution(select.value)
});

const runMethodWithTestCases = ( question ) => {
    const { method, tests } = question;
    const { inputs, expectedOutputs } = tests;
    const results = []
    for(let i=0; i<inputs.length; i++){
        results.push( method(inputs[i]) )
    }
    const stringifiedInputs = JSON.stringify( inputs )
    const stringifiedResults = JSON.stringify( results )
    const stringifiedExpectations = JSON.stringify( expectedOutputs )
    inputDisplay.innerHTML = `${stringifiedInputs} (inputs)`
    showResults.innerHTML = `${stringifiedResults} (results)`
    showExpectations.innerHTML = `${stringifiedExpectations} (expectations)`
    outcome.innerHTML = stringifiedResults !== stringifiedExpectations ? "Failed" : "Passed"
}

const handleSelectChange = ( value ) => {
    let questionObject = getCurrentQuestionObject(value)
    setDisplayInfo(questionObject)
    resetOutput()
}

const setDisplayInfo = ( question ) => {
    instructions.innerHTML = question ? question.instructions : null
    pre.innerText = question ? question.method : null
}

const getSolution = ( value ) => {
    const questionObject = getCurrentQuestionObject(value)
    runMethodWithTestCases( questionObject )
}

const getCurrentQuestionObject = ( displayName ) => {
    return chapters.find(c => c.questions.find(q => q.displayName === displayName)).questions.find(q => q.displayName === displayName)
}

const resetOutput = () => {
    const outputElements = [ showResults, showExpectations, outcome, inputDisplay ]
    for(let i=0; i<outputElements.length; i++){
        outputElements[i]['innerHTML'] = null
    }
}

for(let i=0; i<chapters.length; i++){
    const label = document.createElement('option')
    label.disabled = true
    label.innerText = `---${chapters[i].displayName}---`
    select.appendChild(label)
    for(let c=0; c<chapters[i].questions.length; c++){
        const name = chapters[i].questions[c].displayName
        const option = document.createElement('option')
        option.value = name
        option.innerText = name
        select.appendChild(option)
    }
}