import React from 'react'
import PropTypes from 'prop-types'
import { Message } from 'semantic-ui-react'

const Errors = ({ errors }) => {
  return (
    <Message
      warning
      visible={errors.length > 0}
      content={errors.map((err, i) => (<b key={i}>{err.errStr}<br /></b>))}
    />
  )
}

Errors.propTypes = {
  errors: PropTypes.array.isRequired
}

export default Errors
