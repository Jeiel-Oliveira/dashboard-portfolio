import React from 'react'
import propTypes from 'prop-types'

export default function Ionicons({ name, size, color, ...rest }) {
    let Icon

    try {
        Icon = require('react-ionicons/lib/'+ name)
    } catch(e) {
        if (e.code === 'MODULE_NOT_FOUND') { throw new Error('ICON_NOT_FOUND') }
    }

    return <Icon fontSize={size} color={color} {...rest} />
}


Ionicons.propTypes = {
    name: propTypes.string,
    size: propTypes.string,
    color: propTypes.string
}