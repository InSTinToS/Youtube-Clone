import extraReducers from './extraReducers'
import reducers from './reducers'

import { createSlice } from '@reduxjs/toolkit'

export interface User {
  name: string
}

export interface UserStore {
  user?: User
  loading: boolean
}

export const initialState: UserStore = { loading: true }

const User = createSlice({
  name: 'user',
  reducers,
  initialState,
  extraReducers
})

export const UserActions = User.actions

export default User
