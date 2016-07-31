import { routeReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import { reducer as notifs } from 'redux-notifications';
import link from './link'

export default combineReducers({
    routing,
    notifs,
    link
})

