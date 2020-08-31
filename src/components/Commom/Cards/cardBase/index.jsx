import React from 'react';
import propTypes from 'prop-types';

import { Card } from './styled';

function CardBase({ children, color, ...rest }) {
  return (
    <Card color={color} {...rest}>
      {children}
    </Card>
  )
}

CardBase.defaultProps = {
  type: "text",
  color: "#e4cece"
}

CardBase.propTypes = {
  type: propTypes.string,
  color: propTypes.string
}

export default CardBase

