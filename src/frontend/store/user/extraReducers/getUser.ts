import { RES_GET_User } from 'types/routes/user'

import { get } from 'frontend/services'

type GetUser = () => Promise<RES_GET_User>

const getUser: GetUser = async () => {
  const { data } = await get<RES_GET_User>('/user')
  return data
}

export default getUser
