import React from "react"
import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import thunk from "redux-thunk";

const reducers = combineReducers({

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk)),
)