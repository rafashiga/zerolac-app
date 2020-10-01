import styled from 'styled-components'
import { NavHashLink } from 'react-router-hash-link'
import heroImage from '../../../assets/image/hero.jpg'
import { darken, rem } from 'polished'

export const Container = styled.div`
  height: 90vh;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${heroImage});
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #000;

  @media (max-width: 400px) {
    background-size: 100vh;
  }

  @media (min-width: ${props => props.theme.screen.desktop}) {
    background-image: linear-gradient(to right, #000 10%, transparent 80%),
      url(${heroImage});
    background-repeat: no-repeat;
    background-size: 100vh;
    background-position: right;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const InfoContainer = styled.div`
  width: 450px;
`

export const Title = styled.h2`
  font-size: ${rem(48)};
  font-family: 'Pacifico', cursive;
`

export const Description = styled.h3`
  font-weight: 300;
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 900px) {
    font-size: 1.25rem;
  }
`

export const Link = styled(NavHashLink)`
  cursor: pointer;
  min-width: ${rem(100)};
  font: 400 19px Roboto;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.primary};
  color: #fff;
  transition: background 0.3s;
  text-decoration: none;

  &:hover {
    background: ${props => darken(0.1, props.theme.colors.primary)};
    border: 1px solid ${props => darken(0.1, props.theme.colors.primary)};
  }
`
