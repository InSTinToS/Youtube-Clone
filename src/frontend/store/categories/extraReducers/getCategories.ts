import { CategoryStore } from '../'

import Category, { RES_GET_Category } from 'types/routes/category'

import { get } from 'frontend/services'

import { ExtraReducers, RootStore } from 'frontend/types/redux'

import { createAsyncThunk } from '@reduxjs/toolkit'

interface GetCategoryParams {
  callOnlyIfNotExists?: boolean
}

const getCategoriesThunk = createAsyncThunk<Category[], GetCategoryParams>(
  'categories/getCategories',
  async ({ callOnlyIfNotExists = false }, { getState }) => {
    const { categoriesStore } = getState() as RootStore

    if (!callOnlyIfNotExists || categoriesStore?.categories.length === 0) {
      const { data } = await get<RES_GET_Category>('/categories')

      if (data?.categories) return data.categories
    }

    return categoriesStore.categories
  }
)

export const getCategoriesCases: ExtraReducers<CategoryStore> = ({
  addCase
}) => {
  addCase(getCategoriesThunk.pending, state => {
    state.loading = true
  })

  addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
    state.loading = false
    state.categories = payload
  })

  addCase(getCategoriesThunk.rejected, state => {
    state.loading = false
  })
}

export default getCategoriesThunk
