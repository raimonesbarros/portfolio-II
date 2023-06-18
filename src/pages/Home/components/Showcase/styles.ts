import { styled } from 'styled-components'

export const ShowcaseContainer = styled.div`
  width: 100%;
  position: relative;
  min-height: calc(100vh - 4.75rem);
  margin-top: 4.75rem;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ShowcaseContent = styled.div`
  width: 100%;
  max-width: 1120px;
  height: calc(100vh - 4.75rem);

  padding: 0 1rem;

  border-bottom: 1px solid ${(p) => p.theme.gray600};
  background: url('/src/assets/dummy.png') no-repeat right bottom;

  display: flex;
  align-items: center;

  svg {
    @keyframes arrow {
      from {
        bottom: 7%;
      }
      to {
        bottom: 10%;
      }
    }

    width: 2em;
    position: absolute;
    bottom: 6%;
    left: 50%;
    transform: translateX(-50%);
    animation: arrow 0.6s 4.5s alternate infinite;
    color: ${(p) => p.theme.primary};
  }
`
export const ShowcaseDescription = styled.div`
  @keyframes appear {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes writing {
    0% {
      width: 0;
      border-right: 2px solid ${(p) => p.theme.gray600};
    }
    100% {
      border-right: 2px solid ${(p) => p.theme.gray600};
    }
  }

  @keyframes cursors {
    from {
      border-right-color: ${(p) => p.theme.text};
    }
    to {
      border-right-color: transparent;
    }
  }

  padding-left: 20%;

  p {
    font-size: 1.3rem;
    font-weight: 100;
    color: ${(p) => p.theme.gray600};
    white-space: nowrap;
    overflow: hidden;
  }

  p:nth-child(2) {
    width: 9.5rem;
    animation: appear 1.1s normal, cursors 0.5s infinite normal,
      writing 1s 1s steps(9) normal;
  }
  p:nth-child(4) {
    width: 14rem;
    animation: appear 2.2s normal, cursors 0.5s infinite normal,
      writing 1s 2.1s steps(12) normal;
  }
  p:nth-child(6) {
    width: 9.6rem;
    border-right: 3px solid ${(p) => p.theme.text};
    animation: appear 3.3s normal, cursors 0.5s infinite normal,
      writing 1s 3.2s steps(9) normal;
  }
`
export const Strong = styled.strong`
  color: ${(p) => p.theme.text};
  font-size: 2rem;
`