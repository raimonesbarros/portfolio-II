import { styled } from 'styled-components'

export const ProjectsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow: auto;
  border-bottom: 2px solid ${(p) => p.theme.gray600};

  @media screen and (width > 768px) {
    width: 80%;
    max-height: calc(100vh - 10rem);
  }
  @media screen and (width <= 768px) {
    width: 100%;
    max-height: calc(100vh - 25rem);
    max-width: 600px;
    margin: auto;
  }
`
