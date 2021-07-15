import WeChat from './components/wechat'
import QQ from './components/qq'
import bgRandom from './components/bgRandom'

export default ({Vue}) => {
  Vue.component('WeChat', WeChat),
  Vue.component('QQ', QQ)
  Vue.component('bgRandom', bgRandom)
}

