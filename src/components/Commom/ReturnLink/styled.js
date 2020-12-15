import styled from 'styled-components'
import colors from 'utils/colors'

export const Return = styled.button `

  width: 50px;
  height: 50px;
  border-radius: 50%;

  background-color: ${colors.secondary.color};
  border: 1px solid ${colors.tertiary};

  cursor: pointer;
  color: white;  

  &:hover {    
    background-color: ${colors.secondary.hover};
    transition: .5s;    
  }  
`