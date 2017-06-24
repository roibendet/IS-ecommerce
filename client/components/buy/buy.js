import React from 'react';

import {Link} from 'react-router-dom'
// import countries from 'country-list';
var countries = require('country-list')();


let firstName;
let lastName;
let email;
let country;
let userData = {};


export default class Buy extends React.Component {
  constructor() {
    super();

  }


  onSubmit(event) {
    event.preventDefault();

    userData = {
      firstName,
      lastName,
      email,
      country
    };

// console.info(serverLocation);
    const xhr = new XMLHttpRequest();
    xhr.open('post', 'http://localhost:3000/userData');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener("load", () => {
        console.info(xhr.responseText);
      }
    );
    xhr.send(JSON.stringify(userData));
    // firstName = '';
    // lastName = '';
    // email = '';
    // country = '';

  }

  componentDidMount() {

  }

  getListOfCountries() {
    const listOfCountries = countries.getNames();

    return listOfCountries.map((country, i) => {
      return <option className="option" key={i} value={country} onChange={this.onChangeHandler}>{country}</option>
    })
  }


  onChangeHandler(event) {

    if (event.target.placeholder === 'First name') {
      firstName = event.target.value;
    }

    if (event.target.placeholder === 'Last name') {
      lastName = event.target.value;
    }

    if (event.target.placeholder === 'Email') {
      email = event.target.value;
    }

    if (event.target.placeholder === undefined) {
      event.target.blur();
      country = event.target.selectedOptions[0].value;
    }
  }

  /*test() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:3000/backOffice');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener("load", () => {
        console.info(JSON.parse(xhr.responseText));
      }
    );
    xhr.send();
  }*/

  clicker(event) {
    // console.info(event);
    event.target.blur();
  }


  render() {

    return (
      <div className="my-page">


        <h1>Buying Page</h1>

        <div className="my-container">

          <form className="form-horizontal" onSubmit={this.onSubmit}>

            <h4>Personal Details</h4>

            <div className="form-group">

              <label htmlFor="inputFirstName3" className="col-sm-2 control-label">First name</label>

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
                     className="col-sm-2 control-label">Last name
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
                     className="col-sm-2 control-label">Email
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
                     className="col-sm-2 control-label">Country
              </label>

              <div className="col-sm-10">

                <select id="inputCountry3"
                        placeholder="Country"
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
                        // onClick={this.onSubmit}
                        className="btn btn-default">Buy it now
                </button>

              </div>

            </div>


          </form>

          {/*<button className="sign-submit-btn" */}
                  {/*onClick={() => this.test()} */}
                  {/*type="submit">test*/}
          {/*</button>*/}

          <Link to="/backofficepage" className="btn btn-success backoffice-btn">Back office</Link>


        </div>


      </div>


    )
  }
}



