import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  margin: 0 auto;

  width: 100%;
  height: 4.75rem;

  display: flex;
  justify-content: center;

  background: ${(p) => p.theme.background};
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;

  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    width: 7.8rem;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    text-transform: uppercase;
    font-weight: 700;

    a {
      display: flex;
      align-items: center;
      line-height: 100%;
    }
  }
`
export const Socials = styled.div`
  display: flex;
  gap: 0.5rem;

  cursor: pointer;

  a svg {
    color: ${(p) => p.theme.primary};

    svg:last-child {
      color: ${(p) => p.theme.text};
    }
  }
`
