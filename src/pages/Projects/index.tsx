import { Title } from '../Home/styles'
import { ProjectsList } from './components/ProjectsList'
import { Viewer } from './components/Viewer'
import { ProjectsContainer, ProjectsContent, ProjectsSection } from './styles'

export function Projects() {
  return (
    <ProjectsSection>
      <ProjectsContainer>
        <Title>
          <span>alguns dos meus</span>
          <strong>Projetos</strong>
        </Title>
        <ProjectsContent>
          <Viewer />
          <ProjectsList />
        </ProjectsContent>
      </ProjectsContainer>
    </ProjectsSection>
  )
}
