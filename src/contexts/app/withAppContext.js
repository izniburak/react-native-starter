import React, { useContext } from 'react'
import { Context, actions } from './'

const withAppContext = WrappedComponent => {
  return props => {
    const [state, dispatch] = useContext(Context)
    return <WrappedComponent {...props} context={{ state, dispatch, actions }} />
  }
}

export default withAppContext
