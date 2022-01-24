import styled, { css, keyframes } from 'styled-components'

interface OpenProp {
  open?: boolean
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

export const SidebarItem = styled.li<OpenProp>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 40px;
  padding: 0 24px;

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
  }

  #explore {
    fill: none;

    stroke: ${({ theme }) => theme.colors.secondary};
  }
`

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 56px);

  background-color: ${({ theme }) => theme.colors.quinary};
`

export const Container = styled.aside<OpenProp>`
  position: fixed;
  top: 56px;
  left: 0;

  width: 240px;
  overflow-y: hidden;

  :hover {
    overflow-y: scroll;
  }

  ::-webkit-scrollbar {
    width: 16px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 16px;
    border: 4px solid ${({ theme }) => theme.colors.quinary};

    background: ${({ theme }) => theme.colors.septenary};
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

      @media screen and (min-width: 800px) {
        width: ${open ? 250 : 72}px;

        ${SidebarItem} {
          align-items: center;
          flex-direction: column;
          justify-content: center;

          padding: 0;
          height: 74px;

          text-align: center;

          svg {
            margin: 0 0 6px 0;
          }

          span {
            min-width: 100%;
            font-size: 1.3rem;
          }
        }
      }
    `}
`
