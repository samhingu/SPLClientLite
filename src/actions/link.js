import { createAction } from "redux-actions"

import * as ActionTypes from "../constants/ActionTypes"
import { get } from "../apis/fetch"


const getLinksRequest = createAction(ActionTypes.GET_LINKS_REQUEST)
const getLinksError = createAction(ActionTypes.GET_LINKS_ERROR)
const getLinksSuccss = createAction(ActionTypes.GET_LINKS_SUCCESS)

const getLinks = () => (dispatch) => {
    dispatch(getLinksRequest())
    get('links',
        (links) => dispatch(getLinksSuccss(links)),
        (errMsg) => dispatch(getLinksError(errMsg)))
}

const createLink = createAction(ActionTypes.ADD_LINK)
const deleteLink = createAction(ActionTypes.DELETE_LINK)

export {
    getLinks,
    createLink,
    deleteLink
}
