import { VideoStore } from '../'

import Video, { RES_GET_Video } from 'types/routes/video'

import { get } from 'frontend/services'

import { ExtraReducers, RootStore } from 'frontend/types/redux'

import { createAsyncThunk } from '@reduxjs/toolkit'

interface GetVideoParams {
  callOnlyIfNotExists?: boolean
}

const getVideosThunk = createAsyncThunk<Video[], GetVideoParams>(
  'videos/getVideos',
  async ({ callOnlyIfNotExists = false }, { getState }) => {
    const { videosStore } = getState() as RootStore

    if (!callOnlyIfNotExists || videosStore?.videos.length === 0) {
      const { data } = await get<RES_GET_Video>('/videos')

      if (data?.videos) return data.videos
    }

    return videosStore.videos
  }
)

export const getVideosCases: ExtraReducers<VideoStore> = ({ addCase }) => {
  addCase(getVideosThunk.pending, state => {
    state.loading = true
  })

  addCase(getVideosThunk.fulfilled, (state, { payload }) => {
    state.loading = false
    state.videos = payload
  })

  addCase(getVideosThunk.rejected, state => {
    state.loading = false
  })
}

export default getVideosThunk
