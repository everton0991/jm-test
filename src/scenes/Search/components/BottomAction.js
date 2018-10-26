import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'
import ActionButton from '../../../components/ActionButton'

/**
 * Component styles.
 */
const styles = ({
  bottomAction: {
    maxWidth: '400px',
    padding: '0 25px',
    alignSelf: 'center',
    position: 'fixed',
    bottom: '5%'
  },
})

const BottomAction = ({ ...props }) => {
  const { classes } = props

  return (
    <Grid
      container
      className={classes.bottomAction}>
      <ActionButton
        disabled={props.disabled}
        handleClick={props.handleClick}
        buttonColor='#32CCCC'
        textColor='#ffffff'>
        OK
      </ActionButton>
    </Grid>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(BottomAction)