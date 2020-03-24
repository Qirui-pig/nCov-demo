import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: `https://corona.lmao.ninja`,
    timeout: 10000
  })

  return instance(config)
}