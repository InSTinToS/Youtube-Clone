import {
  Hamburger as HamburgerIcon,
  Youtube as YoutubeIcon
} from '../../assets/icons'

import styled from 'styled-components'

export const UserTools = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: none;
  }

  #avatar {
    width: 32px;
    margin: 0 14px;
    border-radius: 50%;
  }

  @media screen and (min-width: 520px) {
    svg {
      display: block;

      width: 24px;
      margin: 0 8px;
    }
  }

  @media screen and (min-width: 750px) {
    svg {
      :first-child,
      :nth-child(2) {
        display: none;
      }
    }
  }
`

export const VoiceButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  margin-left: 8px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.senary};

  img {
    width: 24px;
  }
`

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 40px;

  background-color: ${({ theme }) => theme.colors.quaternary};
`

export const InputWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  height: 40px;
  width: min(30vw, 572px);

  background-color: ${({ theme }) => theme.colors.senary};
  border: 1px solid ${({ theme }) => theme.colors.quaternary};

  input {
    width: 100%;
    padding: 0 51px 0 8px;

    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.secondary};

    &::placeholder {
      color: ${({ theme }) => theme.colors.septenary};
    }
  }

  img {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const Search = styled.div`
  display: none;

  @media screen and (min-width: 750px) {
    display: flex;
  }
`

export const Youtube = styled(YoutubeIcon as any)`
  width: 90px;
  height: 20px;
`

export const Hamburger = styled(HamburgerIcon as any)`
  margin: 0 24px;
`

export const SidebarHeader = styled.div`
  width: 240px;
  min-width: 240px;
`

export const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 56px;

  background-color: ${({ theme }) => theme.colors.quinary};

  svg:not(${Youtube}) {
    width: 24px;
    height: 24px;

    fill: ${({ theme }) => theme.colors.secondary};
  }
`
