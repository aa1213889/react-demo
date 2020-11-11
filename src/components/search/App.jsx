/**App.jsx */
import React from 'react'
import Main from './Main'
import Header from './Header'

class App extends React.Component {

  state = {
    searchName: ''
  }

  setSearchName = (name) => {
    this.setState({ searchName: name })
  }

  render () {
    return (
      <div className="container">
        <Header setSearchName={this.setSearchName} />
        <Main searchName={this.state.searchName} />
      </div>
    )
  }
}

export default App



/**
 * 需求：
 * 1.根据指定关键字在github上搜索匹配最受关注的库
 * 2.显示库名，点击链接查看库
 * 3.接口：https://api.github.com/search/repositories?q=r&sort=stars
 */
