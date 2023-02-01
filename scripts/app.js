import { indexDatacard, createDatacard, showDatacard, updateDatacard, deleteDatacard } from "./api";
import { onIndexDatacardSuccess, onFailure, onCreateDatacardSuccess, onShowDatacardSuccess, onUpdateDatacardSuccess, onDeleteDatacardSuccess } from "./ui";


const createDatacardForm = document.querySelector('#create-datacard=form')
const indexDatacardContainer = documnet.querySelector('#index-datacard-container')
const showDatacardContainer = document.querySelector('#show-datacard-container')

indexDatacard()
    .then(res => res.json())
    .then(res => {
        onIndexDatacardSuccess(res.datacard)
    })
    .catch(onFailure)

createDatacardForm.addEventListener('submit',(event) => {
    event.preventDefault()
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