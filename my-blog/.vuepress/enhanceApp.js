import WeChat from './components/wechat'
import QQ from './components/qq'
import BgRandom from './components/bgRandom'
import About from './components/about'
import { Avatar } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css'


export default ({Vue}) => {
  Vue.component('WeChat', WeChat)
  Vue.component('QQ', QQ)
  Vue.component('BgRandom', BgRandom)
  Vue.component('About', About)
  Vue.use(Avatar)
}

