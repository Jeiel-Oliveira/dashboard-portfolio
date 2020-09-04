import styled from 'styled-components'

export const Card = styled.div `
    border: 3px solid black;
    padding: 15px;
    border-radius: 10px;
    background-color: ${props => props.color};
`

export const Title = styled.h3 `
    font-weight: bolder;
    text-transform: uppercase;
    margin-bottom: 0;
`