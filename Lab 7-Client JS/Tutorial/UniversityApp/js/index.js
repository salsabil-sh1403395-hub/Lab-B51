//step 1 - final all the elements you want to interact
const searchBar = document.querySelector('#search-bar');
const searchBtn = document.querySelector('#search-button');
const universitiesDD = document.querySelector('#universities');
const baseURL = 'http://universities.hipolabs.com/search?country'
const website = document.querySelector('#website')

searchBtn.onclick = () => {
    //step 1. format the url
    const url = `${baseURL}=${searchBar.value}`
    getUniversities(url)
}
async function getUniversities(url) {
    const data = await fetch(url) //wait for the data
    console.log(data)
    const universities = await data.json() //
    console.log(universities)
    loadUniversities(universities)
}

function loadUniversities(universities) {
    let uniOptions = universities.map(uni => `<option value=${uni.web_pages[0]}> ${uni.name} </option>`)
    universitiesDD.innerHTML = uniOptions.join('')
}

function loadWebsite(url){website.src = url;}
