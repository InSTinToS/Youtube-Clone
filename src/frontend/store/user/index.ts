import extraReducers from './extraReducers'
import reducers from './reducers'

import UserType from 'types/routes/user'

import { createSlice } from '@reduxjs/toolkit'

export interface UserStore {
  user?: UserType
  loading: boolean
}

export const initialState: UserStore = {
  loading: true
}

const User = createSlice({
  name: 'user',
  reducers,
  initialState,
  extraReducers
})

export default User
