//Step 1. to get the references of
//the dom elements that we will be interacting

const countryInputBox = document.querySelector('#country')
const populationInputBox = document.querySelector('#population')

const formElement = document.querySelector('#form')

//Step 2 - Add events
formElement.addEventListener('submit', addCensus)
//database

const db = new Localbase('b52.census.db')

function form2Object(formElement) {
    const formData = new FormData(formElement)
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }
    return data
}

async function addCensus(event) {
    event.preventDefault()
    const newCensus = form2Object(formElement)
    newCensus.id = Date.now().toString()

    //asynchronous
    const message = await db.collection('census').add(newCensus)
    console.log(message)
}


