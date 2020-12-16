import React from 'react'
import { SInput } from './styled'

interface IInput {
  type: string
  color: string
  rest: any
}

function Input(props: IInput) {

  const { type, color, ...rest } = props

  return (
    <SInput type={type} color={color} {...rest} />
  )
}

export default Input