/**Header.jsx */
import React from 'react'
import PropTypes from 'prop-types'
class Header extends React.Component {

  static propTypes = {
    setSearchName: PropTypes.func.isRequired
  }

  state = {
    text: ''
  }

  hanlderText = (event) => {
    const val = event.target.value
    this.setState({ text: val })
  }

  search = () => {
    const name = this.state.text
    if (name) this.props.setSearchName(name)
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
