import store from 'frontend/store'

import {
  ActionReducerMapBuilder,
  CaseReducer,
  PayloadAction
} from '@reduxjs/toolkit'

type Reducer<State> = CaseReducer<State, PayloadAction<Partial<State>>>

type ExtraReducers<State> = (_builder: ActionReducerMapBuilder<State>) => void

type RootStore = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export type { Reducer, ExtraReducers, RootStore, AppDispatch }
