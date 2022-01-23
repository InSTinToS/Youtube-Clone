import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  padding: 128px 16px 16px 240px;

  background-color: ${({ theme }) => theme.colors.senary};

  ul {
    display: flex;
    flex-wrap: wrap;
  }
`
