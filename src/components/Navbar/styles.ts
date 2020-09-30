import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import styled from 'styled-components'

export const Nav = styled.nav``

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;

  @media (min-width: 900px) {
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65%;
  }
`

export const Logo = styled(Link)`
  font-size: 2rem;
  text-decoration: none;
  color: #fff;
`

export const NavButton = styled.button`
  font-size: 1.25rem;
  background: none;
  border: 0;
  border-radius: 5px;
  color: #fff;
  padding: 4px 4px 0 4px;
  border: 1px solid #fff;
  position: absolute;
  right: 0;
  top: 3px;
  cursor: pointer;
  transition: background 0.2s;
  font-weight: 600;

  &:hover,
  &:focus {
    background: #f0f0f0;
    color: #000;
  }

  @media (min-width: 900px) {
    display: none;
  }
`

export const NavList = styled.ul`
  list-style: none;
  transition: all 0.2s;

  &.navbar-close {
    display: none;
  }

  &.navbar-open {
    display: initial;
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  @media (min-width: 900px) {
    display: flex;

    &.navbar-close {
      display: flex;
    }

    &.navbar-open {
      display: flex;
    }
  }
`

export const NavItem = styled.li`
  font-size: 1.125rem;
  margin-bottom: 1rem;

  &:first-child {
    margin-top: 1rem;
  }

  @media (min-width: 900px) {
    margin: 0;
    margin-right: 1rem;

    &:first-child {
      margin-top: 0;
    }
  }
`

export const NavLink = styled(NavHashLink)`
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s;
  text-decoration: none;
  color: #fff;

  &:hover,
  &:active,
  &:focus {
    color: ${props => props.theme.colors.primary};
    border-bottom: 4px solid ${props => props.theme.colors.primary};
  }

  &.selected {
    color: ${props => props.theme.colors.primary};
    border-bottom: 4px solid ${props => props.theme.colors.primary};
  }
`
