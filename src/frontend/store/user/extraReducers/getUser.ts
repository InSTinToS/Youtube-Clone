import { UserStore } from '../'

import client from 'frontend/services/apollo-client'

import { ExtraReducers, RootStore } from 'frontend/types/redux'

import { gql } from '@apollo/client'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface GetUserParams {
  callOnlyIfNotExists?: boolean
}

const query = gql`
  query Query {
    users {
      _id
      avatar
    }
  }
`

const getUserThunk = createAsyncThunk<GQL.IUser, GetUserParams>(
  'user/getUser',
  async ({ callOnlyIfNotExists = false }, { getState }) => {
    const { userStore } = getState() as RootStore

    if (!callOnlyIfNotExists || !userStore?.user?._id) {
      await client.clearStore()

      const { data } = await client.query<GQL.IQuery>({ query })

      if (data.users) return data.users[data.users.length - 1]
      else if (data.user) return data.user
    }

    return userStore.user
  }
)

export const getUserCases: ExtraReducers<UserStore> = ({ addCase }) => {
  addCase(getUserThunk.pending, state => {
    state.loading = true
  })

  addCase(getUserThunk.fulfilled, (state, { payload }) => {
    state.loading = false
    state.user = payload
  })

  addCase(getUserThunk.rejected, state => {
    state.loading = false
  })
}

export default getUserThunk
