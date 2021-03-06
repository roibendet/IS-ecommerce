import React from 'react';
import io from 'socket.io-client'
import '../../assets/Styles/Bootstrap.css';
import './ChatBox.css';

export default class ChatBox extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      users: []
    };

    this.userData = {
      userID: null,
      userMsg: null,

    };
    this.socket = io.connect();
    this.onSubmit = this.onSubmit.bind(this);
    this.msgsInChatBuilder = this.msgsInChatBuilder.bind(this)
  }

  onSubmit(event) {
    event.preventDefault();
    this.userData.userMsg = event.target[0].value;
    this.userData.userID = this.props.username;
    this.socket.emit('send message', this.userData);
    this.msg.value = '';

  }

  componentDidMount() {
    const that = this;
    this.socket.emit('new user', this.props.username, function (data) {
      console.info(data);

    });

    this.socket.on('get users', function (data) {
      console.info('all users',data);
      that.setState({users: data});

    })

  }


  msgsInChatBuilder() {
    const that = this;
    this.socket.on('new message', function (data) {
      const newState = that.state.messages;

      if (that.state.messages.length === 0) {
        newState.push(data);
        return that.setState({messages: newState});
      }

      if (that.state.messages.length > 0) {
        if (that.state.messages[that.state.messages.length - 1].data.userMsg === data.data.userMsg) {
          return;

        }
        else {
          newState.push(data);
          that.setState({messages: newState});
        }

      }


    });

    return this.state.messages.map((msg, i) => {
      return <li key={i} className="msg">
        <strong>{this.state.messages[i].data.userID}:</strong>{this.state.messages[i].data.userMsg}</li>
    })
  }


  render() {

    return (
      <div className="container">
        <div className="row">


          <div className="col-sm-4">

            <div className="well">
              <h3>online users</h3>
              <ul className="list-group" id="users">{this.state.users}</ul>
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



