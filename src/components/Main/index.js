import React, { Component } from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"'
  },
})

class Main extends Component {
  render() {
    const { children } = this.props
    
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    )
  }
}

export default Main
