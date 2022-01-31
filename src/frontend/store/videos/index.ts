import extraReducers from './extraReducers'

import VideoType from 'types/routes/video'

import { createSlice } from '@reduxjs/toolkit'

export interface VideoStore {
  loading: boolean
  videos?: VideoType[]
}

export const initialState: VideoStore = {
  loading: true
}

const Video = createSlice({
  name: 'videos',
  reducers: {},
  initialState,
  extraReducers
})

export default Video
