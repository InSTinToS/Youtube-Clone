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

import { UserStore } from 'frontend/store/user'
import getUserThunk from 'frontend/store/user/extraReducers/getUser'

import {
  Bell,
  Menu,
  Microphone,
  Search as SearchIcon,
  Upload
} from 'frontend/assets/icons'

import { RootStore } from 'frontend/types/redux'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
  onHamburgerClick?: () => void
}

const Navbar = ({ onHamburgerClick }: Props) => {
  const { user } = useSelector<RootStore, UserStore>(
    ({ userStore }) => userStore
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserThunk({ callOnlyIfNotExists: true }))
  }, [])

  return (
    <Container>
      <SidebarHeader>
        <Hamburger onClick={onHamburgerClick} data-testid='hamburger' />

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

        <img id='avatar' src={user?.avatar} />
      </UserTools>
    </Container>
  )
}

export default Navbar
