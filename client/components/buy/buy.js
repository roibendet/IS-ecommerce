import React from 'react';
let firstName;
let lastName;
let email;
let country;


export default class Buy extends React.Component {
  constructor() {
    super();

  }


  onSubmit(event) {
    event.preventDefault();
    // console.info(firstName,lastName,email,country);

    const userData = {
      firstName,
      lastName,
      email,
      country
    };

  }

  componentDidMount() {
  }

  onChangeHandler(event) {
    if (event.target.placeholder === 'first name') {
      firstName = event.target.value;
    }

    if (event.target.placeholder === 'last name') {
      lastName = event.target.value;
    }

    if (event.target.placeholder === 'E-mail') {
      email = event.target.value;
    }

    if (event.target.placeholder === 'country') {
      country = event.target.value;
    }

  }


  render() {

    return (
      <div>
        <h1>Buying Page</h1>


        <form className="buying-form" onSubmit={this.onSubmit}>
          <h4>Personal Details</h4>


          <p ref={(elm) => this.firstNameTitle = elm} className="sign-user-first-name">First Name</p>
          <input ref={(elm) => this.firstNameInput = elm} className="sign-user-first-name-input" type="text"
                 onChange={this.onChangeHandler} placeholder="first name"/>

          <p ref={(elm) => this.lastNameTitle = elm} className="sign-user-last-name">Last Name</p>
          <input ref={(elm) => this.lastNameInput = elm} className="sign-user-last-name-input" type="text"
                 onChange={this.onChangeHandler} placeholder="last name"/>


          <p ref={(elm) => this.userEmailTitle = elm} className="sign-username">Email</p>
          <input ref={(elm) => this.userEmailInput = elm} className="sign-username-input" type="email"
                 onChange={this.onChangeHandler} placeholder="E-mail"/>

          <p className="sign-Country">Country</p>
          <input className="sign-Country-input" type="text" onChange={this.onChangeHandler} placeholder="country"/>

          <button className="sign-submit-btn" type="submit">continue</button>
        </form>

      </div>
    )
  }
}