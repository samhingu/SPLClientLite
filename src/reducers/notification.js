import { ADD_NOTIFICATION } from '../constants/ActionTypes'

const addNotification = (state = {}, action) =>  {
    switch(action.type){
        case ADD_NOTIFICATION: 
            return Object.assign({},state, {
                message: action.message,
                level: action.level
            })
        default: 
            console.debug('Notification reducer :: hit default', action.type)
            return state
    }
}
export default addNotification