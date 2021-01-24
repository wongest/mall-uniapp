import axios from 'axios';
import QS from 'qs'

export async function post(url = '', payload = {}) {
  console.log(payload)
  return axios({
    url,
    method: 'post',
    data: QS.stringify(payload)
  }).then(res => {
    return res.data
  })
}