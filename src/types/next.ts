import { NextApiRequest, NextApiResponse } from 'next'

export interface DefaultResType {
  message: string
  success: boolean
}

export type NextRouteType<ResponseType> = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => Promise<void>
