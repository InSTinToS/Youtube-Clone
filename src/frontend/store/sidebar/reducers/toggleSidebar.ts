import { SidebarStore } from '../'

import { Reducer } from 'frontend/types/redux'

const toggleSidebar: Reducer<SidebarStore> = (state, { payload }) => {
  state.open = payload.open !== undefined ? payload.open : !state.open
}

export default toggleSidebar
