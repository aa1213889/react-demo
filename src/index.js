import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store'
import App from './components/redux/App';
import 'bootstrap/dist/css/bootstrap.min.css'


function render () {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}

render() //2.初始化渲染

store.subscribe(render) //3.订阅监听store的状态变了，就会自动调用进行重绘