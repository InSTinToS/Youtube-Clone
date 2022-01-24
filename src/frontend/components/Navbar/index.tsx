import {
  Container,
  Hamburger,
  InputWrapper,
  Search,
  SearchButton,
  SidebarHeader,
  UserTools,
  VoiceButton,
  Youtube
} from './styles'

import {
  Bell,
  Menu,
  Microphone,
  Search as SearchIcon,
  Upload
} from 'frontend/assets/icons'

import React from 'react'

interface Props {
  onHamburgerClick?: () => void
}

const Navbar = ({ onHamburgerClick }: Props) => {
  return (
    <Container>
      <SidebarHeader>
        <Hamburger onClick={onHamburgerClick} />

        <Youtube id='youtube' />
      </SidebarHeader>

      <Search>
        <InputWrapper>
          <input type='text' placeholder='Pesquisar' />

          <img src='https://www.gstatic.com/inputtools/images/tia.png' />
        </InputWrapper>

        <SearchButton>
          <SearchIcon />
        </SearchButton>

        <VoiceButton>
          <Microphone />
        </VoiceButton>
      </Search>

      <UserTools>
        <SearchIcon />

        <Microphone />

        <Upload />

        <Menu id='menu' />

        <Bell />

        <img
          id='avatar'
          src='https://yt3.ggpht.com/52bJiKEiq5DSQ4ZRg41TCFB4FAkFL0q2GKCqFlsuP4ssKQhcYnsGmEow7YWWoj5cf1VI2HqsJHY=s88-c-k-c0x00ffffff-no-rj-mo'
        />
      </UserTools>
    </Container>
  )
}

export default Navbar
