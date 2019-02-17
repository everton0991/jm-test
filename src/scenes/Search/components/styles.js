const styles = theme => ({
  whiteBlock: {
    backgroundColor: '#ffffff',
    padding: '15px 25px'
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapFormLabel: {
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px 0px',
    color: '#C3C9CE',
    transition: theme.transitions
      .create([
        'border-color', 'box-shadow'
      ]),
    '&:focus': {
      color: '#AA65F5 !important'
    }
  },
  bootstrapInput: {
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px 0',
    color: '#646B79',
    transition: theme.transitions
      .create([
        'border-color', 'box-shadow'
      ]),
    '&:focus': {
      borderColor: '#80bdff'
    }
  },
  bottomAction: {
    maxWidth: '400px',
    padding: '0 25px',
    alignSelf: 'center',
    position: 'fixed',
    bottom: '5%'
  },
  stepsBlock: {
    padding: '20px 25px'
  },
  step: {
    border: '3px solid #AA65F5',
    padding: '2px 8px',
    marginRight: '25px'
  },
  stepNumber: {
    color: '#AA65F5',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  stepText: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#8A8F9A'
  }
})

export default styles
