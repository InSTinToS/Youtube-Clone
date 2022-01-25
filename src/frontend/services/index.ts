import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const api = axios.create({ baseURL: 'http://localhost:3000/api' })

const post = <Req, Res>(
  path: string,
  data: Req,
  config?: AxiosRequestConfig<Req>
): Promise<AxiosResponse<Res>> =>
  api.post<Res, AxiosResponse<Res>, Req>(path, data, config)

function put<Req, Res>(
  path: string,
  data: Req,
  config?: AxiosRequestConfig<Req>
): Promise<AxiosResponse<Res>> {
  return api.put<Res, AxiosResponse<Res>, Req>(path, data, config)
}

export { post, put }

export default api
