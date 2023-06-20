import { styled } from 'styled-components'

export const ContactSection = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
`
export const ContactContainer = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 1px solid ${(p) => p.theme.gray600};
`
export const ContactsList = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;

  padding: 1rem 0;
`
export const ContactCard = styled.div`
  width: 100%;
  max-width: 170px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  padding: 1rem 0;

  svg {
    color: ${(p) => p.theme.primary};
  }

  p {
    padding: 0.5rem 0;
  }
`
