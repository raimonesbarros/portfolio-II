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
  z-index: 99;
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
    column-gap: 0.5rem;

    text-transform: uppercase;
    font-weight: 700;

    a:not(:has(img)) {
      display: flex;
      align-items: center;
      line-height: 100%;

      padding: 0.3rem 0.5rem;
      border-bottom-right-radius: 8px;

      border-bottom: 2px solid transparent;
      border-right: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid ${(p) => p.theme.primary};
        border-right: 2px solid ${(p) => p.theme.primary};
        transition: 4ms;
      }
    }
  }
`
export const Socials = styled.div`
  display: flex;
  gap: 0.5rem;

  cursor: pointer;

  a svg {
    color: ${(p) => p.theme.text};
  }
`
