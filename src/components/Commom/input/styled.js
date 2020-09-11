import styled from 'styled-components'

export const Input = styled.input `
    background: transparent;
    padding: 10px;
    border-bottom: 2px solid ${ props => props.color };
    border-radius: 10px;
    font-size: 1.1rem;
    height: $base-input-heigth;
`