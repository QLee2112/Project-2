import { store } from "./store.js"

const indexDatacardContainer = document.querySelector('#index-datacard-container')
const messageContainer = document.querySelector('#message-container')
const showDatacardContainer = document.querySelector('#show-datacard-container')
const signUpContainer = document.querySelector('#signup-container')

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
    const div = document.createElement('div')
    div.innerHTML = `
    <h1>${datacard.name}</h1>
    <p>Movement: ${datacard.movement}</p>
    <p>Weapon Skill: ${datacard.weaponSkill}</p>
    <p>Ballistic Skill: ${datacard.ballisticSkill}</p>
    <p>Strength: ${datacard.strength}</p>
    <p>Toughness: ${datacard.toughness}</p>
    <p>Wounds: ${datacard.wounds}</p>
    <p>Attacks: ${datacard.attacks}</p>
    <p>Leadership: ${datacard.leadership}</p>
    <p>Saves: ${datacard.saves}</p>

    <form id="create-character-form" >
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="movement" placeholder="Movement" />
        <input type="text" name="weaponSkill" placeholder="Weapon Skill" />
        <input type="text" name="ballisticSkill" placeholder="Ballistic Skill" />
        <input type="text" name="strength" placeholder="Strength" />
        <input type="text" name="toughness" placeholder="Toughness" />
        <input type="text" name="wounds" placeholder="Wounds" />
        <input type="text" name="attacks" placeholder="Attacks" />
        <input type="text" name="leadership" placeholder="Leadership" />
        <input type="text" name="saves" placeholder="Saves" />
        <input type="submit" value="Create Datacard"/>
    </form>

    <button data-id = "${datacard._id}">Delete Datacard</button>
    `
    showDatacardContainer.appendChild(div)
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
    // authContainer.classList.add('hide')
    // indexCarContainer.classList.remove('hide')
    // browse.classList.remove('hide')
    // carCreateButton.classList.remove('hide')
    // nav.classList.remove('hide')
}