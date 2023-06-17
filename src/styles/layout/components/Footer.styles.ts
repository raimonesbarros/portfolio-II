import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 4.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1120px;

  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(p) => p.theme.background};

  p {
    margin: 0 auto;
    font-weight: 100;
    color: ${(p) => p.theme.text};
  }
`
