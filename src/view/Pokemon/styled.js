import styled from 'styled-components'

export const TypeSpan = styled.div `
  padding: 5px 15px;
  border-radius: 10px;

  border: 1px solid black;
  background: ${props => props.color};

  font-size: 1.2rem;
  color: white;
  margin: 0 15px;
`