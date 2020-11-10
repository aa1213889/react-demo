/**AppAdd.jsx */
import React from 'react'
import PropTypes from 'prop-types'

class AppAdd extends React.Component {

  static propTypes = {
    addComment: PropTypes.func.isRequired
  }

  state = {
    username: '',
    content: ''
  }

  handleNameChange = (event) => {
    const val = event.target.value
    this.setState({ username: val })
  }

  handleContntChange = (event) => {
    const val = event.target.value
    this.setState({ content: val })
  }

  handleSubmit = () => {
    this.props.addComment({ ...this.state })
    this.setState({ username: '', content: '' })
  }

  render () {
    return (
      <div className="col-md-4">
        <h2>用户名</h2>
        <input placeholder="请输入用户名" value={this.state.username}
          onChange={this.handleNameChange} />
        <h2>评论内容</h2>
        <textarea placeholder="请输入评论内容" value={this.state.content}
          onChange={this.handleContntChange} ></textarea>
        <button onClick={this.handleSubmit}>提交</button>
      </div>
    )
  }
}

export default AppAdd