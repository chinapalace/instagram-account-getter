import React from 'react'
import PropTypes from 'prop-types'

export const InputForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type="text"
      onChange={props.handleInputChange}
      value={props.userInput}
    />
  </form>  
)

  InputForm.propTypes = {
    userInput: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }
