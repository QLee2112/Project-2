import { indexDatacard, createDatacard, showDatacard, updateDatacard, deleteDatacard, signIn, signUp, createWargear } from "./api.js"
import { onIndexDatacardSuccess, onFailure, onCreateDatacardSuccess, onShowDatacardSuccess, onUpdateDatacardSuccess, onDeleteDatacardSuccess, onSignUpSuccess, onSignInSuccess } from "./ui.js";

const createDatacardForm = document.querySelector('#create-datacard-form')
const indexDatacardContainer = document.querySelector('#index-datacard-container')
const showDatacardContainer = document.querySelector('#show-datacard-container')
const signUpContainer = document.querySelector('#signup-container')
const signInContainer = document.querySelector('#signin-container')
const createWargearContainer = document.querySelector('#create-wargear-container')

signUpContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const userData = {
        credentials: {
            email: event.target[0].value,
            password: event.target[1].value,
        },
    }
    console.log(userData)
    signUp(userData)
    .then(onSignUpSuccess)
    .catch(onFailure)
})

signInContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const userData = {
        credentials: {
            email: event.target[0].value,
            password: event.target[1].value
        },
    }
    signIn(userData)
        .then((res) => res.json())
        .then((res) => onSignInSuccess(res.token))
        .then(indexDatacard)
        .then((res) => res.json())
        .then((res) => onIndexDatacardSuccess(res.datacard))
        .catch(onFailure)
})

createDatacardForm.addEventListener('submit',(event) => {
    event.preventDefault()
    const datacardInfo = {
        datacard: {
            name: event.target['name'].value,
            movement: event.target['movement'].value,
            weaponSkill: event.target['weaponSkill'].value,
            ballisticSkill: event.target['ballisticSkill'].value,
            strength: event.target['strength'].value,
            toughness: event.target['toughness'].value,
            wounds: event.target['wounds'].value,
            attacks: event.target['attacks'].value,
            leadership: event.target['leadership'].value,
            saves: event.target['saves'].value,
            },
    }
    console.log(datacardInfo)
    createDatacard(datacardInfo)
        .then(onCreateDatacardSuccess)
        .catch(onFailure)
})

indexDatacardContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
        showDatacard(id)
            .then((res) => res.json())
            .then((res) => onShowDatacardSuccess(res.datacard))
            .catch(onFailure)
})

showDatacardContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const id = event.target.getAttribute('data-id')
    const datacardInfo = {
        datacard: {
            name: event.target['name'].value,
            movement: event.target['movement'].value,
            weaponSkill: event.target['weaponSkill'].value,
            ballisticSkill: event.target['ballisticSkill'].value,
            strength: event.target['strength'].value,
            toughtness: event.target['toughness'].value,
            wounds: event.target['wounds'].value,
            attacks: event.target['attacks'].value,
            leadership: event.target['leadership'].value,
            saves: event.target['saves'].value,
        },
    }
    if(!id) return
    updateDatacard(datacardInfo, id)
        .then(onUpdateDatacardSuccess)
        .catch(onFailure)
})

showDatacardContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
    if(!id) return
    deleteDatacard(id)
        .then(onDeleteDatacardSuccess)
        .catch(onFailure)
})

createWargearContainer.addEventListener('submit', (event) =>{
    event.preventDefault()

    const datacardId = event.target.getAttribute('data-createId')

    const wargearData = {
        wargear:{
            name: event.target['name'].value,
            range: event.target['range'].value,
            type: event.target['type'].value,
            strength: event.target['strength'].value,
            ap: event.target['ap'].value,
            damage: event.target['damage'].value,
            datacardId: datacardId
        }
    }
    createWargear(wargearData)
        .then(onCreateDatacardSuccess)
        .catch(onFailure)
})