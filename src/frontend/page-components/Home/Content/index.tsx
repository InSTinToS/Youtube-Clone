import { Container } from './styles'

import Video from 'frontend/components/Video'

import React from 'react'

const videos = [
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
]

interface Props {
  sidebarOpen: boolean
}

const Content = ({ sidebarOpen }: Props) => {
  return (
    <Container sidebarOpen={sidebarOpen}>
      <ul>
        {videos.map((video, index) => (
          <Video key={index} />
        ))}
      </ul>
    </Container>
  )
}

export default Content
