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
 * 1.搜索栏 输入github用户名 点击搜索
 * 2.出现用户头像 名字 和github地址
 * 3.接口：`https://api.github.com/search/users?q=${用户名}`
 */
