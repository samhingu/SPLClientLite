import { ADD_NOTIFICATION } from '../constants/ActionTypes'

export const addNotification = (message, level) =>  {
    return {
        type: ADD_NOTIFICATION,
        message,
        level
    }
}

