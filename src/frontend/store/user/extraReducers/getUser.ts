import { UserStore } from '../'

import User, { RES_GET_User } from 'types/routes/user'

import { get } from 'frontend/services'

import { ExtraReducers, RootStore } from 'frontend/types/redux'

import { createAsyncThunk } from '@reduxjs/toolkit'

interface GetUserParams {
  callOnlyIfNotExists?: boolean
}

const getUserThunk = createAsyncThunk<User, GetUserParams>(
  'user/getUser',
  async ({ callOnlyIfNotExists = false }, { getState }) => {
    const { userStore } = getState() as RootStore

    if (!callOnlyIfNotExists || !userStore?.user?._id) {
      const { data } = await get<RES_GET_User>('/user')
      if (data?.user) return data.user
    }

    return userStore.user
  }
)

export const getUserCases: ExtraReducers<UserStore> = ({ addCase }) => {
  addCase(getUserThunk.pending, state => {
    state.loading = true
  })

  addCase(getUserThunk.fulfilled, (state, { payload }) => {
    state.loading = false
    state.user = payload
  })

  addCase(getUserThunk.rejected, state => {
    state.loading = false
  })
}

export default getUserThunk
