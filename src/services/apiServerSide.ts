import axios, { AxiosInstance } from 'axios'

export function apiServerSide(): AxiosInstance {
  return axios.create({
    baseURL: 'https://api.github.com/users/',
  })
}
