import { useState } from 'react'
import { Title } from '../Home/styles'
import { ProjectsList } from './components/ProjectsList'
import { Viewer } from './components/Viewer'
import { ProjectsContainer, ProjectsContent, ProjectsSection } from './styles'
import { projectsData } from '../../projectsData'

export function Projects() {
  const [current, setCurrent] = useState(0)

  function handleProjectToSee(index: number) {
    setCurrent(index)
  }

  return (
    <ProjectsSection>
      <ProjectsContainer>
        <Title>
          <span>alguns dos meus</span>
          <strong>Projetos</strong>
        </Title>
        <ProjectsContent>
          <Viewer
            image={projectsData[current].image}
            title={projectsData[current].title}
            tags={projectsData[current].tags}
            fullDescription={projectsData[current].fullDescription}
            deploy={projectsData[current].deploy}
            repository={projectsData[current].repository}
          />
          <ProjectsList projectToSee={handleProjectToSee} />
        </ProjectsContent>
      </ProjectsContainer>
    </ProjectsSection>
  )
}
