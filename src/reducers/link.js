import {
    GET_LINKS_REQUEST,
    GET_LINKS_ERROR,
    GET_LINKS_SUCCESS,
    DELETE_LINK_REQUEST,
    DELETE_LINK_SUCCESS,
    DELETE_LINK_ERROR,
    ADD_LINK_REQUEST,
    ADD_LINK_SUCCESS,
    ADD_LINK_ERROR,
} from "../constants/ActionTypes"
const links = (state = [], action) => {
    switch (action.type) {
        case GET_LINKS_SUCCESS:
            return action.payload

        case GET_LINKS_ERROR:
        case GET_LINKS_REQUEST:
        default:
            return state
    }
}
const getLinks = (state = {
    isLoading: false,
    errorMessage: null
}, action) => {
    switch (action.type) {
        case GET_LINKS_REQUEST:
            return {
                isLoading: true,
                errorMessage: null
            }
        case GET_LINKS_ERROR:
            return {
                isLoading: false,
                errorMessage: action.payload
            };
        case GET_LINKS_SUCCESS:
            return {
                isLoading: false,
                errorMessage: null
            };

        default:
            return state;
    }
}
const deleteLink = (state = {
    isDeleting: false,
    errorMessage: null
}, action) => {
    switch (action.type) {
        case DELETE_LINK_REQUEST:
            return {
                isDeleting: true,
                errorMessage: null,
                linkId: action.payload
            }
        case DELETE_LINK_ERROR:
            return {
                isDeleting: false,
                errorMessage: action.payload,
                linkId: null
            };
        case DELETE_LINK_SUCCESS:
            return {
                isDeleting: false,
                errorMessage: null,
                linkId: null
            };

        default:
            return state;
    }
}


const addLink = (state = {
    isAdding: false,
    errorMessage: null
}, action) => {
    switch (action.type) {
        case ADD_LINK_REQUEST:
            return {
                isAdding: true,
                errorMessage: null
            }
        case ADD_LINK_ERROR:
            return {
                isAdding: false,
                errorMessage: action.payload
            };
        case ADD_LINK_SUCCESS:
            return {
                isAdding: false,
                errorMessage: null
            };

        default:
            return state;
    }
}

import {
    combineReducers
} from 'redux'

export default combineReducers({
    links,
    getLinks,
    deleteLink,
    addLink
})
