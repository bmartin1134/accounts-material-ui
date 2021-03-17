import React from 'react';
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  error: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(-1),
    marginTop: theme.spacing(1),
    marginBottom:  theme.spacing(1),
    padding:  theme.spacing(1),
    background: 'lightYellow',
    border: 'brown',
    'text-align': 'center'
  },
});

function Errors(props) {
  const {classes, errors } = props;
  return (
    !!errors.length > 0 &&
    <Paper
    className={classes.error}
    >
    {errors.map((err, i) => (<b key={i}>{err.errStr}<br /></b>))}

    </Paper>
  )
}

Errors.propTypes = {
  errors: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,

}

export default withStyles(styles)(Errors);
