import React from 'react';
import {Link} from 'react-router-dom'
import './Buying.css';

import countryList from 'country-list';

export default class Buy extends React.Component {
  constructor() {
    super();
    this.state = {
      paid: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);

    this.userData = {
      firstName: null,
      lastName: null,
      email: null,
      country: null
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.open('post', 'http://localhost:3000/userData');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.addEventListener('load', () => {
      this.setState({paid: true}, console.info(xhr.responseText))
    });

    xhr.send(JSON.stringify(this.userData));
  }

  getListOfCountries() {
    const countries = countryList();
    const listOfCountries = countries.getNames();

    return listOfCountries.map((country, i) => {
      return <option className="option" key={i} value={country} onChange={this.onChangeHandler}>{country}</option>
    })
  }

  onChangeHandler(event) {

    if (event.target.id === 'inputFirstName3') {
      this.userData.firstName = event.target.value;
    }

    if (event.target.id === 'inputLastName3') {
      this.userData.lastName = event.target.value;
    }

    if (event.target.id === 'inputEmail3') {
      this.userData.email = event.target.value;
    }

    if (event.target.id === 'inputCountry3') {
      this.userData.country = event.target.value;
    }
  }


  render() {

    switch (this.state.paid) {
      case true:
        return <div className="my-page">

          <div className="my-container"><h1 className="backoffice-title">Thank you for your purchase</h1>

            <p>Receipt was sent to your e-mail</p>

            <Link to="/backofficepage"
                  className="btn btn-success backoffice-btn">Back office
            </Link>

          </div>

        </div>;

      case false:
        return (<div className="my-page">

          <div className="my-container">

            <form className="form-horizontal my-form" onSubmit={this.onSubmit}>

              <h1 className="form-title">Personal Details</h1>

              <div className="form-group">

                <label htmlFor="inputFirstName3" className="col-sm-2 control-label my-label">First name</label>

                <div className="col-sm-10">

                  <input type="text"
                         className="form-control"
                         id="inputFirstName3"
                         placeholder="First name"
                         onChange={this.onChangeHandler}
                         required/>

                </div>

              </div>

              <div className="form-group">

                <label htmlFor="inputLastName3"
                       className="col-sm-2 control-label my-label">Last name
                </label>

                <div className="col-sm-10">

                  <input type="text"
                         className="form-control"
                         id="inputLastName3"
                         placeholder="Last name"
                         onChange={this.onChangeHandler}
                         required/>
                </div>

              </div>

              <div className="form-group">

                <label htmlFor="inputEmail3"
                       className="col-sm-2 control-label my-label">Email
                </label>

                <div className="col-sm-10">

                  <input type="email"
                         className="form-control"
                         id="inputEmail3"
                         placeholder="Email"
                         onChange={this.onChangeHandler}
                         required/>
                </div>

              </div>

              <div className="form-group">

                <label htmlFor="inputCountry3"
                       className="col-sm-2 control-label my-label">Country
                </label>

                <div className="col-sm-10">

                  <select id="inputCountry3"
                          onChange={this.onChangeHandler}
                          className="form-control"
                          required>
                    <option/>

                    {this.getListOfCountries()}
                  </select>

                </div>

              </div>

              <div className="form-group">

                <div className="col-sm-offset-2 col-sm-10">

                  <button type="submit"
                          className="btn btn-default my-btn buy-it">Buy it now
                  </button>

                </div>

              </div>

            </form>

            <Link to="/backofficepage"
                  className="btn btn-success backoffice-btn">Back office
            </Link>

          </div>

        </div>)


    }
  }
}



