import styled from 'styled-components';

export const ButtonNumber = styled.button `
  width: 50px;
  height: 50px;

  background: ${props => props.active ? "Blue" : ":"}
`

export const Wrapper = styled.div `
  margin: 15px 0;
`