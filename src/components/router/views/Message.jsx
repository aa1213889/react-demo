/**Message.jsx */
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MessageDetail from './MessageDetail'

export default class Message extends Component {

  state = {
    message: [
      { id: 1, title: 'message001' },
      { id: 3, title: 'message003' },
      { id: 5, title: 'message005' },
      { id: 7, title: 'message007' }
    ]
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.state.message.map((news, index) => (
              <li key={index}>
                <a href={`/home/message/detail/${news.id}`}>{news.title}</a>
              </li>
            ))
          }
        </ul>
        <Route path={`/home/message/detail/:id`} component={MessageDetail} />
      </div>
    )
  }
}
