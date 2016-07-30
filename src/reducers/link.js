import { GET_LINKS_REQUEST, GET_LINKS_ERROR, GET_LINKS_SUCCESS,
    ADD_LINK,
    DELETE_LINK_REQUEST, DELETE_LINK_SUCCESS, DELETE_LINK_ERROR,
    DELETE_LINK_CANCEL, DELETE_LINK_CONFIRM } from "../constants/ActionTypes"


const initialState = {
    links: [],
    isLoading: false,
    errorMessage: null,
    deleteLinkId: null,
    isDeleting: false
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
                ...state,
                isLoading: true,
                errorMessage: null
            }
        case GET_LINKS_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            };
        case GET_LINKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                links: action.payload
            };

        case DELETE_LINK_CANCEL:
            return {
                ...state,
                isDeleting: false,
                linkId: null
            }
        case DELETE_LINK_CONFIRM:
            return {
                ...state,
                isDeleting: true,
                linkId: action.payload
            }

        case DELETE_LINK_REQUEST:
            return {
                ...state,
                isDeleting: true,
                linkId: action.payload
            }
        case DELETE_LINK_ERROR:
            return {
                isLoading: false,
                errorMessage: action.payload,
                links: state.links
            };
        case DELETE_LINK_SUCCESS:
            debugger;
            return {
                isLoading: false,
                errorMessage: '',
                links: action.payload
            };

        default:
            return state;

    }
}
