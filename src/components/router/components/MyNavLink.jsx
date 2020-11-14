/**
 * 自定义active样式
 * 1.使用NavLink选中后 会有默认的active样式
 * 2.通过activeClassName属性 指定切换默认的active样式
 * 3.{...this.props} 将MyNavLink属性引入
 */

/**
 * 1.新建自定义的MyNavLink.jsx
 * 2.导出
 * 3.把NavLink换为MyNavLink
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MyNavLink extends Component {
  render () {
    return (
      <NavLink {...this.props} activeClassName='activeTest' />
    )
  }
}
