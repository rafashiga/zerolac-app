import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import Scrollspy from 'react-scrollspy'
import styled from 'styled-components'
import { rem } from 'polished'

export const Nav = styled.nav``

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  min-height: 56px;

  @media (min-width: 900px) {
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65%;
  }
`

export const Logo = styled(Link)`
  font-size: 2.1rem;
  font-family: 'Pacifico', cursive;
  text-decoration: none;
  color: #fff;
  position: absolute;
  top: 8px;

  @media (min-width: 900px) {
    position: relative;
    top: 0;
  }
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
  top: 1rem;
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

export const NavListContainer = styled.div`
  transition: max-height 1s ease-out, opacity 1.4s;
  margin-top: 4.2rem;

  &.navbar-close {
    visibility: hidden;
    opacity: 0;
    max-height: 0;
  }

  &.navbar-open {
    visibility: visible;
    opacity: 1;
    max-height: 500px;
  }

  @media (min-width: 900px) {
    margin-top: 0;

    &.navbar-close,
    &.navbar-open {
      visibility: visible;
      opacity: 1;
      max-height: ${rem(60)};
    }
  }
`

export const NavList = styled(Scrollspy)`
  list-style: none;

  @media (min-width: 900px) {
    display: flex;
  }
`

export const NavItem = styled.li`
  font-size: 1.125rem;
  margin-bottom: 1rem;

  &:first-child {
    margin-top: 1rem;
  }

  &.active a {
    color: ${props => props.theme.colors.primary};
    border-bottom: 4px solid ${props => props.theme.colors.primary};
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

  &:hover {
    color: ${props => props.theme.colors.primary};
    border-bottom: 4px solid ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
    border-bottom: 4px solid ${props => props.theme.colors.primary};
  }
`
