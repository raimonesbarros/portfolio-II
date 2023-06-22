import { FilePdf } from '@phosphor-icons/react'
import { Title } from '../../styles'
import { AboutSection, AboutContent, Button, AboutContainer } from './styles'
import me from '../../../../assets/me.png'

export function About() {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <Title>
          <span>um pouco</span>
          <strong>Sobre mim</strong>
        </Title>
        <img src={me} alt="" />
        <AboutContent>
          <p>
            Eu sou o <strong>Raimones</strong>, tenho <strong>27 anos</strong>{' '}
            de idade. <strong>Profissional do comércio</strong> há 10 anos,
            entusiasta de tecnologia, em <strong>transição de carreira.</strong>
            <br />
            <br />
            Autodidata por necessidade, possuo conhecimentos na área de{' '}
            <strong>Tecnologia da informação</strong>: Montagem e manutenção de
            computadores, Hardwares e Softwares.
            <br />
            <br />E focado em <strong>Desenvolvimento Front-end</strong>, busco
            uma <strong>oportunidade</strong> de atuar nesse mercado e{' '}
            <strong>aprender muito mais</strong> do que escrever códigos.
            <br />
            <Button>
              <FilePdf size={25} />
              CURRICULUM
            </Button>
          </p>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  )
}
