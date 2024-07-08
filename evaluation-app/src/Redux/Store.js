import {combineReducers,applyMiddleware,legacy_createStore} from 'redux'
import {thunk} from 'redux-thunk'
import { PortfolioReducer } from './PortfolioReducer'
const rootReducer=combineReducers({
portfolio:PortfolioReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))