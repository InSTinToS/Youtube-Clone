import { Container } from './styles'

import { VideoStore } from 'frontend/store/videos'
import getVideosThunk from 'frontend/store/videos/extraReducers/getVideos'

import Video from 'frontend/components/Video'

import { RootStore } from 'frontend/types/redux'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
  sidebarOpen: boolean
}

const Content = ({ sidebarOpen }: Props) => {
  const { videos } = useSelector<RootStore, VideoStore>(
    ({ videosStore }) => videosStore
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideosThunk({}))
  }, [dispatch])

  return (
    <Container sidebarOpen={sidebarOpen}>
      <ul>
        {videos?.map((video, index) => (
          <Video key={index} video={video} />
        ))}

        {videos?.map((video, index) => (
          <Video key={index} video={video} />
        ))}

        {videos?.map((video, index) => (
          <Video key={index} video={video} />
        ))}

        {videos?.map((video, index) => (
          <Video key={index} video={video} />
        ))}

        {videos?.map((video, index) => (
          <Video key={index} video={video} />
        ))}
      </ul>
    </Container>
  )
}

export default Content
