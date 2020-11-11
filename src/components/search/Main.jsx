/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
/**App.jsx */
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
    console.log(searchName)
    const url = `https://api.github.com/search/users?q=${searchName}`
    axios.get(url)
      .then(res => {
        console.log(res)
      }).catch(err => {

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
    }
    return (
      <div className="row">
        {
          users.map((val, index) => (
            <div className="card">
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

export default Main
