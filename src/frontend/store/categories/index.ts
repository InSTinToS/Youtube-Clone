import extraReducers from './extraReducers'

import CategoryType from 'types/routes/category'

import { createSlice } from '@reduxjs/toolkit'

export interface CategoryStore {
  loading: boolean
  categories?: CategoryType[]
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
