import { CategoryStore } from '../'

import client from 'frontend/services/apollo-client'

import { ExtraReducers, RootStore } from 'frontend/types/redux'

import { gql } from '@apollo/client'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface GetCategoryParams {
  callOnlyIfNotExists?: boolean
}

const getCategoriesQuery = gql`
  query Query {
    categories {
      _id
      label
    }
  }
`

const getCategoriesThunk = createAsyncThunk<GQL.ICategory[], GetCategoryParams>(
  'categories/getCategories',
  async ({ callOnlyIfNotExists = false }, { getState }) => {
    const { categoriesStore } = getState() as RootStore

    if (!callOnlyIfNotExists || categoriesStore?.categories.length === 0) {
      await client.clearStore()

      const { data } = await client.query<GQL.IQuery>({
        query: getCategoriesQuery
      })

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
