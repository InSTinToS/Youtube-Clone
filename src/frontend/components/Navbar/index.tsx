import {
  Bell,
  Container,
  Hamburger,
  InputWrapper,
  Menu,
  Microphone,
  Search,
  SearchButton,
  SearchIcon,
  Upload,
  UserTools,
  VoiceButton,
  Youtube
} from './styles'

import React from 'react'

const Navbar = () => {
  return (
    <Container>
      <div>
        <Hamburger />

        <Youtube />
      </div>

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
        <Upload />

        <Menu />

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
