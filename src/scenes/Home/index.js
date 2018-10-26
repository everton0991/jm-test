import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import Main from '../../components/Main' 
import { Grid } from '@material-ui/core'
import ActionText from './components/ActionText'
import ActionButton from '../../components/ActionButton'

/**
 * Component styles.
 */
const styles = ({
  background: {
    background: 'linear-gradient(to top right, #AA65F5, #8D85EE)',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  wrapper: {
    maxWidth: '400px',
    padding: '15px 25px 0 25px',
    color: '#ffffff',
    position: 'fixed',
    bottom: '5%'
  }
})

class Home extends Component {
  /**
   * Binding here for code cleaness.
   * 
   * @param {Object} props 
   */
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  /**
   * Redirect to search page.
   */
  handleClick () {
    const { history } = this.props
    history.push('busca')
  }

  render () {
    const { classes } = this.props

    return (
      <Main>
        <Grid 
          container 
          alignItems='flex-end'
          className={classes.background}>
          <Grid 
            container
            direction='column'
            alignItems='center'
            className={classes.wrapper}>
            <ActionText />
            <ActionButton handleClick={this.handleClick}>
              Iniciar
            </ActionButton>
          </Grid>
        </Grid>
      </Main>
    )
  }
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Home)
