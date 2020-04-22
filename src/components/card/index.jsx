import React from 'react'

import { Card } from './styled'

export default function CardBase ({ children, color, className, ...rest }) {
    return (
        <Card className={`uk-card uk-card-large uk-card-default ${className}`} color={color} {...rest} >
            {children}
        </Card>
    )
}

CardBase.defaultProps = {
    
}

