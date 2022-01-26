import { UserStore } from '../'
import getUser from './getUser'

import { ExtraReducers } from 'frontend/types/redux'

import { createAsyncThunk } from '@reduxjs/toolkit'

export const getUserThunk = createAsyncThunk('user/getUser', getUser)

const extraReducers: ExtraReducers<UserStore> = ({ addCase }) => {
  addCase(getUserThunk.pending, state => ({ ...state }))

  addCase(getUserThunk.fulfilled, (state, { payload }) => ({
    ...state,
    ...payload,
    loading: false
  }))
}

export default extraReducers
