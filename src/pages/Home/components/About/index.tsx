import { FilePdf } from '@phosphor-icons/react'
import { Title } from '../../styles'
import { AboutContainer, AboutContent, Button } from './styles'
import me from '../../../../assets/me.png'

export function About() {
  return (
    <AboutContainer>
      <Title>
        <span>um pouco</span>
        <strong>Sobre mim</strong>
      </Title>
      <AboutContent>
        <img src={me} alt="" />
        <p>
          Eu sou o <strong>Raimones</strong>, tenho <strong>27 anos</strong> de
          idade. <strong>Profissional do comércio</strong>, entusiasta de
          tecnologia, em <strong>transição de carreira.</strong>
          <br />
          <br />
          Autodidata por necessidade, possuo conhecimentos na área de{' '}
          <strong>Tecnologia da informação</strong>: Montagem e manutenção de
          computadores, Hardwares e Softwares e focado em{' '}
          <strong>Desenvolvimento Front-end.</strong>
          <br />
          <br />
          Busco uma <strong>oportunidade</strong> de atuar no mercado de
          desenvolvimento e <strong>aprender</strong> muito mais do que escrever
          códigos.
          <br />
          <Button>
            <FilePdf size={25} />
            CURRICULUM
          </Button>
        </p>
      </AboutContent>
    </AboutContainer>
  )
}
