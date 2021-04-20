import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import thunk from "redux-thunk";

// Reducers
import todos from "./todos/reducer";

// General
const reducers = combineReducers({
    todos
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk)),
)