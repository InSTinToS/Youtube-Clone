import styled from 'styled-components'

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

export const SidebarItem = styled.li`
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
`

export const Container = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  bottom: 0;

  width: 240px;
  overflow-y: hidden;

  background-color: ${({ theme }) => theme.colors.quinary};

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
`
