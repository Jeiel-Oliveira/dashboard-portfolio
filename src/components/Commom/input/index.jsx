import React from 'react';
import propTypes from 'prop-types';

import { Input } from './styled';

export default function InputBase({ type, color, ...rest }) {

  return (
    <Input type={type} color={color} {...rest} />
  )
}

InputBase.defaultProps = {
  type: "text",
  color: "black"
}

InputBase.propTypes = {
  type: propTypes.string,
  color: propTypes.string
}
