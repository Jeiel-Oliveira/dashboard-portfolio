import styled from 'styled-components'

export const Card = styled.div `
    background-color: ${props => props.color};
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    padding: 15px;
    border-radius: 15px;
`