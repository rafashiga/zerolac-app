import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav``

export const Container = styled.div`
  height: 56px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 700px) {
    width: 65%;
  }
`

export const Logo = styled(Link)`
  font-size: 2.125rem;
  text-decoration: none;
  color: #fff;
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
`

export const NavItem = styled.li`
  margin-right: 1rem;
  font-size: 1.125rem;
`

export const NavLink = styled.a`
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s;
  text-decoration: none;
  color: #fff;
  outline: none;

  &:hover,
  &:active,
  &:focus {
    color: ${props => props.theme.colors.primary};
    border-bottom: 4px solid ${props => props.theme.colors.primary};
  }
`
