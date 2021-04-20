import { initGlobalState } from 'qiankun';
debugger
import { state } from './data'
// 初始化 state
const actions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
});
// state.test = 3
actions.setGlobalState(state);
// actions.offGlobalStateChange();