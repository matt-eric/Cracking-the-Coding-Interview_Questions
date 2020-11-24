import questions from './questions'

const pre = document.querySelector('pre')
const select = document.querySelector('select')
const button = document.querySelector('button')
const instructions = document.getElementById('instructions')
const showResults = document.getElementById('results')
const showExpectations = document.getElementById('expectations')
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
    const stringifiedResults = JSON.stringify( results )
    const stringifiedExpectations = JSON.stringify( expectedOutputs )
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
    return questions.find(q => q.displayName === displayName)
}

const resetOutput = () => {
    const outputElements = [ showResults, showExpectations, outcome ]
    for(let i=0; i<outputElements.length; i++){
        outputElements[i]['innerHTML'] = null
    }
}

for(let i=0; i<questions.length; i++){
    const name = questions[i].displayName
    const option = document.createElement('option')
    option.value = name
    option.innerText = name
    select.appendChild(option)
}