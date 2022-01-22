import styled from 'styled-components'

const Style = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  background: url('/bg.jpg') no-repeat center;
  background-size: cover;

  > div {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 3rem;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.primary};

    h1,
    h2 {
      font-size: ${({ theme }) => theme.fonts.sizes.md};
    }

    * + * {
      margin-top: 16px;
    }

    img {
      border-radius: 50%;
      width: 100px;

      & + img {
        margin-left: 24px;
      }
    }
  }
`

export default Style
