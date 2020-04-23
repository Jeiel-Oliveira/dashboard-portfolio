import React from 'react'
import propTypes from 'prop-types'

export default function Image ({ src, types, children, ...rest }) {

    return (        
        <>
            <img src={src} {...rest} />                

            <div className="uk-text-center uk-margin-bottom">
                {children}
            </div>
        </>
    )

}

Image.defaultProps = {
    src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
}

Image.propTypes = {
    src: propTypes.string
}