import { useNavigate } from 'react-router-dom'
import { Link, animateScroll } from 'react-scroll'
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
  const navigate = useNavigate()
  const [menu, setMenu] = useState('close')

  function navigateToPage(local: string) {
    setMenu('close')
    navigate(local)
    animateScroll.scrollToTop()
  }

  function navigateTo(local: string) {
    setMenu('close')
    navigate(local)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <a onClick={() => navigateToPage('/')}>
          <img src={logo} alt="" />
        </a>
        <Navbar state={menu}>
          <Link
            to={'showcase'}
            smooth={true}
            offset={-76}
            duration={500}
            onClick={() => navigateTo('/')}
          >
            INÍCIO
          </Link>
          <a onClick={() => navigateToPage('/projects')}>PROJETOS</a>
          <a onClick={() => navigateToPage('/blog')}>BLOG</a>
          <Link
            to={'about'}
            smooth={true}
            offset={-76}
            duration={500}
            onClick={() => navigateTo('/')}
          >
            SOBRE
          </Link>
          <Link
            to={'contact'}
            smooth={true}
            duration={500}
            onClick={() => navigateTo('/')}
          >
            CONTATO
          </Link>
          <Socials onClick={() => setMenu('close')}>
            <a
              href="https://www.linkedin.com/in/raimones-barros-b6577492/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://icongr.am/devicon/linkedin-plain.svg?size=20&color=45c7af"
                alt=""
              />
            </a>
            <a
              href="https://github.com/raimonesbarros"
              target="_blank"
              rel="noreferrer"
            >
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
