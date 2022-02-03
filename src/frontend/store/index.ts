import User from './user'
import Channel from './channels'
import Category from './categories'
import Videos from './videos'
import Sidebar from './sidebar'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    userStore: User.reducer,
    videosStore: Videos.reducer,
    sidebarStore: Sidebar.reducer,
    channelsStore: Channel.reducer,
    categoriesStore: Category.reducer
  }
})

export default store
