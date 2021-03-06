import { Container, Content, Footer, SidebarItem, UlTitle } from './styles'
import Presence from '../Presence'

import getChannelsThunk from 'frontend/store/channels/extraReducers/getChannels'
import SidebarStore from 'frontend/store/sidebar'

import useWindowDimensions from 'frontend/hooks/useWindowDimensions'

import {
  Clock,
  Explore,
  Feedback,
  Flag,
  Help,
  History,
  Home,
  Library,
  Like,
  Settings,
  Subscriptions,
  Videos
} from 'frontend/assets/icons'

import { RootStore } from 'frontend/types/redux'

import { Variants } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const appearAnimation: Variants = {
  initial: { x: -240 },
  exit: {
    x: [0, -240],
    transition: { type: 'tween', duration: 0.3 }
  },
  enter: {
    x: [-240, 0],
    transition: { type: 'tween', duration: 0.3 }
  }
}

const sidebarData = {
  default: [
    { icon: <Home />, label: 'Início' },
    { icon: <Explore />, label: 'Explorar' },
    { icon: <Subscriptions />, label: 'Inscrições' }
  ],
  others: [
    { icon: <Library />, label: 'Biblioteca' },
    { icon: <History />, label: 'Histórico' },
    { icon: <Videos />, label: 'Seus vídeos' },
    { icon: <Clock />, label: 'Assistir mais tarde' },
    { icon: <Like />, label: 'Gostei' }
  ],
  settings: [
    { icon: <Settings />, label: 'Configurações' },
    { icon: <Flag />, label: 'Histórico de denúncias' },
    { icon: <Help />, label: 'Ajuda' },
    { icon: <Feedback />, label: 'Enviar feedback' }
  ]
}

const Sidebar = () => {
  const {
    sidebarStore: { open },
    channelsStore: { channels }
  } = useSelector<RootStore, RootStore>(store => store)

  const [selected, setSelected] = useState('Início')

  const dispatch = useDispatch()
  const { innerWidth } = useWindowDimensions()

  useEffect(() => {
    dispatch(getChannelsThunk({}))
  }, [dispatch])

  useEffect(() => {
    dispatch(SidebarStore.actions.toggleSidebar({ open: innerWidth >= 800 }))
  }, [innerWidth])

  return (
    <Container data-testid='sidebar'>
      <Presence
        condition={open}
        variants={appearAnimation}
        withPresence={innerWidth < 800}
        presenceProps={{ initial: false }}
      >
        <Content open={open}>
          <ul>
            {sidebarData.default.map(({ icon: Icon, label }) => (
              <SidebarItem
                key={label}
                open={open}
                isSelected={selected === label}
                onClick={() => setSelected(label)}
              >
                <button>
                  {Icon} <span>{label}</span>
                </button>
              </SidebarItem>
            ))}
          </ul>

          {open && (
            <>
              <hr />

              <ul>
                {sidebarData.others.map(({ icon: Icon, label }) => (
                  <SidebarItem
                    key={label}
                    open={open}
                    isSelected={selected === label}
                    onClick={() => setSelected(label)}
                  >
                    <button>
                      {Icon} <span>{label}</span>
                    </button>
                  </SidebarItem>
                ))}
              </ul>

              <hr />

              <UlTitle>inscrições</UlTitle>

              <ul>
                {channels?.map(({ name, logo }, index) => (
                  <SidebarItem
                    open={open}
                    key={index}
                    isSelected={selected === name}
                    onClick={() => setSelected(name)}
                  >
                    <button>
                      <img src={logo} /> <span>{name}</span>
                    </button>
                  </SidebarItem>
                ))}
              </ul>

              <hr />

              <ul>
                {sidebarData.settings.map(({ icon: Icon, label }) => (
                  <SidebarItem
                    open={open}
                    key={label}
                    isSelected={selected === label}
                    onClick={() => setSelected(label)}
                  >
                    <button>
                      {Icon} <span>{label}</span>
                    </button>
                  </SidebarItem>
                ))}
              </ul>

              <hr />

              <Footer>
                <p>
                  <a href='#'>Sobre </a> <a href='#'>Imprensa</a> <br />
                  <a href='#'>Direitos autorais</a>
                  <br />
                  <a href='#'>Entre em contato</a>
                  <br />
                  <a href='#'>Criadores de conteúdo</a>
                  <br />
                  <a href='#'>Publicidade</a>
                  <br />
                  <a href='#'>Desenvolvedores</a>
                  <br />
                  <br />
                  <a href='#'>Termos </a> <a href='#'>Privacidade</a>
                  <br />
                  <a href='#'>Política e segurança</a>
                  <br />
                  <a href='#'>Como funciona o YouTube</a>
                  <br />
                  <a href='#'>Testar os novos recursos</a>
                  <br />
                  <br />
                </p>

                <span>© 2022 Google LLC</span>
              </Footer>
            </>
          )}
        </Content>
      </Presence>
    </Container>
  )
}

export default Sidebar
