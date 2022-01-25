import { Container } from './styles'

import Video from 'frontend/components/Video'

import { videos } from 'frontend/fakeData/videos'
import React from 'react'

interface Props {
  sidebarOpen: boolean
}

const Content = ({ sidebarOpen }: Props) => {
  return (
    <Container sidebarOpen={sidebarOpen}>
      <ul>
        {videos.map((video, index) => (
          <Video key={index} video={video} />
        ))}
      </ul>
    </Container>
  )
}

export default Content
