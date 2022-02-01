import { Container } from './styles'

import VideoType from 'types/routes/video'

import React from 'react'

interface Props {
  video: VideoType
}

const Video = ({ video }: Props) => (
  <Container>
    <img src={video.thumbnail} id='thumbnail' />

    <div id='avatar'>
      <img src={video.channelInfo[0]?.logo} id='avatar' />
    </div>

    <div id='title'>{video.title}</div>

    <div id='info'>1 mi visualizações · há 10 horas</div>
  </Container>
)

export default Video
