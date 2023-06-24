import { projectsData } from '../../../../projectsData'
import { Project } from './Project'
import { ProjectsListContainer } from './styles'

interface ProjectListProps {
  projectToSee: (index: number) => void
}

export function ProjectsList({ projectToSee }: ProjectListProps) {
  return (
    <ProjectsListContainer>
      {projectsData.map((project, i) => {
        return (
          <Project
            key={project.id}
            image={project.image}
            title={project.title}
            smallDescription={project.smallDescription}
            position={i}
            onProjectToSee={projectToSee}
          />
        )
      })}
    </ProjectsListContainer>
  )
}
