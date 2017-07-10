import React from 'react';
import ChatBox from '../ChatBox/ChatBox';

export default class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      msgs: [{
        userID: null,
        msg: null
      }]
    }
  }

  render() {
    return (

      <ChatBox/>
    )
  }
}

