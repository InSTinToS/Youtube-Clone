import styled, { css } from 'styled-components'

interface OpenProp {
  open?: boolean
}

interface SidebarItemProps extends OpenProp {
  isSelected: boolean
}

export const Footer = styled.div`
  padding: 16px 24px;

  a {
    font-size: 1.3rem;
    font-weight: bold;

    color: ${({ theme }) => theme.colors.nonary};
  }

  span {
    font-size: 1.3rem;
    font-weight: bold;

    color: ${({ theme }) => theme.colors.tertiary};
  }
`

export const UlTitle = styled.span`
  margin: 8px 0 8px 24px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.octonary};
`

export const SidebarItem = styled.li<SidebarItemProps>`
  button {
    display: flex;
    align-items: center;

    width: 100%;
    height: 40px;
    padding: 0 24px;
    cursor: pointer;

    background-color: ${({ theme, isSelected }) =>
      isSelected && theme.colors.quaternary};

    svg,
    img {
      width: 24px;
      height: 24px;
      min-width: 24px;
      min-height: 24px;
      margin-right: 24px;
    }

    img {
      border-radius: 50%;
    }

    svg {
      fill: ${({ theme }) => theme.colors.secondary};
    }

    span {
      display: inline-block;

      min-width: 143px;
      text-align: left;

      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  @media screen and (min-width: 800px) {
    ${({ open }) =>
      !open &&
      css`
        button {
          flex-direction: column;
          justify-content: center;

          padding: 0;
          height: 74px;

          svg {
            margin: 0 0 6px 0;
          }

          span {
            min-width: 100%;

            font-size: 1.3rem;
            text-align: center;
          }
        }
      `}
  }
`

export const Content = styled.div<OpenProp>`
  overflow-y: hidden;
  height: calc(100vh - 56px);
  width: ${({ open }) => (open ? 240 : 72)}px;
  padding-right: ${({ open }) => (open ? 16 : 0)}px;

  background-color: ${({ theme }) => theme.colors.quinary};

  :hover {
    padding: 0;
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    height: 30px;
    border-radius: 16px;

    background: ${({ theme }) => theme.colors.octonary};
    border: 4px solid ${({ theme }) => theme.colors.quinary};
  }

  ul {
    padding: 12px 0;
  }

  ${({ open }) =>
    !open &&
    css`
      :hover {
        overflow-y: hidden;
      }
    `}
`

export const Container = styled.aside`
  position: fixed;
  top: 56px;
  left: 0px;
`
