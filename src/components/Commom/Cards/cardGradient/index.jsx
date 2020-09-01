import React from 'react';
import propTypes from 'prop-types';

import { Card } from './styled';

function CardGradient({ children, color, ...rest }) {
  return (
    <Card color={color} {...rest}>
      {children}
    </Card>
  )
}

CardGradient.defaultProps = {
  type: "text",
  color: "red"
}

CardGradient.propTypes = {
  type: propTypes.string,
  color: propTypes.string
}

export default CardGradient