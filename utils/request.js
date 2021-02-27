import axios from 'axios';
import QS from 'qs'
import { apiUrl } from './keys'

export async function post(url = '', payload = {}) {
  return new Promise((resolve, reject) => {
    uni.request({
      header: {
        Cookie: 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiM2U2ZjMyODAtNzhlOS0xMWViLTgwNjUtYTM0MmRkNTc4OTRmIiwiaWF0IjoxNjE0NDQ0MTc1LCJleHAiOjE2MTQ0NDc3NzV9.emGmZLNCjzyQG60EuN8UawLpzgpWXus-VLzwgcqCHpg'
      },
      url: apiUrl + url,
      method: 'post',
      data: payload,
      success: res => {
        resolve(res.data)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}