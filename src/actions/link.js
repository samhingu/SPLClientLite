import { createAction } from "redux-actions"
import { sendError, sendSuccess } from "../helpers/notification"


import * as ActionTypes from "../constants/ActionTypes"
import { apiGetLinks, apiDeleteLink, apiAddLink } from "../apis/fetch"

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


const addLinkRequest = createAction(ActionTypes.ADD_LINK_REQUEST)
const addLinkError = createAction(ActionTypes.ADD_LINK_ERROR)
const addLinkSuccess = createAction(ActionTypes.ADD_LINK_SUCCESS)

const addLink = (link) => (dispatch) => {
    dispatch(addLinkRequest())
    apiAddLink(link,
        () => {
            dispatch(sendSuccess("Link added successfully"))
            dispatch(addLinkSuccess())
        },
        (errorMessage) => {
            dispatch(sendError("Add Link", errorMessage))
            dispatch(addLinkError(errorMessage))
        })

}



export {
getLinks,
deleteLink,
addLink
}
