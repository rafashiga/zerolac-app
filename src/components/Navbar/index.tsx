import React, { useEffect, useRef } from 'react'

import { Nav, Container, Logo, NavList, NavItem, NavLink } from './styles'
import './styles.css'

const Navbar: React.FC = () => {
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    let nav = navbarRef.current

    if (nav) {
      if (window.scrollY > 240) {
        nav.className = 'navbar scroll'
      } else {
        nav.className = 'navbar'
      }
    }
  }

  return (
    <Nav ref={navbarRef} className="navbar">
      <Container>
        <Logo to="/">Zerolac</Logo>
        <NavList>
          <NavItem>
            <NavLink href="#inicio">início</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#sobre">sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#sobre2">item01</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#sobre2">item02</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#sobre2">item03</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#sobre2">item04</NavLink>
          </NavItem>
        </NavList>
      </Container>
    </Nav>
  )
}

export default Navbar
