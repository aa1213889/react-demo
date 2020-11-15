import React from 'react'
import * as action from '../../redux/actions'
class App extends React.Component {

  state = {
    count: 0
  }

  increment = () => {
    const number = this.selects.value * 1
    this.props.store.dispatch(action.incrementAction(number)) //2.传到actions里 并通过store.dispatch更新数据 
  }

  decrement = () => {
    const number = this.selects.value * 1
    this.props.store.dispatch(action.decrementAction(number)) //2.通过store.dispatch更新数据
  }

  incrementOdd = () => {
    const number = this.selects.value * 1
    const count = this.props.store.getState()
    if (count % 2 === 1) this.props.store.dispatch((action.incrementAction(number)))
  }

  incrementAsync = () => {
    const number = this.selects.value * 1
    setTimeout(() => {
      this.props.store.dispatch((action.incrementAction(number)))
    }, 1000)
  }

  render () {
    const count = this.props.store.getState()  //1.通过store.getState获取
    return (
      <div className="container">
        <p> click {count} times</p>
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

