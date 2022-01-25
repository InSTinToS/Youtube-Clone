import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 24px 0;

  height: 100vh;
  overflow-y: scroll;

  background-color: #120022;

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    height: 30px;
    border-radius: 16px;

    background: #fff;
    border: 4px solid #551a8b;
  }

  section {
    width: 80%;

    & + * {
      margin-top: 24px;
    }

    h2 {
      font-size: 2.5rem;
    }

    form {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      padding: 16px;
      margin-bottom: 24px;
      border-radius: 4px;

      background-color: #551a8b;

      > * {
        width: 100%;

        + * {
          margin-top: 16px;
        }
      }

      > button {
        padding: 8px;
        border-radius: 4px;

        color: #fff;
        background-color: #aa4eff;
      }
    }
  }
`
