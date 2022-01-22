import {
  Bell as BellIcon,
  Hamburger as HamburgerIcon,
  Menu as MenuIcon,
  Microphone as MicrophoneIcon,
  Search as OriginalSearchIcon,
  Upload as UploadIcon,
  Youtube as YoutubeIcon
} from 'frontend/assets/icons'

import styled from 'styled-components'

export const UserTools = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 16px;

  svg {
    margin: 0 8px;
    width: 24px;
  }

  #avatar {
    width: 32px;
    margin: 0 14px;
    border-radius: 50%;
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

  img {
    width: 24px;
    height: 24px;
  }
`

export const InputWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  width: clamp(100px, 40vw, 572px);
  height: 40px;

  border: 1px solid ${({ theme }) => theme.colors.quaternary};
  background-color: ${({ theme }) => theme.colors.senary};

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

  @media screen and (min-width: 700px) {
    display: flex;
  }
`

export const Youtube = styled(YoutubeIcon)`
  height: 20px;
  width: 90px;
`

export const Hamburger = styled(HamburgerIcon)`
  margin: 0 24px;
`

export const SidebarHeader = styled.div`
  width: 240px;
  min-width: 240px;
`

export const Container = styled.nav`
  position: fixed;
  top: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  height: 56px;

  background-color: ${({ theme }) => theme.colors.quinary};

  svg:not(#youtube) {
    width: 24px;
    height: 24px;

    fill: ${({ theme }) => theme.colors.secondary};
  }
`
