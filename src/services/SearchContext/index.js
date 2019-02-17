import React from 'react'

export const { Provider, Consumer } = React.createContext()

export const contextWrapper = WrappedComponent => props => (
  <Consumer>
    {value => (
      <WrappedComponent {...props} {...value} />
    )}
  </Consumer>
)
