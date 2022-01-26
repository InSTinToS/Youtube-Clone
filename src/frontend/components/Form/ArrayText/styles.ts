import styled from 'styled-components'

export const Container = styled.fieldset`
  border: none;

  legend {
    font-size: 1.9rem;
    margin: 0;
  }

  button img {
    width: 24px;
  }

  ul {
    padding: 16px 0;
    max-height: 300px;

    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 16px;
    }

    ::-webkit-scrollbar-thumb {
      height: 30px;
      border-radius: 16px;

      background: #fff;
      border: 4px solid #551a8b;
    }

    li {
      display: flex;
      align-items: center;

      padding: 24px;
      border: solid 1px #fff;

      margin-bottom: 24px;

      div {
        display: flex;
        align-items: center;
        flex-direction: column;

        flex: 1;

        margin-right: 24px;

        > * {
          width: 100%;

          + * {
            margin-top: 8px;
          }
        }
      }
    }
  }

  #add {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
  }
`
