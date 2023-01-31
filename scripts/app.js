import { indexDatacard, createDatacard, showDatacard, updateDatacard, deleteDatacard } from "./api";
import { onIndexDatacardSuccess, onFailure, onCreateDatacardSuccess, onShowDatacardSuccess, onUpdateDatacardSuccess, onDeleteDatacardSuccess } from "./ui";


const createDatacardForm = document.querySelector('#create-datacard=form')
const indexDatacardContainer = documnet.querySelector('#index-datacard-container')
const showDatacardContainer = document.querySelector('#show-datacard-container')

indexDatacard()
    .then()