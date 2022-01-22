import { User } from '../'

import axios, { AxiosResponse } from 'axios'

interface GetUserParams {
  id?: number
}

interface ResType {
  user: User
  success: boolean
}

type GetUser = (_params: GetUserParams) => Promise<User | null>

const getUser: GetUser = async ({ id }) => {
  const { data }: AxiosResponse<ResType> = await axios.get(`api/users/${id}`)

  const { success, user } = data

  if (success) return user
  return null
}

export default getUser
