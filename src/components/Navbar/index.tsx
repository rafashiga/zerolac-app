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
  NavButton,
  NavListContainer
} from './styles'
import './styles.css'

const Navbar: React.FC = () => {
  const location = useLocation()
  const [currentHash, setCurrentHash] = useState('')
  const [showLinks, setShowLinks] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (location.pathname !== '/detail') {
      window.addEventListener('scroll', handleScroll)
      setCurrentHash(location.hash)

      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      let nav = navbarRef.current

      if (nav) {
        nav.className = 'navbar scroll'
      }
    }
  }, [location.hash])

  const handleScroll = () => {
    let nav = navbarRef.current

    if (nav) {
      nav.className = window.scrollY > 240 ? 'navbar scroll' : 'navbar'
    }
  }

  const handleNavLink = (hash: string) => {
    setCurrentHash(hash)
    document.getElementById('btn-' + hash.replace('#', ''))?.focus()
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

        <NavListContainer
          className={showLinks ? 'navbar-open' : 'navbar-close'}
        >
          <NavList>
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
                to="/#apresentacao"
                onClick={() => handleNavLink('#apresentacao')}
                activeClassName={
                  currentHash === '#apresentacao' ? 'selected' : ''
                }
              >
                apresentação
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#leite"
                onClick={() => handleNavLink('#leite')}
                activeClassName={currentHash === '#leite' ? 'selected' : ''}
              >
                leite
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#intolerancia"
                onClick={() => handleNavLink('#intolerancia')}
                activeClassName={
                  currentHash === '#intolerancia' ? 'selected' : ''
                }
              >
                intolerância
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#processo"
                onClick={() => handleNavLink('#processo')}
                activeClassName={currentHash === '#processo' ? 'selected' : ''}
              >
                processo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#rotulo"
                onClick={() => handleNavLink('#rotulo')}
                activeClassName={currentHash === '#rotulo' ? 'selected' : ''}
              >
                rótulo
              </NavLink>
            </NavItem>
          </NavList>
        </NavListContainer>
      </Container>
    </Nav>
  )
}

export default Navbar
