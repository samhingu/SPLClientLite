import { routeReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import notification from './notification';

export default combineReducers({
    routing,
    notification
})

