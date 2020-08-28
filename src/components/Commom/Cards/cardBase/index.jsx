import React from 'react'

import { Card } from './styled'

function CardBase({ children, color, ...rest }) {
  return (
    <Card color={color} {...rest}>
      {children}
    </Card>
  )
}

CardBase.defaultProps = {
  type: "text",
  color: "black"
}

CardBase.propTypes = {
  type: propTypes.string,
  color: propTypes.string
}

export default CardBase

