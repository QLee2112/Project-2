export const indexDatacard = () => {
    return fetch(`http://localhost:3000/datacard`)
}

export const createDatacard = (data) => {
    return fetch(`https://localhost:8000/datacard`, {
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
    return fetch(`http://localhost:8000/datacard/${id}`), {
        method: 'DELETE'
    }
}