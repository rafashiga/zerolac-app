import React from 'react'

import { Container } from './styles'

interface ButtonProps {
  label: string
  [x: string]: any
}

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return <Container {...rest}>{label}</Container>
}

export default Button
