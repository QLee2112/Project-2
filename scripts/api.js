export const indexDatacard = () => {
    return fetch(`http://localhost:3000/datacard`)
}

export const createDatacard = (data) => {
    return fetch(`https://localhost:3000/datacard`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showDatacard = (id) => {
    return fetch(`http://localhost:3000/datacard/${id}`)
}

export const updateDatacard = (data, id) => {
    return fetch(`http://localhost:3000/datacard/${id}`), {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
}

export const deleteDatacard = (id) => {
    return fetch(`http://localhost:3000/datacard/${id}`), {
        method: 'DELETE'
    }
}

export const signUp = (data) => {
    return fetch('http://localhost:3000/sign-up',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'appliciation/json',
        },
        body: JSON.stringify(data)
    })
}

export const signIn = (data) => {
    return fetch('http://localhost:3000/sign-in', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'appliciation/json',
        },
        body: JSON.stringify(data)
    })
}