import React from 'react'

import propTypes from 'prop-types'
import Ionicons from 'components/ionicons'

function ButtonIcon({ name, size, ...rest }) {
  return (
    <button className="btn btn-primary" {...rest} ><Ionicons size={size} name={name} color={"white"} /></button>
  )
}

ButtonIcon.defaultProps = {
  name: "add-circle-outline",
  size: 16
}

ButtonIcon.propTypes = {
  text: propTypes.string,
  size: propTypes.number
}

export default ButtonIcon