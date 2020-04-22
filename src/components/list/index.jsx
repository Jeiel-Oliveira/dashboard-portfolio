import React from 'react'

export default function ListBase ({ children, ...rest }) {

    return (
        <ul class="uk-list uk-list-striped" {...rest}>
            {children}
        </ul>
    )
}
