import React from 'react'

export default function ListBase ({ children, ...rest }) {

    return (
        <ul className="uk-list uk-list-striped" {...rest}>
            {children}
        </ul>
    )
}
