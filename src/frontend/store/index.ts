import User from './user'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: { userStore: User.reducer }
})

export default store
