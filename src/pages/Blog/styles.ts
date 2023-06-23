import { styled } from 'styled-components'

export const BlogContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  min-height: calc(100vh - 4.75rem);

  margin: 4.75rem auto 0;
  padding: 0 0.5rem 2rem;

  display: flex;
  flex-direction: column;
`
export const BlogInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;

  p {
    font-size: 1.15rem;
    font-weight: 700;
    color: ${(p) => p.theme.text};
  }

  span {
    font-size: 0.875rem;
  }
`
export const FormContainer = styled.form`
  input {
    width: 100%;

    padding: 0.6rem 1rem;
    margin-top: 0.75rem;

    border: 1px solid ${(p) => p.theme.gray300};
    border-radius: 6px;

    color: ${(p) => p.theme.text};
    background: ${(p) => p.theme.gray300};

    &::placeholder {
      color: ${(p) => p.theme.gray600};
    }
  }

  button {
    display: none;
  }
`
export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;

  a {
    color: ${(p) => p.theme.text};
  }
`
