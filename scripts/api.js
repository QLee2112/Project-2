import { store } from './store.js'

export const indexDatacard = () => {
    return fetch(`http://localhost:3000/datacards`, {
        headers: {
            'Authorization': `Bearer ${store.userToken}`
        }
    })
}

export const createDatacard = (data) => {
    return fetch(`https://localhost:3000/datacards`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const showDatacard = (id) => {
    return fetch(`http://localhost:3000/datacards/${id}`, {
        headers: {
            'Authorization': `Bearer ${store.userToken}`
        }
    })
}

export const updateDatacard = (data, id) => {
    return fetch(`http://localhost:3000/datacards/${id}`), {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    }
}

export const deleteDatacard = (id) => {
    return fetch(`http://localhost:3000/datacards/${id}`), {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${store.userToken}`
        }
    }
}

export const signUp = (data) => {
    return fetch('http://localhost:3000/sign-up',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}

export const signIn = (data) => {
    return fetch('http://localhost:3000/sign-in', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
}