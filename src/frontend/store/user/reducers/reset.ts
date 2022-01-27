import { initialState, UserStore } from '../'

import { Reducer } from 'frontend/types/redux'

const reset: Reducer<UserStore> = () => initialState

export default reset
