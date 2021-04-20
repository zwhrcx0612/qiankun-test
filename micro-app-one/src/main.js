import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

let router = null
let instance = null
let base = null
if (process.env.NODE_ENV === 'development') {
  base = window.__POWERED_BY_QIANKUN__ ? '/micro-app-one/' : '/'
} else {
  // history 路由的微应用需要设置 base ，值为目录名称，用于独立访问时使用。
  base = '/micro/micro-app-one/'
}
function render(props = {}) {
  const { container } = props
  router = new VueRouter({
    // base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    base,
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('bootstraped')
}
// 从生命周期 mount 中获取通信方法，使用方式和 master 一致
export async function mount(props) {
  console.log('mount', props)
  // debugger
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态

    console.log(state, prev)
  })

  props.setGlobalState(props.state)
  render(props)
}

export async function unmount() {
  console.log('unmount')
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
