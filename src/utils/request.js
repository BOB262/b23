import axios from 'axios'
// import router from '@/router'
import { Message } from 'element-ui'

/**
 * 一、功能
 * 1. 统一拦截http错误请求码；
 * 2. 统一拦截业务错误代码；
 * 3. 统一设置请求前缀,每个 http 加前缀 baseURL
 * # 4. 配置异步请求过渡状态：显示蓝色加载条表示正在请求中，避免给用户页面假死的不好体验。使用 NProgress 工具库。
 */

/**
 * 定义全局的默认配置
 * 设置全局参数，如响应超市时间，请求前缀等。修改默认axios的option
 * */
// 设置全局请求基本地址配置base_url
axios.defaults.baseURL = process.env.API_ROOT // api 的 base_url
// 设置全局的请求次数，请求的间隙
axios.defaults.timeout = 10000
// axios.defaults.withCredentials = true;  // 好像是跨域带cookie

// request拦截器 请求时拦截
axios.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么

    /* if (store.getters.token) {
      config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    } */

    // console.log(config)
    return config
  },
  error => {
    // 处理请求错误
    // console.log(error) // for debug
    Message({
      showClose: true,
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

// respone拦截器 响应时拦截
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    // console.log(response)
    const res = response.data
    // 由后端抛出的错误, 就是业务请求状态（和后端约定）
    /** JAVA组
     * code: '200'
     * data: {}
     * msg: ''
     * */
    /** 王建强
     * data: {}
     * msg: "success"
     * status: 100
     * */
    if (res.code !== '200' && res.code !== undefined && res.code !== null) {
      // console.log(response)
      Message({
        showClose: true,
        message: res.msg || `你是谁${res}`,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res.msg)
    } else if (res.status !== 100 && res.status !== undefined) { // 针对王建强的请求返回状态
      // console.log(response)
      Message({
        showClose: true,
        message: res.msg || `你是谁1${res}`,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res.msg)
    }
    return res
  },
  error => {
    // 对响应错误做点什么
    console.log(error) // for debug
    console.log(error.response) // for debug
    // 由网络或者服务器抛出的错误
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求'
          break
        case 401:
          error.message = '未授权，请重新登陆'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = process.env.NODE_ENV !== 'production' ? `请求地址出错：${error.response.config.url}` : '请求失败'
          break
        case 405:
          error.message = '请求方法未允许'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      console.log('Error', error.message)
      error.message = '连接服务器失败!'
    }
    // 调用element-ui的Message
    Message({
      message: error.message,
      type: 'error',
      duration: 3000
    })
    return Promise.reject(error)
  }
)

export default axios

/*
   服务器状态码错误信息解释
   200: '服务器成功返回请求的数据。',
   201: '新建或修改数据成功。',
   202: '一个请求已经进入后台排队（异步任务）。',
   204: '删除数据成功。',
   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
   401: '用户没有权限（令牌、用户名、密码错误）。',
   403: '用户得到授权，但是访问是被禁止的。',
   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
   406: '请求的格式不可得。',
   410: '请求的资源被永久删除，且不会再得到的。',
   422: '当创建一个对象时，发生一个验证错误。',
   500: '服务器发生错误，请检查服务器。',
   502: '网关错误。',
   503: '服务不可用，服务器暂时过载或维护。',
   504: '网关超时。'
*/
