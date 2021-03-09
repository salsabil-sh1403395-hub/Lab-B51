//Step 1. to get the references of
//the dom elements that we will be interacting

const countryInputBox = document.querySelector('#country')
const populationInputBox = document.querySelector('#population')
const formElement = document.querySelector('#form')
const countriesTable = document.querySelector('#countries')
const noOfRows = document.querySelector('#no-rows')

const db = new Localbase('b52.census.db')
let isEdit = false
let censusToBeEdited;

showCensusData()

//Step 2 - Add events
formElement.addEventListener('submit', addCensus)

async function showCensusData() {
    //get all the collection from the databas
    const totalNo = parseInt(noOfRows.value)

    const censusData = await db
        .collection('census')
        .limit(totalNo)
        .orderBy("country", "asc")
        .get()
    const censusRows = censusData.map(c => censusToHTMLRow(c))
    countriesTable.innerHTML = `
        <thead>
            <tr>
                <th>Country</th>
                <th>Population</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>${censusRows.join('')}</tbody>
    `
}

async function addCensus(event) {
    event.preventDefault()
    const newCensus = form2Object(formElement)
    if (isEdit)
        await db.collection('census')
            .doc({id: censusToBeEdited.id})
            .update(newCensus)
    else {
        newCensus.id = Date.now().toString()
        await db.collection('census').add(newCensus)
    }

    formElement.reset()
    await showCensusData()
    isEdit = false
}

async function deleteCensus(cid) {
    await db.collection('census').doc({id: cid}).delete()
    await showCensusData()
}

async function editCensus(cid) {
    isEdit = true
    censusToBeEdited = await db.collection('census').doc({id: cid}).get()
    countryInputBox.value = censusToBeEdited.country
    populationInputBox.value = censusToBeEdited.population
}

function censusToHTMLRow(c) {
    return `
        <tr>
            <td>${c.country}</td>
            <td>${c.population}</td> 
            <td>
                <i class="fa fa-pencil" onclick="editCensus('${c.id}')">Edit</i>
                <i class="fa fa-trash" onclick="deleteCensus('${c.id}')">Delete</i>
            </td>
        </tr>
    `
}

function form2Object(formElement) {
    const formData = new FormData(formElement)
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }
    return data
}

