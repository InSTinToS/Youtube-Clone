import extraReducers from './extra-reducers'
import reducers from './reducers'

import { createSlice } from '@reduxjs/toolkit'

export interface CategoryStore {
  loading: boolean
  categories?: GQL.ICategory[]
}

export const initialState: CategoryStore = {
  loading: true
}

const Category = createSlice({
  name: 'categories',
  reducers,
  initialState,
  extraReducers
})

export default Category
