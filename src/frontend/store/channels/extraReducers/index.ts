import { ChannelStore } from '../'
import { getChannelsCases } from './getChannels'

import { ExtraReducers } from 'frontend/types/redux'

const extraReducers: ExtraReducers<ChannelStore> = caseBuilder => {
  getChannelsCases(caseBuilder)
}

export default extraReducers
