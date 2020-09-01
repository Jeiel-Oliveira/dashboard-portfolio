import styled from 'styled-components'

export const Card = styled.div `
  
  background: linear-gradient(180deg, ${props => props.color} 20%, white 100%);

  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
  padding: 15px;
  border-radius: 15px;
`