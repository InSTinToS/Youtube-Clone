import extraReducers from './extraReducers'

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
  reducers: {},
  initialState,
  extraReducers
})

export default Category
