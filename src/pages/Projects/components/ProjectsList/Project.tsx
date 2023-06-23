import { ProjectContainer, ProjectInfo } from './Project.styles'

interface ProjectProps {
  image: string
  title: string
  smallDescription: string
  tags: string[]
  position: number
  onProjectToSee: (index: number) => void
}

export function Project({
  image,
  title,
  smallDescription,
  tags,
  position,
  onProjectToSee,
}: ProjectProps) {
  return (
    <ProjectContainer onClick={() => onProjectToSee(position)}>
      <img src={image} alt="" />
      <ProjectInfo>
        <h3>{title}</h3>
        <p>{smallDescription}</p>
        <div>
          <span>{tags[0]}</span>
          <span>{tags[1]}</span>
        </div>
      </ProjectInfo>
    </ProjectContainer>
  )
}
