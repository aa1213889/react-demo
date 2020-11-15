/** 初始化 redux */
import { createStore } from 'redux'
import { counter } from './reducers'

const store = createStore(counter) //1.内部会调用一次reduer函数得到初始state

export default store