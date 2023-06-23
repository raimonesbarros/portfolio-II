import { NavLink, Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import {
  BtnMenu,
  HeaderContainer,
  HeaderContent,
  Navbar,
  Socials,
} from './Header.styles'
import { List, X } from '@phosphor-icons/react'
import { useState } from 'react'

export function Header() {
  const [menu, setMenu] = useState('close')

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
        <Navbar state={menu}>
          <NavLink to={'/'}>INÍCIO</NavLink>
          <NavLink to={'/projects'}>PROJETOS</NavLink>
          <NavLink to={'/blog'}>BLOG</NavLink>
          <a href="/#about">SOBRE</a>
          <a href="/#contact">CONTATO</a>
          <Socials>
            <a href="https://www.linkedin.com/in/raimones-barros-b6577492/">
              <img
                src="https://icongr.am/devicon/linkedin-plain.svg?size=20&color=45c7af"
                alt=""
              />
            </a>
            <a href="https://github.com/raimonesbarros">
              <img
                src="https://icongr.am/fontawesome/github.svg?size=20&color=45c7af"
                alt=""
              />
            </a>
          </Socials>
        </Navbar>
        <BtnMenu>
          {menu === 'close' ? (
            <List size={40} weight="bold" onClick={() => setMenu('open')} />
          ) : (
            <X size={40} weight="bold" onClick={() => setMenu('close')} />
          )}
        </BtnMenu>
      </HeaderContent>
    </HeaderContainer>
  )
}
