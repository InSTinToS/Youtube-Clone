import store from 'frontend/store'

import {
  ActionReducerMapBuilder,
  CaseReducer,
  PayloadAction
} from '@reduxjs/toolkit'

export type Reducer<T> = CaseReducer<T, PayloadAction<Partial<T>>>

export type ExtraReducers<State> = (
  _builder: ActionReducerMapBuilder<State>
) => void

export type RootStore = ReturnType<typeof store.getState>
