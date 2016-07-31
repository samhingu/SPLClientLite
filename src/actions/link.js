import { createAction } from "redux-actions"
import { sendError, sendSuccess } from "../helpers/notification"


import * as ActionTypes from "../constants/ActionTypes"
import { apiGetLinks, apiDeleteLink } from "../apis/fetch"


const getLinksRequest = createAction(ActionTypes.GET_LINKS_REQUEST)
const getLinksError = createAction(ActionTypes.GET_LINKS_ERROR)
const getLinksSuccess = createAction(ActionTypes.GET_LINKS_SUCCESS)

const getLinks = () => (dispatch) => {
    dispatch(getLinksRequest())
    apiGetLinks(
        (links) => {
            dispatch(sendSuccess(links.length ? "Links loaded successfully" : "No links found"))
            dispatch(getLinksSuccess(links))
        },
        (errorMessage) => {
            dispatch(sendError("Load Links", errorMessage))
            dispatch(getLinksError(errorMessage))
        })
}

const deleteLinkRequest = createAction(ActionTypes.DELETE_LINK_REQUEST)
const deleteLinkError = createAction(ActionTypes.DELETE_LINK_ERROR)
const deleteLinkSuccess = createAction(ActionTypes.DELETE_LINK_SUCCESS)

const deleteLink = (linkId) => (dispatch) => {
    dispatch(deleteLinkRequest(linkId))
    apiDeleteLink(linkId,
        () => {
            dispatch(sendSuccess("Link deleted successfully"))
            dispatch(deleteLinkSuccess())
        },
        (errorMessage) => {
            dispatch(sendError("Delete Link", errorMessage))
            dispatch(deleteLinkError(errorMessage))
        })

}

const deleteLinkConfirm = createAction(ActionTypes.DELETE_LINK_CONFIRM)
const deleteLinkCancel = createAction(ActionTypes.DELETE_LINK_CANCEL)

export {
getLinks,
deleteLink,
deleteLinkCancel,
deleteLinkConfirm
}
