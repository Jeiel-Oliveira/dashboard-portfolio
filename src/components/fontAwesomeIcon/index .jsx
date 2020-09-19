import React from 'react'
import propTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default function FontIcon({ name, color }) {
  let Icon  

  try {
    Icon = require("@fortawesome/free-solid-svg-icons")[name]

    if(!Icon) Icon = require("@fortawesome/free-solid-svg-icons").faExclamationTriangle
  } catch(err) {
    console.log(err)
  }

  return <FontAwesomeIcon style={{ color: "white" }} icon={Icon} />
}

FontIcon.propTypes = {
  icon: propTypes.string,
  color: propTypes.string,
  path: propTypes.string
}