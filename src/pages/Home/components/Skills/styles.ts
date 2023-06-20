import { styled } from 'styled-components'

export const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  min-height: calc((100vh - 4.75rem) / 2);
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
`
export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  row-gap: 2rem;
  column-gap: 1rem;
  flex-wrap: wrap;
`
export const Card = styled.div`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  h3 {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      color: ${(p) => p.theme.primary};
    }
  }

  p {
    text-align: center;
    font-weight: 100;
    padding: 0 0.5rem;
    letter-spacing: 0.06rem;
    color: ${(p) => p.theme.text};
  }
`
export const TechsContent = styled.div`
  width: 100%;
  max-width: 1120px;
  min-height: calc((100vh - 4.75rem) / 2);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  border-bottom: 1px solid ${(p) => p.theme.gray600};
`
export const Techs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  padding: 1rem 3rem;
`
