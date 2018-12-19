import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
      classes
    } = this.props

    return (
      <FormControl required={required ? true : false} error={error ? true : false}>

        {defaults.showLabels && <FormLabel>{displayName}</FormLabel>}
        <RadioGroup
            aria-label={displayName}
            name="{displayName}1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
          {options.map((option, i) => (
            <FormControlLabel
              id={i}
              value={option.value}
              control={<Radio />}
              label={option.text}
              checked={values[_id] === option.value}
              />

          ))}
          </RadioGroup>
          {error && <FormHelperText>{error.errStr}</FormHelperText>}

        </FormControl>

    )
  }

  handleChange = (e, { value }) => {
    const {
      _id,
      onChange
    } = this.props
    this.setState({ value: event.target.value });
    onChange(value, _id)
  }
}

RadioField.defaultProps = {
  type: 'text'
}

export default withStyles(styles)(RadioField)
