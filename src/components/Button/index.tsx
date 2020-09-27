import React from 'react'

import { Container } from './styles'

interface ButtonProps {
  name: string
  [x: string]: any
}

const Button: React.FC<ButtonProps> = ({ name, ...rest }) => {
  return <Container {...rest}>{name}</Container>
}

export default Button
