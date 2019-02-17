import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'
import ActionButton from '../../../components/ActionButton'
import styles from './styles'

const BottomAction = ({ classes, disabled, handleClick }) => (
  <Grid
    container
    className={classes.bottomAction}
  >
    <ActionButton
      disabled={disabled}
      handleClick={handleClick}
      buttonColor="#32CCCC"
      textColor="#ffffff"
    >
      OK
    </ActionButton>
  </Grid>
)

BottomAction.defaultProps = {
  disabled: false,
  handleClick: () => {}
}

BottomAction.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func
}

export default withStyles(styles)(BottomAction)
