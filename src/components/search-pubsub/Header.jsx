/**Header.jsx */
import React from 'react'
import PubSub from 'pubsub-js'

class Header extends React.Component {

  state = {
    text: ''
  }

  hanlderText = (event) => {
    const val = event.target.value
    this.setState({ text: val })
  }

  search = () => {
    const name = this.state.text
    /**1.拿到名字后应该发布消息 */
    if (name) PubSub.publish('search', name)
  }
  render () {
    return (
      <section>
        <h3>Search Github User</h3>
        <div>
          <input placeholder="enter the name" value={this.state.text}
            onChange={this.hanlderText} />
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}

export default Header
