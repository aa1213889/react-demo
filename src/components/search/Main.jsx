/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/**Main.jsx */
import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class Main extends React.Component {

  static propTypes = {
    searchName: PropTypes.string.isRequired
  }

  state = {
    initView: true,
    loading: false,
    users: null,
    errMsg: null
  }

  /**组件收到新的props调用，第一次渲染不会调用 */
  componentWillReceiveProps (newProps) {
    const { searchName } = newProps
    this.setState({
      initView: false,
      loading: true,
    })
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(res => {
        const users = res.data.items.map((item, index) => {
          return {
            name: item.login,
            url: item.html_url,
            avatarUrl: item.avatar_url
          }
        })
        this.setState({ loading: false, users })
      }).catch(err => {
        this.setState({ loading: false, errMsg: err.message })
      })
  }


  render () {
    const { initView, loading, users, errMsg } = this.state
    const { searchName } = this.props
    if (initView) {
      return <h2>请输入关键字搜索{searchName}</h2>
    } else if (loading) {
      return <h2>搜索中，请稍等</h2>
    } else if (errMsg) {
      return <h2>{errMsg}</h2>
    } else if (users) {
      return (
        <div className="row">
          {
            users.map((val, index) => (
              <div className="card" key={index}>
                <a href={val.url} target="_blank">
                  <img src={val.avatarUrl} style={{ width: 100 }} />
                </a>
                <p className="card-text">{val.name}</p>
              </div>
            ))
          }
        </div>
      )
    }
  }
}

export default Main
