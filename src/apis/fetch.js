
//const API_URL = 'https://pacific-mountain-80609.herokuapp.com/'
const API_URL = 'http://localhost:8080/'


const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let error = new Error(response.statusText)
        throw error
    }
}

const parseJSON = (response) => {
    return response.json()
}

export const apiGetLinks = (success, error) => {
    let fullUrl = API_URL + 'links';

    return fetch(fullUrl)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => { success(data) })
        .catch(err => error(err.message))
}

export const apiDeleteLink = (linkId, success, error) => {
    let fullUrl = API_URL + 'links/' + linkId;

    return fetch(fullUrl, { method: 'DELETE'})
        .then(checkStatus)
        .then(parseJSON)
        .then(data => { success(data) })
        .catch(err => error(err.message))
}

