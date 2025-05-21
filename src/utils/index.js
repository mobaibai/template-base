/**
 * @description: GET参数获取 GET.param Or GET['param']
 * @example: GET.param 或者 GET['param']
 */
export const GET = {}
location.search.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (GET[k] = v))

/**
 * @description: 时间转换
 * @param {type} time 毫秒时间戳
 * @param {type} format 转换格式
 * @return {type}
 * @example
 * formatTime(1672531199000, 'YYYY-MM-DD hh:mm:ss') // 2023-01-01 00:00:00
 */
export const formatTime = (time = Date.now(), format = 'YYYY-MM-DD hh:mm:ss') => {
  if (typeof time === 'string') time = Number(time)
  if (typeof time !== 'number' || Number.isNaN(time)) return ''

  const date = time ? new Date(time) : new Date()
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  const ms = date.getMilliseconds().toString().padStart(3, '0')

  const formattedTime = format
    .replace(/YYYY/g, year.toString())
    .replace(/MM/g, month)
    .replace(/DD/g, day)
    .replace(/hh/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds)
    .replace(/fff/g, ms)

  return formattedTime
}

/**
 * @description: Fetch 网络请求
 * @param {type} url
 * @param {type} options {Fetch文档：https://developer.mozilla.org/zh-CN/docs/Web/API/fetch}
 * @return {type}
 * @example: requestFetch('url', { method: 'GET' })
 */
export const requestFetch = (url, options = { method: 'GET' }) => {
  options.headers = {
    ...options.headers
  }
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          reject(new Error(`请求失败，状态码为 ${response.status}`))
        }
        response
          .json()
          .then(data => {
            resolve(data)
          })
          .catch(error => {
            reject(new Error(`解析响应数据失败，错误信息为：${error.message}`))
          })
      })
      .catch(error => {
        reject(new Error(`请求出错，错误信息为：${error.message}`))
      })
  })
}
