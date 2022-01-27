import { UserStore } from '../'

import { Reducer } from 'frontend/types/redux'

const update: Reducer<UserStore> = (state, { payload }) => {
  state.loading = payload.loading
  state.user = payload.user
}

export default update
