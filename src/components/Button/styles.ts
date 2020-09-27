import styled from 'styled-components'
import { darken, rem } from 'polished'

export const Container = styled.button`
  cursor: pointer;
  min-width: ${rem(100)};
  font: 400 19px Roboto;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  color: #fff;
  transition: background 0.3s;

  &:hover {
    background: ${props => darken(0.1, props.theme.colors.primary)};
    border: 1px solid ${props => darken(0.1, props.theme.colors.primary)};
  }
`
