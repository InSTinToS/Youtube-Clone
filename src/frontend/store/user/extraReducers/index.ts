import { UserStore } from '../'
import { getUserCases } from './getUser'

import { ExtraReducers } from 'frontend/types/redux'

const extraReducers: ExtraReducers<UserStore> = caseBuilder => {
  getUserCases(caseBuilder)
}

export default extraReducers
