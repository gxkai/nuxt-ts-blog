import axios from 'axios'

/** 网络请求 */
export const remoteGet = function(url: string) {
  const promise = new Promise(function(resolve, reject) {
    axios.get(url).then(
      res => {
        resolve(res.data)
      },
      err => {
        reject(err)
      }
    )
  })
  return promise
}
