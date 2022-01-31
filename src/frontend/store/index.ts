import User from './user'
import Channel from './channels'
import Category from './categories'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    userStore: User.reducer,
    channelsStore: Channel.reducer,
    categoriesStore: Category.reducer
  }
})

export default store
