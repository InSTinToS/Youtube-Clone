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

import { user } from 'frontend/fakeData/user'
import React from 'react'

interface Props {
  onHamburgerClick?: () => void
}

const Navbar = ({ onHamburgerClick }: Props) => {
  return (
    <Container>
      <SidebarHeader>
        <Hamburger onClick={onHamburgerClick} />

        <Youtube />
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

        <Menu />

        <Bell />

        <img id='avatar' src={user.avatar} />
      </UserTools>
    </Container>
  )
}

export default Navbar
