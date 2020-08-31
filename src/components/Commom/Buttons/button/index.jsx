import React from 'react'
import propTypes from 'prop-types'

function Button({ text, ...rest }) {

  return (
    <button className="btn btn-primary" {...rest} >{text}</button>
  )
}  

Button.propTypes = {
  text: propTypes.string
}

export default Button