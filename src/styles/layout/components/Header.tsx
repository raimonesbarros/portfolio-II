import { NavLink, Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'
import { HeaderContainer, HeaderContent, Socials } from './Header.styles'
import { Sun } from '@phosphor-icons/react'

export function Header() {
  function handleChangeTheme() {
    console.log('Mudou o thema')
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to={'/'}>
          <img src={logo} alt="" />
        </Link>
        <nav>
          <NavLink to={'#showcase'}>INÍCIO</NavLink>
          <NavLink to={'/projects'}>PROJETOS</NavLink>
          <NavLink to={'/blog'}>BLOG</NavLink>
          <NavLink to={'/#about'}>SOBRE</NavLink>
          <NavLink to={'/#contact'}>CONTATO</NavLink>
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
            <Sun onClick={() => handleChangeTheme()} size={20} />
          </Socials>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
