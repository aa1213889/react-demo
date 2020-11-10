/**AppList.jsx */
import React from 'react'
import PropTypes from 'prop-types'
class AppList extends React.Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    delComment: PropTypes.func.isRequired
  }

  state = {
    showElem: 'none'
  }

  handleClick = (item, index) => {
    const { delComment } = this.props
    if (window.confirm(`确定要删${item.username}的评论？`)) {
      delComment(index)
    }
  }

  render () {
    const { comments } = this.props
    return (
      <div className="col-md-8">
        <h1>评论回复：</h1>
        <h2 className={`${comments.length === 0 ? 'show' : 'hide'}`}>暂无评论，点击左侧添加评论！</h2>
        <div className="container">
          <ul>
            {
              comments.map((item, index) =>
                <li className="list-group-item" key={index}>
                  <div className="handle">
                    <button className="btn btn-danger" onClick={e => this.handleClick(item, index)}>删除</button>
                  </div>
                  <p className="user">
                    <span>{item.username}说：</span>
                  </p>
                  <p className="centerce">{item.content}</p>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default AppList