import { ChannelStore } from '../'

import Channel, { RES_GET_Channel } from 'types/routes/channel'

import { get } from 'frontend/services'

import { ExtraReducers, RootStore } from 'frontend/types/redux'

import { createAsyncThunk } from '@reduxjs/toolkit'

interface GetChannelParams {
  callOnlyIfNotExists?: boolean
}

const getChannelsThunk = createAsyncThunk<Channel[], GetChannelParams>(
  'channels/getChannels',
  async ({ callOnlyIfNotExists = false }, { getState }) => {
    const { channelsStore } = getState() as RootStore

    if (!callOnlyIfNotExists || !channelsStore?.channels) {
      const { data } = await get<RES_GET_Channel>('/channels')

      if (data?.channels) return data.channels
    }

    return channelsStore.channels
  }
)

export const getChannelsCases: ExtraReducers<ChannelStore> = ({ addCase }) => {
  addCase(getChannelsThunk.pending, state => {
    state.loading = true
  })

  addCase(getChannelsThunk.fulfilled, (state, { payload }) => {
    state.loading = false
    state.channels = payload
  })

  addCase(getChannelsThunk.rejected, state => {
    state.loading = false
  })
}

export default getChannelsThunk
