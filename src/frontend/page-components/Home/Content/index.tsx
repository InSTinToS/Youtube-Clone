import { Container } from './styles'

import { VideoStore } from 'frontend/store/videos'
import getVideosThunk from 'frontend/store/videos/extraReducers/getVideos'

import Video from 'frontend/components/Video'

import { RootStore } from 'frontend/types/redux'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Content = () => {
  const {
    videosStore: { videos },
    sidebarStore: { open }
  } = useSelector<RootStore, RootStore>(store => store)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideosThunk({}))
  }, [dispatch])

  return (
    <Container sidebarOpen={open}>
      <ul>
        {videos?.map((video, index) => (
          <Video key={index} video={video} />
        ))}
      </ul>
    </Container>
  )
}

export default Content
