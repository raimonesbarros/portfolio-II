import { ProjectContainer, ProjectInfo } from './Project.styles'

interface ProjectProps {
  image: string
  title: string
  smallDescription: string
  position: number
  onProjectToSee: (index: number) => void
}

export function Project({
  image,
  title,
  smallDescription,
  position,
  onProjectToSee,
}: ProjectProps) {
  return (
    <ProjectContainer onClick={() => onProjectToSee(position)}>
      <img src={image} alt="" />
      <ProjectInfo>
        <h3>{title}</h3>
        <p>{smallDescription}</p>
      </ProjectInfo>
    </ProjectContainer>
  )
}
