import { CategoryStore } from '../'
import { getCategoriesCases } from './getCategories'

import { ExtraReducers } from 'frontend/types/redux'

const extraReducers: ExtraReducers<CategoryStore> = caseBuilder => {
  getCategoriesCases(caseBuilder)
}

export default extraReducers
