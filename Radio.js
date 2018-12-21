import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
  formControl: {

  margin: theme.spacing.unit,
  },
  group: {
    margin: theme.spacing.unit,
  },
});

class RadioField extends React.Component {
  state = {
    value: '',
  };

  componentDidMount () {
    const {
      _id,
      options,
      onChange
    } = this.props

    const defaultOption = options.filter(o => o.default)[0]
    if (defaultOption) {

      // let parent know that this field has a default value
    this.setState({ value: defaultOption.value });
      onChange(defaultOption.value, _id)
    }
  }

  render () {
    const {
      _id,
      values,
      displayName,
      options,
      required,
      error,
      defaults,
      classes,
      others

    } = this.props

    return (
      <FormControl
        error={!!error}
        required={required !== false}
        className={classes.formControl}>
        <InputLabel
          shrink
          >{defaults.showLabels ? displayName : ''}</InputLabel>
        <RadioGroup
            label={defaults.showLabels ? displayName : ''}
            row={true}
            aria-label={displayName}
            name="{displayName}1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}

          >

          {options.map((option, i) => (
            <FormControlLabel
              id={i}
               key={i}
              value={option.value}
              control={<Radio />}
              label={option.text}
              checked={values[_id] === option.value}
              />

          ))}
          <FormHelperText>{error ? error.errStr : null}</FormHelperText>
          </RadioGroup>
</FormControl>

    )
  }

  handleChange = event => {
    const {
      _id,
      onChange
    } = this.props
    this.setState({ value: event.target.value });
    onChange(event.target.value, _id)
  }
}

RadioField.defaultProps = {
  type: 'text'
}

export default withStyles(styles)(RadioField);
