import {createStore, combineReducers} from 'redux'
import {cashReducer} from './cashReducer'
import {clientReducer} from './clientReducer'

const rootReducer = combineReducers({
    cash: cashReducer,
    client: clientReducer
})

export const store = createStore(rootReducer)