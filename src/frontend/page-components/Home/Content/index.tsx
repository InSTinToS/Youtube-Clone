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

const Content = () => {
  return (
    <Container>
      <ul>
        {videos.map((video, index) => (
          <Video key={index} />
        ))}
      </ul>
    </Container>
  )
}

export default Content
