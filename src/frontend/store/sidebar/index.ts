import reducers from './reducers'

import { createSlice } from '@reduxjs/toolkit'

export interface SidebarStore {
  open?: boolean
}

export const initialState: SidebarStore = {}

const Sidebar = createSlice({
  name: 'sidebar',
  reducers,
  initialState
})

export default Sidebar
