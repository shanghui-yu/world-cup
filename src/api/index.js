import fetch from './ajax'

export const DEBUG = false // 是否开发模式
const HTTP_DEV = 'http://test.vr0101.com' // 测试地址

const HTTPS = 'http://topic.kacheyizu.cn' // 正式地址

const URLS = DEBUG ? HTTP_DEV : HTTPS
// const URLS = '/bx'
class XHR {
  // 获取微信sdk
  getWechat (json) {
    return fetch({
      url: `${URLS}/getsignature`,
      body: json,
      type: 'POST'
    })
  }
  // 获取用户信息
  getUser (json) {
    return fetch({
      url: `${URLS}/getUser`,
      body: json,
      type: 'GET'
    })
  }
  // 更新用户
  updateUser (json) {
    return fetch({
      url: `${URLS}/updateUser`,
      body: json,
      type: 'POST'
    })
  }
  // 获取竞猜
  getJingCai (json) {
    return fetch({
      url: `${URLS}/match`,
      body: json,
      type: 'GET'
    })
  }
  // 提交竞猜
  postMyJingCai (json) {
    return fetch({
      url: `${URLS}/match/submit`,
      body: json,
      type: 'POST'
    })
  }
  // 添加积分榜
  addIntegral (json) {
    return fetch({
      url: `${URLS}/addIntegral`,
      body: json,
      type: 'POST'
    })
  }

  // 获取排行榜
  getRank (json) {
    return fetch({
      url: `${URLS}/getTop`,
      body: json,
      type: 'GET'
    })
  }
  // 获取我的竞猜
  getMyJingCai (json) {
    return fetch({
      url: `${URLS}/match/getResByUid`,
      body: json,
      type: 'GET'
    })
  }
}
export default new XHR()
