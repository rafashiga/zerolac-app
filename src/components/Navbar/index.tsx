import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'

import {
  Nav,
  Container,
  Logo,
  NavList,
  NavItem,
  NavLink,
  NavButton
} from './styles'
import './styles.css'

const Navbar: React.FC = () => {
  const location = useLocation()
  const [currentHash, setCurrentHash] = useState('')
  const [showLinks, setShowLinks] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    console.log(location.hash)
    setCurrentHash(location.hash)

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

  const handleNavLink = (hash: string) => {
    setCurrentHash(hash)
  }

  const toggleNavbar = () => {
    setShowLinks(!showLinks)
  }

  return (
    <Nav ref={navbarRef} className="navbar">
      <Container>
        <Logo to="/">Zerolac</Logo>

        <NavButton
          onClick={toggleNavbar}
          type="button"
          aria-label="mostrar ou esconder navbar menu"
        >
          <HiMenu />
        </NavButton>

        <NavList className={showLinks ? 'navbar-open' : 'navbar-close'}>
          <NavItem>
            <NavLink
              to="/#inicio"
              onClick={() => handleNavLink('#inicio')}
              activeClassName={currentHash === '#inicio' ? 'selected' : ''}
            >
              início
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/#sobre"
              onClick={() => handleNavLink('#sobre')}
              activeClassName={currentHash === '#sobre' ? 'selected' : ''}
            >
              sobre
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="#sobre2"
              onClick={() => handleNavLink('#sobre2')}
              activeClassName={currentHash === '#sobre2' ? 'selected' : ''}
            >
              item01
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="#sobre3"
              onClick={() => handleNavLink('#sobre3')}
              activeClassName={currentHash === '#sobre3' ? 'selected' : ''}
            >
              item02
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="#sobre4"
              onClick={() => handleNavLink('#sobre4')}
              activeClassName={currentHash === '#sobre4' ? 'selected' : ''}
            >
              item03
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="#sobre5"
              onClick={() => handleNavLink('#sobre5')}
              activeClassName={currentHash === '#sobre5' ? 'selected' : ''}
            >
              item04
            </NavLink>
          </NavItem>
        </NavList>
      </Container>
    </Nav>
  )
}

export default Navbar
