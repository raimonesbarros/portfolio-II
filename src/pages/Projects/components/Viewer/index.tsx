import { Buttons, ViewerContainer, ViewerContent } from './styles'

interface ViewerProps {
  image: string
  title: string
  tags: string[]
  fullDescription: string
  deploy: string
  repository: string
}

export function Viewer({
  image,
  title,
  tags,
  fullDescription,
  deploy,
  repository,
}: ViewerProps) {
  return (
    <ViewerContainer>
      <ViewerContent>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <div>
          <span>{tags[0]}</span>
          <span>{tags[1]}</span>
        </div>
        <p>{fullDescription}</p>
        <Buttons>
          <a href={deploy} target="_blank" rel="noreferrer">
            Ver mais
          </a>
          <a href={repository} target="_blank" rel="noreferrer">
            Projeto
          </a>
        </Buttons>
      </ViewerContent>
    </ViewerContainer>
  )
}
