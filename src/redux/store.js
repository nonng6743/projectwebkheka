import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createWrapper } from 'next-redux-wrapper'
import rootReducter from './reducers/rootReducer'

const middleware = [thunk]

const makeStore = () => createStore( rootReducter,applyMiddleware(...middleware))

export const wrapper = createWrapper(makeStore)