/**home.jsx */
import React, { Component } from 'react'
import MyNavLink from '../components/MyNavLink'
import { Switch, Route, Redirect } from 'react-router-dom'
import Message from './Message'
import News from './News'
export default class Home extends Component {
  render () {
    return (
      <div>
        <h2>home</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to='/home/news'>News</MyNavLink>
            </li>
            <li>
              <MyNavLink to='/home/message'>Message</MyNavLink>
            </li>
          </ul>
          <div className="container">
            <Switch>
              <Route path='/home/news' component={News} />
              <Route path='/home/message' component={Message} />
              <Redirect to='/home/news' />
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

/**
 * 在home中在嵌套层路由
 * 有news和message模块
 */
