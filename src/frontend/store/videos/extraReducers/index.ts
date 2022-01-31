import { VideoStore } from '../'
import { getVideosCases } from './getVideos'

import { ExtraReducers } from 'frontend/types/redux'

const extraReducers: ExtraReducers<VideoStore> = caseBuilder => {
  getVideosCases(caseBuilder)
}

export default extraReducers
