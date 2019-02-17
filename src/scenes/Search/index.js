import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Consumer } from '../../services/SearchContext'

import { Grid } from '@material-ui/core'

import Main from '../../components/Main'
import Header from '../../components/Layout/Header'
import Form from './components/Form'
import BottomAction from './components/BottomAction'
import Step from './components/Step'
import Linear from '../../components/Loader/Linear'
import Error from '../../components/Message/Error'

/**
 * Component styles.
 */
const styles = (theme) => ({
  background: {
    display: 'flex',
    flexDirection: 'column',
    background: '#F2F6F8',
    width: '100vw',
    height: '100vh'
  },
  wrapper: {
    color: '#000',
  }
})

const Search = ({ classes }) => (
  <Consumer>
    {value => {
      const { 
        isFetching, 
        company, 
        cnpj, 
        actions, 
        error 
      } = value

      return (
        <Main>
          <Grid className={classes.background}>
            {isFetching && <Linear />}
            <Header />
            <Grid className={classes.wrapper}>
              <Step />
              <Form 
                searchOk={!!company}
                inputValue={cnpj}
                handleChange={actions.handleChange} 
              />
            {error && <Error message={error} />}
            </Grid>
            <BottomAction 
              disabled={!cnpj}
              handleClick={actions.handleClick} 
            />
          </Grid>
        </Main>
      )
    }}
  </Consumer>
)

/**
 * Exporting component with styles and mapping the states.
 */
export default withStyles(styles)(Search)
