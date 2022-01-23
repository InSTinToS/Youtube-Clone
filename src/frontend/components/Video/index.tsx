import { Container } from './styles'

import React from 'react'

interface Props {
  video: {
    views: number
    title: string
    createdAt: Date
    thumbnail: string
  }
  channel: {
    name: string
    avatar: string
  }
}

const channel = {
  name: "Spinnin' Records",
  avatar:
    'https://yt3.ggpht.com/ytc/AKedOLQXBi2lvEiZsNllWfciqPkYUGibZxGIdsSqn1BIdA=s48-c-k-c0x00ffffff-no-rj'
}

const video = {
  views: 1042299,
  createdAt: '2019-09-18T19:00:52Z',
  title: 'Slap House Mix 2020 | Spinnin’  Bass Boosted...',
  thumbnail:
    'https://i.ytimg.com/vi/Js6p_tkFM7o/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&amp;rs=AOn4CLCP2TecYGZST8cNgZl0KWdNp_8nPg'
}
// <img src={video.thumbnail} id='thumbnail' />

// <img src={channel.avatar} id='avatar' />

// <span id='title'>{video.title}</span>

// <span id='info'>
//   <span id='name'>{channel.name}</span>
//   {video.views} visualizações · há {video.createdAt}
// </span>
const Video = () => {
  return (
    <Container>
      <img src={video.thumbnail} id='thumbnail' />

      <div id='avatar'>
        <img src={channel.avatar} id='avatar' />
      </div>

      <div id='title'>{video.title}</div>

      <div id='info'>1 mi visualizações · há 10 horas</div>
    </Container>
  )
}

export default Video
