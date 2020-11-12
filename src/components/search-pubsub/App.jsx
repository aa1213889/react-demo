/**App.jsx */
import React from 'react'
import Main from './Main'
import Header from './Header'

class App extends React.Component {

  render () {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App


/**
 * PubSubJs 使用订阅(subscribe) --- 发布(publish)思想
 * 解决多重组件传递内容繁琐复杂 类似于Vue中的$emit() $on()
 * 参考7.2代码减少量
 * 1.下载 npm i --save pubsub-js
 * 2.发布：PubSub.publish('search', data)
 * 3.订阅：PubSub.subscribe('search', (msg, data) => {})
 */