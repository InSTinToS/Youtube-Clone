import extraReducers from './extra-reducers'
import reducers from './reducers'

import { createSlice } from '@reduxjs/toolkit'

export interface UserStore {
  user?: GQL.IUser
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
