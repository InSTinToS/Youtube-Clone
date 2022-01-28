import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const api = axios.create({ baseURL: 'http://localhost:3000/api' })

const get = <Res, Req = undefined>(
  path: string,
  data?: Req
): Promise<AxiosResponse<Res>> =>
  api.get<Res, AxiosResponse<Res>, Req>(path, data)

const post = <Res, Req = undefined>(
  path: string,
  data: Req,
  config?: AxiosRequestConfig<Req>
): Promise<AxiosResponse<Res>> =>
  api.post<Res, AxiosResponse<Res>, Req>(path, data, config)

const put = <Res, Req = undefined>(
  path: string,
  data: Req,
  config?: AxiosRequestConfig<Req>
): Promise<AxiosResponse<Res>> =>
  api.put<Res, AxiosResponse<Res>, Req>(path, data, config)

const remove = <Res, Req = undefined>(
  path: string,
  config?: AxiosRequestConfig<Req>
): Promise<AxiosResponse<Res>> =>
  api.delete<Res, AxiosResponse<Res>, Req>(path, config)

export { post, put, get, remove }

export default api
