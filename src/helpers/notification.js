import {  actions as notifActions } from 'redux-notifications'
const { notifSend } = notifActions

export const sendError = (action, message) => notifSend({
    message: `Error on ${action} : ${message}`,
    kind: 'danger',
    dismissAfter: 2000
})

export const sendSuccess= (message) => notifSend({
    message: message,
    kind: 'info',
    dismissAfter: 2000
})