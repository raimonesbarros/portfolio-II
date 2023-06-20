import { ArrowCircleUp } from '@phosphor-icons/react'
import { FooterContainer, FooterContent } from './Footer.styles'
import logo from '../../../assets/logo.svg'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>
          <strong>
            <img src={logo} alt="" /> &copy; 2023
          </strong>{' '}
          | <span>Todos os direitos reservados</span>
        </p>
        <a href="#">
          <ArrowCircleUp size={35} />
        </a>
      </FooterContent>
    </FooterContainer>
  )
}
