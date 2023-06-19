import { styled } from 'styled-components'

export const AboutContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 4.75rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const AboutContent = styled.div`
  width: 100%;
  max-width: 1120px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(p) => p.theme.gray600};

  img {
    max-height: 80.5vh;
  }

  p {
    max-width: 500px;

    font-size: 1.25rem;
    font-weight: 100;
    text-align: right;
    line-height: 140%;

    padding-right: 1.5rem;
    color: ${(p) => p.theme.text};
  }
`
export const Button = styled.button`
  padding: 0.75rem 3.5rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 1rem;

  float: right;
  margin-top: 1rem;
  border-radius: 8px;

  background: ${(p) => p.theme.primary};
  color: ${(p) => p.theme.background};

  &:hover {
    opacity: 0.8;
    transition: all 0.2s;
  }
`
