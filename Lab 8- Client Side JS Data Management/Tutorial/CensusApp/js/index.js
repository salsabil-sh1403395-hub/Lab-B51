//Step 1. to get the references of
//the dom elements that we will be interacting

const countryInputBox = document.querySelector('#country')
const populationInputBox = document.querySelector('#population')

const formElement = document.querySelector('#form')
const countriesTable = document.querySelector('#countries')

const db = new Localbase('b52.census.db')
showCensusData()


//Step 2 - Add events
formElement.addEventListener('submit', addCensus)

async function showCensusData(){
    //get all the collection from the databas
    const censusData= await db.collection('census').get()
    const censusRows = censusData.map(c => censusToHTMLRow(c))
    countriesTable.innerHTML = censusRows.join('')
}

function censusToHTMLRow(c) {
    return `
        <tr>
            <td>${c.country}</td>
            <td>${c.population}</td> 
            <td></td>
        </tr>
    `
}

async function addCensus(event) {
    event.preventDefault()
    const newCensus = form2Object(formElement)
    newCensus.id = Date.now().toString()

    const message = await db.collection('census').add(newCensus)
    formElement.reset()
    await showCensusData()
}

function form2Object(formElement) {
    const formData = new FormData(formElement)
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }
    return data
}

