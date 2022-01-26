import User from './user'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: { user: User.reducer } })

export default store
