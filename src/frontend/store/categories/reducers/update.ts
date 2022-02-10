import { CategoryStore } from '../'

import { Reducer } from 'frontend/types/redux'

const update: Reducer<CategoryStore> = (state, { payload }) => ({
  ...state,
  categories: payload.categories
})

export default update
