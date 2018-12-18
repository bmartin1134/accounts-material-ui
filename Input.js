import React from 'react'
import { Form, Input, Label } from 'semantic-ui-react'

const InputField = (fieldObj) => {
  const {
    _id,
    displayName,
    type,
    onChange,
    placeholder,
    required, // By default is true, if equals false than ignore
    icon,
    focusInput,
    error,
    defaults
  } = fieldObj

  return (
    <Form.Field required={required !== false} error={!!error}>

      {defaults.showLabels && <label>{displayName}</label>}

      <Input
        autoFocus={focusInput}
        icon={icon || iconMapper[_id] || null}
        iconPosition='left'
        placeholder={defaults.showPlaceholders ? placeholder : ''}
        type={type}
        error={Boolean(error)}
        onChange={(e) => onChange(e, _id)}
        onBlur={(e) => onChange(e, _id)}
      />

      {error && <Label basic color='red' pointing>{error.errStr}</Label>}

    </Form.Field>
  )
}

const iconMapper = {
  username: 'user',
  email: 'mail',
  password: 'lock',
  confirmPassword: 'unlock alternate',
  currentPassword: 'unlock alternate',
  fullName: 'info'
}

export default InputField
