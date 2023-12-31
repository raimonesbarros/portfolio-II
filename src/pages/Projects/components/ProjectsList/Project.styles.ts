import { styled } from 'styled-components'

export const ProjectContainer = styled.div`
  width: 100%;
  padding: 0.5rem;

  display: flex;
  align-items: center;

  background: ${(p) => p.theme.gray200};
  border-radius: 8px;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${(p) => p.theme.gray800};
  }

  cursor: pointer;

  img {
    width: 10rem;
  }
`
export const ProjectInfo = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`
