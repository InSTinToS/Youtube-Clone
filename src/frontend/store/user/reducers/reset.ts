import { initialState } from '../'

import { Reducer } from 'frontend/types/redux'

const reset: Reducer<undefined> = () => initialState

export default reset
