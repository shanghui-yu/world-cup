import fetch from './ajax'

export const DEBUG = false // 是否开发模式
const HTTP_DEV = '' // 测试地址

const HTTPS = '' // 正式地址

const URLS = DEBUG ? HTTP_DEV : HTTPS
// const URLS = '/bx'
class XHR {
  // 获取题目
  getQs (json) {
    return fetch({
      url: `${URLS}/getQuestions`,
      body: json,
      type: 'GET'
    })
  }
}
export default new XHR()
