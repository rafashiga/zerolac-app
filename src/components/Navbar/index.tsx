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
    let nav = navbarRef.current

    if (!location.pathname.includes('/detail')) {
      if (nav) nav.className = 'navbar'
      window.addEventListener('scroll', handleScroll)
      setCurrentHash(location.hash)

      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      if (nav) {
        nav.className = 'navbar scroll'
      }
    }
  }, [location.hash, location.pathname])

  const handleScroll = () => {
    let nav = navbarRef.current

    if (nav) {
      nav.className = window.scrollY > 240 ? 'navbar scroll' : 'navbar'
    }
  }

  const handleNavLink = (hash: string) => {
    setCurrentHash(hash)
    toggleNavbar()
    document.getElementById('btn-' + hash.replace('#', ''))?.focus()
  }

  const toggleNavbar = () => {
    setShowLinks(!showLinks)
  }

  const handleScrollSpy = () => {
    setCurrentHash('')
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
          <NavList
            className="navbar__list"
            items={[
              'inicio',
              'apresentacao',
              'leite',
              'intolerancia',
              'processo',
              'rotulo'
            ]}
            currentClassName="active"
            onUpdate={handleScrollSpy}
            scrolledPastClassName=""
          >
            <NavItem>
              <NavLink
                to="/#inicio"
                onClick={() => handleNavLink('#inicio')}
                activeClassName={currentHash === '#inicio' ? 'active' : ''}
              >
                início
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/#apresentacao"
                onClick={() => handleNavLink('#apresentacao')}
                activeClassName={
                  currentHash === '#apresentacao' ? 'active' : ''
                }
              >
                apresentação
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#leite"
                onClick={() => handleNavLink('#leite')}
                activeClassName={currentHash === '#leite' ? 'active' : ''}
              >
                leite
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#intolerancia"
                onClick={() => handleNavLink('#intolerancia')}
                activeClassName={
                  currentHash === '#intolerancia' ? 'active' : ''
                }
              >
                intolerância
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#processo"
                onClick={() => handleNavLink('#processo')}
                activeClassName={currentHash === '#processo' ? 'active' : ''}
              >
                processo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="#rotulo"
                onClick={() => handleNavLink('#rotulo')}
                activeClassName={currentHash === '#rotulo' ? 'active' : ''}
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
