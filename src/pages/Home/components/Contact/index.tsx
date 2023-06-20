import {
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from '@phosphor-icons/react'
import { Title } from '../../styles'
import {
  ContactCard,
  ContactContainer,
  ContactSection,
  ContactsList,
} from './styles'

export function Contact() {
  return (
    <ContactSection>
      <ContactContainer>
        <Title>
          <span>entre em</span> <strong>Contato</strong> <span>comigo</span>
        </Title>
        <ContactsList>
          <ContactCard title="WhatsApp">
            <a href="https://wa.link/vr2jtk">
              <WhatsappLogo size={50} weight="thin" />
              <p>63 9 9230-4536</p>
            </a>
          </ContactCard>
          <ContactCard title="Email">
            <a href="mailto:raimonesrg3@gmail.com">
              <EnvelopeSimple size={50} weight="thin" />
              <p>raimonesrg3</p>
            </a>
          </ContactCard>
          <ContactCard title="Linkedin">
            <a href="https://www.linkedin.com/in/raimones-barros-b6577492/">
              <LinkedinLogo size={50} weight="thin" />
              <p>Raimones Barros</p>
            </a>
          </ContactCard>
          <ContactCard title="Instagram">
            <a href="https://www.instagram.com/silvabarross/">
              <InstagramLogo size={50} weight="thin" />
              <p>@silvabarross</p>
            </a>
          </ContactCard>
        </ContactsList>
      </ContactContainer>
    </ContactSection>
  )
}
