import { styled } from 'styled-components'

export const ViewerContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  @media screen and (width > 768px) {
    height: 100%;
  }
`
export const ViewerContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 100%;
  }

  h2 {
    padding: 0.5rem 0;
  }

  p {
    text-align: center;
    margin-top: 0.5rem;
    padding: 0 1.5rem;
  }

  @media screen and (width <= 768px) {
    width: 100%;
    max-width: 600px;
    margin: auto;
  }
`
export const Buttons = styled.div`
  width: 100%;
  padding: 1rem 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    width: 45%;
    padding: 0.5rem;
    border-radius: 8px;
    font-weight: 700;
    text-align: center;
  }

  a:nth-child(1) {
    background: ${(p) => p.theme.primary};
    border: 2px solid ${(p) => p.theme.background};
    color: ${(p) => p.theme.background};

    &:hover {
      opacity: 0.8;
    }
  }

  a:nth-child(2) {
    border: 2px solid ${(p) => p.theme.primary};
    color: ${(p) => p.theme.primary};
    background: ${(p) => p.theme.background};

    &:hover {
      background: ${(p) => p.theme.gray300};
    }
  }
`
