import {createStore, combineReducers} from 'redux'
import {cashReducer} from './cashReducer'
import {clientReducer} from './clientReducer'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
    cash: cashReducer,
    clients: clientReducer
})

export const store = createStore(rootReducer, composeWithDevTools())