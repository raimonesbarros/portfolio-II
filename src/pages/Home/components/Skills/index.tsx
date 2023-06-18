import { Code, Devices, HandTap, Layout } from '@phosphor-icons/react'
import { Title } from '../../styles'
import {
  Card,
  Cards,
  SkillsContainer,
  SkillsContent,
  Techs,
  TechsContent,
} from './styles'

export function Skills() {
  return (
    <SkillsContainer>
      <SkillsContent>
        <Title>
          <span>algumas</span>
          <strong>Habilidades</strong>
        </Title>
        <Cards>
          <Card>
            <h3>
              <Code size={32} />
              <strong>Código semântico</strong>
            </h3>
            <p>
              Estrutura descritiva clara e objetiva para facilitar a leitura e
              interpretação, especialmente de motores de busca
            </p>
          </Card>
          <Card>
            <h3>
              <Devices size={32} />
              <strong>Responsividade</strong>
            </h3>
            <p>
              Estilos preparados para se adaptar aos diferentes softwares e
              dispositivos
            </p>
          </Card>
          <Card>
            <h3>
              <Layout size={32} />
              <strong>Design atrativo</strong>
            </h3>
            <p>
              Criação visual utilizando técnicas de design como psicologia das
              cores, tipografia, hierarquia e etc...
            </p>
          </Card>
          <Card>
            <h3>
              <HandTap size={32} />
              <strong>Dinamicidade</strong>
            </h3>
            <p>
              Uso de métodos dinâmicos e de interatividade com o usuário para
              garantir a melhor experiência
            </p>
          </Card>
        </Cards>
      </SkillsContent>
      <TechsContent>
        <Title>
          <strong>Tecnologias</strong>
          <span>que estou utilizando</span>
        </Title>
        <Techs>
          <img
            src="https://icongr.am/material/language-html5.svg?size=70&color=45c7af"
            alt=""
          />
          <img
            src="https://icongr.am/devicon/css3-plain.svg?size=55&color=45c7af"
            alt=""
          />
          <img
            src="https://icongr.am/material/language-javascript.svg?size=70&color=45c7af"
            alt=""
          />
          <img
            src="https://icongr.am/material/react.svg?size=70&color=45c7af"
            alt=""
          />
          <img
            src="https://icongr.am/material/language-typescript.svg?size=70&color=45c7af"
            alt=""
          />
          <img
            src="https://icongr.am/feather/figma.svg?size=55&color=45c7af"
            alt=""
          />
          <img
            src="https://icongr.am/material/git.svg?size=70&color=45c7af"
            alt=""
          />
          <img
            src="https://icongr.am/material/github.svg?size=70&color=45c7af"
            alt=""
          />
        </Techs>
      </TechsContent>
    </SkillsContainer>
  )
}
