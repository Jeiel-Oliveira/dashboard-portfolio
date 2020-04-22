import React from 'react'

import propTypes from 'prop-types'

import { Card } from './styled'

export default function CardInfo ({ text, ...rest }) {

    return (
        <Card {...rest} >
            <h3 style={{ marginBottom: 0 }} >{text}</h3>
        </Card>
    )

}

CardInfo.defaultProps = {
    text: "batata"
}

CardInfo.propTypes = {
    text: propTypes.string
}
