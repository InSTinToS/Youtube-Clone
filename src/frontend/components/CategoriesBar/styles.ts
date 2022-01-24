import styled, { css } from 'styled-components'

interface ContainerProps {
  sidebarOpen: boolean
}

export const Category = styled.li`
  white-space: nowrap;

  & + li {
    margin-left: 12px;
  }

  button {
    height: 32px;
    padding: 0px 12px;
    border-radius: 16px;

    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.quaternary};
  }
`

export const Container = styled.ul<ContainerProps>`
  position: fixed;
  top: 56px;
  left: 0px;

  display: flex;
  align-items: center;

  margin: 0;
  height: 56px;
  width: 100vw;

  background-color: ${({ theme }) => theme.colors.quinary};
  border-top: solid 1px ${({ theme }) => theme.colors.tertiary};
  border-bottom: solid 1px ${({ theme }) => theme.colors.tertiary};

  > div {
    position: absolute;
    top: 50%;
    z-index: 1;

    width: 56px;
    height: 100%;

    &#left {
      display: none;

      left: 0;
      transform: rotate(180deg) translateY(50%);
    }

    &#right {
      right: 0;
      transform: translateY(-50%);
    }

    button {
      width: 100%;
      opacity: 0.9;
      filter: blur(4px);
      height: calc(100% - 4px);
      border-radius: 16px 0 0 16px;

      background-color: ${({ theme }) => theme.colors.quinary};
    }

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;

      width: 16px;
      height: 16px;
      transform: translate(-50%, -50%);

      fill: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media screen and (min-width: 800px) {
    ${({ sidebarOpen }) => css`
      width: ${`calc(100vw - ${sidebarOpen ? '240px' : '72px'})`};
      left: ${sidebarOpen ? 240 : 72}px;
    `}
  }
`
