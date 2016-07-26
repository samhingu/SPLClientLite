import { createStore, applyMiddleware } from 'redux'
import * as createLogger from 'redux-logger'
import * as thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default () =>  {
    const logger = createLogger.default({
        collapsed: true,
        level: 'info',
        duration: true
    })
    return createStore(rootReducer, applyMiddleware(thunk.default,logger))
};
