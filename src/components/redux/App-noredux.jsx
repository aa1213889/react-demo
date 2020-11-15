/**App.jsx 不使用redux的写法*/
import React from 'react'
class App extends React.Component {

  state = {
    count: 0
  }

  increment = () => {
    const number = this.selects.value * 1
    const count = this.state.count
    this.setState({ count: count + number })
  }

  decrement = () => {
    const number = this.selects.value * 1
    const count = this.state.count
    this.setState({ count: count + number })
  }

  incrementOdd = () => {
    const number = this.selects.value * 1
    const count = this.state.count
    if (count % 2 === 1) this.setState({ count: count + number })
  }

  incrementAsync = () => {
    const number = this.selects.value * 1
    const count = this.state.count
    setTimeout(() => {
      this.setState({ count: count + number })
    }, 1000)
  }

  render () {
    return (
      <div className="container">
        <p> click {this.state.count} times</p>
        <div className="container">
          <div className="row d-flex">
            <select ref={select => this.selects = select}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button onClick={this.increment} className="btn btn-primary ml-1">+</button>
            <button onClick={this.decrement} className="btn btn-primary ml-1">-</button>
            <button onClick={this.incrementOdd} className="btn btn-primary ml-1">increment if odd</button>
            <button onClick={this.incrementAsync} className="btn btn-primary ml-1">increment async</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App


/**
 * npm install --save redux
 */

