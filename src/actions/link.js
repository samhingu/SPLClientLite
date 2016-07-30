import { createAction } from "redux-actions"

import * as ActionTypes from "../constants/ActionTypes"
import { apiGetLinks, apiDeleteLink } from "../apis/fetch"


const getLinksRequest = createAction(ActionTypes.GET_LINKS_REQUEST)
const getLinksError = createAction(ActionTypes.GET_LINKS_ERROR)
const getLinksSuccss = createAction(ActionTypes.GET_LINKS_SUCCESS)

const getLinks = () => (dispatch) => {
    dispatch(getLinksRequest())
    apiGetLinks((links) => dispatch(getLinksSuccss(links)),
        (errMsg) => dispatch(getLinksError(errMsg)))
}

const deleteLinkRequest = createAction(ActionTypes.DELETE_LINK_REQUEST)
const deleteLinkError = createAction(ActionTypes.DELETE_LINK_ERROR)
const deleteLinkSuccss = createAction(ActionTypes.DELETE_LINK_SUCCESS)

const deleteLink = (linkId) => (dispatch) => {
    dispatch(deleteLinkRequest(linkId))
    apiDeleteLink(linkId, (links) => dispatch(deleteLinkSuccss(links)),
        (errMsg) => dispatch(deleteLinkError(errMsg)))
}

const deleteLinkConfirm = createAction(ActionTypes.DELETE_LINK_CONFIRM)
const deleteLinkCancel = createAction(ActionTypes.DELETE_LINK_CANCEL)

const createLink = createAction(ActionTypes.ADD_LINK)

export {
getLinks,
createLink,
deleteLink,
deleteLinkCancel,
deleteLinkConfirm
}
