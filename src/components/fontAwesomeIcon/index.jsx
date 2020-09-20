import React from 'react'
import propTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FontIcon({ name, color }) {
  let Icon  

  try {
    Icon = require("@fortawesome/free-solid-svg-icons")[name]

    if(!Icon) Icon = require("@fortawesome/free-solid-svg-icons").faExclamationTriangle
  } catch(err) {
    console.log(err)
  }

  return <FontAwesomeIcon color={color} icon={Icon} />
}

FontIcon.propTypes = {
  icon: propTypes.string,
  color: propTypes.string,
  path: propTypes.string
}