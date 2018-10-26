import React from 'react'
import { withStyles } from '@material-ui/core'

import LinearProgress from '@material-ui/core/LinearProgress'

/**
 * Component styles.
 */
const styles = ({
  linearWrapper: {
    minWidth: '100vw',
    position: 'fixed',
    top: '0'
  },
  colorPrimary: {
    backgroundColor: '#8fe0e0',
  },
  barColorPrimary: {
    backgroundColor: '#32CCCC',
  },
})

const Linear = ({ ...props }) => {
  const { classes } = props

  return (
    <div className={classes.linearWrapper}>
      <LinearProgress 
        classes={{
          colorPrimary: classes.colorPrimary,
          barColorPrimary:  classes.barColorPrimary
        }} />
    </div>
  )
} 

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Linear)
