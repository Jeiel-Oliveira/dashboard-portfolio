import React from 'react'

import { Button } from './styled'
import propTypes from 'prop-types'
import Ionicons from 'components/ionicons'

function ButtonIcon({ name, size, ...rest }) {
  return (
    <Button {...rest} ><Ionicons size={size} name={name} color={"white"} /></Button>
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