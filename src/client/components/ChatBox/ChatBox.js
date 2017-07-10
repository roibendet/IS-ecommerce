import React from 'react';
import io from 'socket.io-client'


import '../../assets/Styles/Bootstrap.css';
import './ChatBox.css';

let counter = 0;
export default class ChatBox extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };

    this.userData = {
      userID: null,
      userMsg: null,

    };
    // let socket = io(`http://localhost:3000`);
    this.socket = io.connect();
    this.onSubmit = this.onSubmit.bind(this);
    this.msgsInChatBuilder = this.msgsInChatBuilder.bind(this)
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log(event.target[0].value);
    let message = event.target[0].value;
    this.socket.emit('send message', this.msg.value);

    this.msg.value = '';


  }
  componentDidMount(){


  }

  msgsInChatBuilder() {
    const that = this;
    this.socket.on('new message', function (data) {

      const newState = that.state.messages;

      if (that.state.messages[that.state.messages.length -1] === data.msg) {
return
      }
      else {
        newState.push(data.msg);
        that.setState({messages: newState});

      }


    });


    console.info(this.state);

    return this.state.messages.map((msg, i) => {
      return <li key={i}>{msg}</li>
    })
  }


  render() {

    return (
      <div className="container">
        <div className="row">


          <div className="col-sm-4">

            <div className="well">
              <h3>online users</h3>
              <ul className="list-group" id="users">x</ul>
            </div>
          </div>

          <div className="col-md-4">

            <div className="username-title">name of the other username</div>

            <form className="form-horizontal my-form" onSubmit={this.onSubmit}>

              <div className="form-group">

                <div className="col-sm-10">

                  <input type="text"
                         className="form-control"
                         placeholder="your msg here..."
                         ref={(elm) => this.msg = elm}
                         required
                  />

                </div>

              </div>

            </form>

          </div>


          <div className="col-sm-4">

            <div className="chat">

              <ul className="chatul" ref={(elm) => this.messages = elm}>

                {this.msgsInChatBuilder()}

              </ul>

            </div>

          </div>

        </div>

      </div>

    )
  }
}



