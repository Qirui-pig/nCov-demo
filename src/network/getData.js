import {request} from "./request"

export function getCountry(){
  return request({
    url:'/countries'
  })
}
export function getAll(){
  return request({
    url:'/all'
  })
}