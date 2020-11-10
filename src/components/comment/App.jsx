/**App.jsx */
import React from 'react'
import AppAdd from './AppAdd'
import AppList from './AppList'
import './App.css'
class App extends React.Component {

  state = {
    comments: [
      { username: '酱汁', content: 'Vue.js天下第一' },
      { username: 'jz', content: 'React.js倒数第一' }
    ]
  }

  /**得到add添加的comment并更新 */
  addComment = (comment) => {
    const { comments } = this.state
    comments.unshift(comment)
    this.setState(comments)
  }

  /**删除comment并更新 */
  delComment = (index) => {
    const { comments } = this.state
    comments.splice(index, 1)
    this.setState(comments)
  }

  render () {
    return (
      <div>
        <header className="site-header">
          <h1>请发表对React的评论</h1>
        </header>
        <div className="container">
          <div className="row">
            <AppAdd addComment={this.addComment} />
            <AppList comments={this.state.comments} delComment={this.delComment} />
          </div>
        </div>
      </div>
    )
  }
}

export default App



/**
 * 需求：
 * 1.发布评论页面： 用户名input 评论内容textarea 提交按钮
 * 2.评论页面：显示发布的言论 并有用户名 评论内容 和删除评论的功能
 */

/**
 * 准备工作 react引入Bootstrap
 * 1.npm install react-bootstrap bootstrap
 * 2.在src/index.js中或App.js中
 *   import 'bootstrap/dist/css/bootstrap.min.css'
 * 3.npm install --save prop-types
 */
