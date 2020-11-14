/**
 * 1.下载：npm install --save react-router-dom
 * 2. 创建配置路由文件 ---项目的根目录
 * 3. BrowserRouter 
 *    Browser history 是使用 React Router 的应用推荐的 history。
 *    它使用浏览器中的 History API 用于处理 URL，创建一个像example.com/some/path这样真实的 URL 
 */

/**index.js */
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/app'

render(
  (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ),
  document.getElementById('root')
)