import store from 'frontend/store'

import {
  ActionReducerMapBuilder,
  CaseReducer,
  PayloadAction
} from '@reduxjs/toolkit'

export type Reducer<State> = CaseReducer<State, PayloadAction<Partial<State>>>

export type ExtraReducers<State> = (
  _builder: ActionReducerMapBuilder<State>
) => void

export type RootStore = ReturnType<typeof store.getState>
