import extraReducers from './extraReducers'

import ChannelType from 'types/routes/channel'

import { createSlice } from '@reduxjs/toolkit'

export interface ChannelStore {
  loading: boolean
  channels?: ChannelType[]
}

export const initialState: ChannelStore = {
  loading: true
}

const Channel = createSlice({
  name: 'channels',
  reducers: {},
  initialState,
  extraReducers
})

export default Channel
