import { store } from "./store.js"

const indexDatacardContainer = document.querySelector('#index-datacard-container')
const messageContainer = document.querySelector('#message-container')
const showDatacardContainer = document.querySelector('#show-datacard-container')
const signUpContainer = document.querySelector('#signup-container')
const signInContainer = document.querySelector('#signin-container')
const createWargearContainer = document.querySelector('#create-wargear-container')
const wargearContainer = document.querySelector('#wargear-container')
const createDatacardForm = document.querySelector('#create-datacard-form')
const eagle = document.querySelector('#imp-eagle')
const title = document.querySelector('title')
// const createWargearButton = document.querySelector('#create-wargear-button')

export const onIndexDatacardSuccess = (datacard) => {
    datacard.forEach(datacard => {
        const div = document.createElement('div')
        div.innerHTML = `
        <h1>${datacard.name}</h1>
        <button data-id = "${datacard._id}" >Show Datacard</button>
        `
        indexDatacardContainer.appendChild(div)
    })
}

export const onFailure = (error) => {
    messageContainer.innerHTML = `
    <h1>There's an error</h1>
    <p>${error}<p>
    `
}

export const onCreateDatacardSuccess = () => {
    messageContainer.innerText = 'Datacard Created'
}

export const onShowDatacardSuccess = (datacard) => {
    const datacardContainer = document.createElement('div')
    datacardContainer.classList.add('datacard-container')
    datacardContainer.innerHTML = `
    <p>${datacard.name}</p>
    <p>Movement: ${datacard.movement}</p>
    <p>Weapon Skill: ${datacard.weaponSkill}</p>
    <p>Ballistic Skill: ${datacard.ballisticSkill}</p>
    <p>Strength: ${datacard.strength}</p>
    <p>Toughness: ${datacard.toughness}</p>
    <p>Wounds: ${datacard.wounds}</p>
    <p>Attacks: ${datacard.attacks}</p>
    <p>Leadership: ${datacard.leadership}</p>
    <p>Saves: ${datacard.saves}</p>

    <form data-id = "${datacard._id}" >
        <input type="text" name="name" value = "${datacard.name}" />
        <input type="number" name="movement" value = "${datacard.movement}" />
        <input type="number" name="weaponSkill" value = "${datacard.weaponSkill}" />
        <input type="number" name="ballisticSkill" value = "${datacard.ballisticSkill}" />
        <input type="number" name="strength" value = "${datacard.strength}" />
        <input type="number" name="toughness" value = "${datacard.toughness}" />
        <input type="number" name="wounds" pvalue = "${datacard.wounds}" />
        <input type="number" name="attacks" value = "${datacard.attacks}" />
        <input type="number" name="leadership" value = "${datacard.leadership}" />
        <input type="number" name="saves" value = "${datacard.saves}" />
        <input type="submit" value="Update Datacard"/>
    </form>

    <button data-id = "${datacard._id}">Delete Datacard</button>
    `
    showDatacardContainer.appendChild(datacardContainer)

    if(datacard.wargear.length <= 10){
        datacard.wargear.forEach(wargear =>{
            const div = document.createElement('div')
            div.innerHTML = 
            `<p>${wargear.name}</p>
            <p>${wargear.range}</p>
            <p>${wargear.type}</p>
            <p>${wargear.strength}</p>
            <p>${wargear.ap}</p>
            <p>${wargear.damage}</p>
            `
            wargearContainer.appendChild(div)
        })
        const divCreateWargear = document.createElement('div')
    divCreateWargear.innerHTML = `
    <form data-createId="${datacard._id}">
    <div class="create-wargear-form">
    <label for="content" class="form-label">Add A Wargear</label>
    <input type="text" class"form-control" name="name">
    <input type="number" class"form-control" name="range">
    <input type="text" class"form-control" name="type">
    <input type="number" class"form-control" name="strength">
    <input type="number" class"form-control" name="ap">
    <input type="number" class"form-control" name="damage">
    </div>
    <button data-createId="${datacard._id}" type="submit" id = "create-wargear-button">Create</button>
    </form>`
    

    createWargearContainer.appendChild(divCreateWargear)
    }
}

    

export const onUpdateDatacardSuccess = () => {
    messageContainer.innerText = 'Update Successful'
}

export const onDeleteDatacardSuccess = () => {
    messageContainer.innerText = 'Delete Successful'
}

export const onSignUpSuccess = () => {
    console.log('Signup success')
}
export const onSignInSuccess = (userToken) => {
    messageContainer.innerHTML = ''
    store.userToken = userToken
    signInContainer.style.visibility = 'hidden'
    signUpContainer.style.visibility = 'hidden'
    createDatacardForm.style.visibility = 'visible'
    eagle.style.visibility = 'hidden'
    title.classList.add('hide')

}