import { styled } from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  height: 4.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
`

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1120px;

  padding: 0 1rem;
  line-height: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${(p) => p.theme.background};

  svg {
    color: ${(p) => p.theme.primary};
  }

  p {
    margin: 0 auto;
    font-weight: 100;
    color: ${(p) => p.theme.text};
    line-height: 1;

    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    strong {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      line-height: 1;
    }

    img {
      height: 0.875rem;
      display: flex;
      align-items: center;
    }
  }
`
