/**
 * Created by VsCode.
 * @author Evan Chan
 * @date 2018/8/7
 */

// 应用具体配置
export const config = {
  httpHeaders: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  // Api对应的服务器及前缀, 请求分发
  apiPath: {
    //default: '/api',
    benefit: {
      development: '/benefit/api',
      test: '//testquanyiapi.91bushou.com/api',
      //production: '//benefits.myzebravip.com' ,
      production: '//testquanyiapi.91bushou.com/api'
    },
    pay: {
      development: '/pay/api',
      test: '//testcheckstand.91bushou.com/api',
      //production: '//benefits.myzebravip.com' ,
      production: '//testcheckstand.91bushou.com/api'
    },
    default: {
      development: '/api',
      test: '//testbanmaapi.91bushou.com/api',
      //production: '//benefits.myzebravip.com' ,
      production: '//testbanmaapi.91bushou.com/api'
    }
  }
}