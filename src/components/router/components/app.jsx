/**App.jsx */
/**
 * NavLink :点击跳转
 * Switch :包含要切换的页面
 * Route :路由页面
 * Redirect :重定向
 */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from '../views/about'
import Home from '../views/home'
import MyNavLink from './MyNavLink'
class App extends React.Component {

  render () {
    return (
      <div className="container">
        <header>
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </header>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              <MyNavLink className="list-group-item" to='/about' activeClassName>About</MyNavLink>
              <MyNavLink className="list-group-item" to='/home'>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                  <Redirect to='/about' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
