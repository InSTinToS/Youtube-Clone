import User from './user'
import Channel from './channels'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: { userStore: User.reducer, channelsStore: Channel.reducer }
})

export default store
