import { Container, Footer, SidebarItem, UlTitle } from './styles'

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

import React from 'react'

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
  subscriptions: [
    {
      src: 'https://yt3.ggpht.com/ytc/AKedOLQXBi2lvEiZsNllWfciqPkYUGibZxGIdsSqn1BIdA=s88-c-k-c0x00ffffff-no-rj',
      label: 'Spinning Records'
    },
    {
      src: 'https://yt3.ggpht.com/ytc/AKedOLQXBi2lvEiZsNllWfciqPkYUGibZxGIdsSqn1BIdA=s88-c-k-c0x00ffffff-no-rj',
      label: 'Spinning Records'
    },
    {
      src: 'https://yt3.ggpht.com/ytc/AKedOLQXBi2lvEiZsNllWfciqPkYUGibZxGIdsSqn1BIdA=s88-c-k-c0x00ffffff-no-rj',
      label: 'Spinning Records'
    },
    {
      src: 'https://yt3.ggpht.com/ytc/AKedOLQXBi2lvEiZsNllWfciqPkYUGibZxGIdsSqn1BIdA=s88-c-k-c0x00ffffff-no-rj',
      label: 'Spinning Records'
    },
    {
      src: 'https://yt3.ggpht.com/ytc/AKedOLQXBi2lvEiZsNllWfciqPkYUGibZxGIdsSqn1BIdA=s88-c-k-c0x00ffffff-no-rj',
      label: 'Spinning Records'
    }
  ],
  settings: [
    { icon: <Settings />, label: 'Configurações' },
    { icon: <Flag />, label: 'Histórico de denúncias' },
    { icon: <Help />, label: 'Ajuda' },
    { icon: <Feedback />, label: 'Enviar feedback' }
  ]
}

const Sidebar = () => {
  return (
    <Container>
      <ul>
        {sidebarData.default.map(({ icon: Icon, label }) => (
          <SidebarItem key={label}>
            {Icon} <span>{label}</span>
          </SidebarItem>
        ))}
      </ul>

      <hr />

      <ul>
        {sidebarData.others.map(({ icon: Icon, label }) => (
          <SidebarItem key={label}>
            {Icon} <span>{label}</span>
          </SidebarItem>
        ))}
      </ul>

      <hr />

      <UlTitle>inscrições</UlTitle>

      {sidebarData.subscriptions.map(({ label, src }) => (
        <SidebarItem key={label}>
          <img src={src} /> <span>{label}</span>
        </SidebarItem>
      ))}

      <hr />

      {sidebarData.settings.map(({ icon: Icon, label }) => (
        <SidebarItem key={label}>
          {Icon} <span>{label}</span>
        </SidebarItem>
      ))}

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
    </Container>
  )
}

export default Sidebar
