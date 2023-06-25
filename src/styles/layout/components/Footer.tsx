import { ArrowCircleUp } from '@phosphor-icons/react'
import { FooterContainer, FooterContent } from './Footer.styles'
import logo from '../../../assets/logo.svg'
import { animateScroll } from 'react-scroll'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>
          <strong>
            <img src={logo} alt="" /> &copy; 2022 - {new Date().getFullYear()}
          </strong>{' '}
          | <span>Todos os direitos reservados</span>
        </p>
        <a onClick={animateScroll.scrollToTop}>
          <ArrowCircleUp size={40} />
        </a>
      </FooterContent>
    </FooterContainer>
  )
}
