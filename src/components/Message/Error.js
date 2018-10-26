import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Grid, Typography } from '@material-ui/core'

/**
 * Component styles.
 */
const styles = ({
  messageWrapper: {
    padding: '20px 25px'
  },
  stepsBlock: { 
    marginTop: '50px', 
    alignSelf: 'center',
    color: '#646B79'
  }
})
const Error = ({ ...props }) => {
  const { classes } = props
  
  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      className={classes.messageWrapper}>
      <Typography
        variant='body2'
        gutterBottom
        className={classes.font}>
        {props.message}
      </Typography>
    </Grid>
  )
}

/**
 * Exporting component.
 */
export default withStyles(styles)(Error)