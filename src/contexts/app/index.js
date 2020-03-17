import React, { createContext, useReducer } from 'react'
import { reducer as getReducer, actions } from './Reducer'

// Create context
const Context = createContext()
const Provider = ({ reducer, initialState, children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>{children}</Context.Provider>
)

// Initial State
const initialState = {
  status: actions.APP_STATUS_TYPE.LOADING,
  data: {},
}

export { Provider, Context, initialState, getReducer, actions }
