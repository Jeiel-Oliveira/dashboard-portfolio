import React from 'react'

import { Button } from './styled'
import propTypes from 'prop-types'
import Ionicons from '../ionicons'

export default function ButtonBase ({ name, size, ...rest}) {

    return (
        <Button {...rest} ><Ionicons size={size} name={name} color={"white"} /></Button>
    )

} 

ButtonBase.defaultProps = {
    
}

ButtonBase.propTypes = {
    text: propTypes.string
}