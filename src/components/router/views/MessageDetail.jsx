/** MessageDetail.jsx */
import React, { Component } from 'react'

const message = [
  { id: 1, title: 'message001', content: 'AAAAAA' },
  { id: 3, title: 'message003', content: 'BBBBBB' },
  { id: 5, title: 'message005', content: 'CCCCCC' },
  { id: 7, title: 'message007', content: 'DDDDDD' }
]

class MessageDetail extends Component {
  render () {
    const id = parseInt(this.props.match.params.id)
    const item = message.find((m) => m.id === id)
    return (
      <ul>
        <li>ID:{item.id}</li>
        <li>TITLE:{item.title}</li>
        <li>CONTENT:{item.content}</li>
      </ul>
    )
  }
}

export default MessageDetail
