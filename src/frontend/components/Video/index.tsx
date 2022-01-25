import { Container } from './styles'

import VideoType from 'frontend/fakeData/videos'
import React from 'react'

interface Props {
  video: VideoType
}

const Video = ({ video }: Props) => {
  return (
    <Container>
      <img src={video.thumbnail} id='thumbnail' />

      <div id='avatar'>
        <img src={video.channel.avatar} id='avatar' />
      </div>

      <div id='title'>{video.title}</div>

      <div id='info'>1 mi visualizações · há 10 horas</div>
    </Container>
  )
}

export default Video
