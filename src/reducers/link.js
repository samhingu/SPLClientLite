import { GET_LINKS_REQUEST, GET_LINKS_ERROR, GET_LINKS_SUCCESS, ADD_LINK, DELETE_LINK } from "../constants/ActionTypes"


const initialState = {
    links: [],
    isLoading: false,
    errorMessage: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_LINK:
            return {
                isLoading: state.isLoading,
                errorMessage: state.errorMessage,
                links: [...state.links, action.payload]
            }
        case GET_LINKS_REQUEST:
            return {
                isLoading: true,
                errorMessage: '',
                links: state.links
            }
        case GET_LINKS_ERROR:
            return {
                isLoading: false,
                errorMessage: action.payload,
                links: state.links
            };
        case GET_LINKS_SUCCESS:
            return {
                isLoading: false,
                errorMessage: '',
                links: action.payload
            };
        default:
            return state;

    }
}
