import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import Icon from '@material-ui/core/Icon'

/**
 * Component styles.
 */
const styles = (theme) => ({
  iconTrending: {
    borderLeft: '2px solid #fff',
    borderBottom: '2px solid #fff',
    fontSize: '20px'
  }
})

const IconTrending = ({ ...props }) => {
  const { classes } = props

  return (
    <Icon className={classes.iconTrending}>
      trending_up
    </Icon>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(IconTrending)