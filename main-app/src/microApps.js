import { registerMicroApps, start } from 'qiankun';
import store from './store'
import { state } from './data'
registerMicroApps([
    {
      // name和activeRule和微应用的项目名称一致
      name: 'micro-app-one',
      entry: process.env.NODE_ENV === 'development' ? '//localhost:8081' : '/micro/micro-app-one/',
      // 主应用上创建了一个div#container
      container: '#container',
      activeRule: process.env.NODE_ENV === 'development' ? '/micro-app-one' : '/app-vue-one',
      // loader:'',
      props:{
        mainStore:store,
        state
      }
    },
    // {
    //     // name和activeRule和微应用的项目名称一致
    //     name: 'micro-app-two',
    //     entry: '//localhost:8082',
    //     // 主应用上创建了一个div#container
    //     container: '#container',
    //     activeRule: '/micro-app-two',
    //     // loader:'',
    //     props:{
    //       mainStore:store,
    //       state
    //     }
    // },
  ],
  {
    beforeLoad: app => {
      console.log('before load', app.name)
    },
    beforeMount: [
      app => console.log('before mount', app.name),
    ],
    afterMount: app => {
      console.log('after mount', app.name)
    },
    beforeUnmount: app => {
      console.log('before unmount', app.name)
    },
    afterUnmount: app => {
      console.log('after unmount', app.name)
    }
  });

// 启动 qiankun
start();