import WeChat from './components/wechat'
import QQ from './components/qq'

export default ({Vue}) => {
  Vue.component('WeChat', WeChat),
  Vue.component('QQ', QQ)
}

