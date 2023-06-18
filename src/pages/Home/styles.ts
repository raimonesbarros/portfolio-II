import { styled } from 'styled-components'

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;
  flex-wrap: wrap;

  margin-top: 1rem;

  font-size: 2rem;
  font-weight: 100;
  color: ${(p) => p.theme.text};
`
