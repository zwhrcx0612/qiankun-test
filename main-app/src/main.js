import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false



registerMicroApps([
  
  {
    // name和activeRule和微应用的项目名称一致
    name: 'micro-app-one',
    entry: '//localhost:8081',
    // 主应用上创建了一个div#container
    container: '#container',
    activeRule: '/micro-app-one',
  },
  // {
  //   name: 'vueApp',
  //   entry: '//localhost:8082',
  //   container: '#container',
  //   activeRule: '/app-vue',
  // },
  // {
  //   name: 'vueApp',
  //   entry: '//localhost:8083',
  //   container: '#container',
  //   activeRule: '/app-vue',
  // },
]);
// 启动 qiankun
start();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
