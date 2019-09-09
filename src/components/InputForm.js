import React from 'react'
import PropTypes from 'prop-types'

export const InputForm = (props) => (

  <form onSubmit={props.handleSubmit}>
    Usernames: <input type="text"
      onChange={props.handleInputChange}
      value={props.userInput}
    />
    <button>Submit</button>
  </form>  
)

  InputForm.propTypes = {
    userInput: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }
