import styled, { css } from 'styled-components'

interface ContainerProps {
  sidebarOpen: boolean
}

export const Container = styled.section<ContainerProps>`
  width: 100vw;
  height: 100%;
  min-height: 100vh;

  padding: 128px 16px 16px 0;

  background-color: ${({ theme }) => theme.colors.senary};

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 800px) {
    padding-left: ${({ sidebarOpen }) => (sidebarOpen ? 240 : 72)}px;
  }
`
