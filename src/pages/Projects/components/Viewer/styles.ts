import { styled } from 'styled-components'

export const ViewerContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`
export const ViewerContent = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    width: 100%;
  }

  p {
    text-align: justify;
    padding: 0 1rem;
  }
`
export const Buttons = styled.div`
  width: 100%;
  transform: translatey(-60%);
  margin-top: -3rem;

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
