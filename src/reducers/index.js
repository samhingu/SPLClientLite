import { routeReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import notification from './notification';
import link from './link'

export default combineReducers({
    routing,
    notification,
    link
})

