import { Config } from '../config/index.js'

/**
 * @description: 设置缓存
 * @param {type} key
 * @return {type} Storage | null
 */
export const getStorage = key => {
  var value = localStorage.getItem(`${Config.APP_NAME}_${key}`)

  if (!value) return null
  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}

/**
 * @description: 设置缓存
 * @param {type} key
 * @param {type} value
 */
export const setStorage = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(`${Config.APP_NAME}_${key}`, value)
}

/**
 * @description: 删除缓存
 * @param {type} key
 */
export const removeStorage = key => {
  localStorage.removeItem(`${Config.APP_NAME}_${key}`)
}
