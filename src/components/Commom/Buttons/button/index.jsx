import React from 'react'
import propTypes from 'prop-types'

import { StyleButton } from './styled.js'

function Button({ text, ...rest }) {

  return (
    <StyleButton {...rest} >{text}</StyleButton>
  )
}  

Button.propTypes = {
  text: propTypes.string
}

export default Button