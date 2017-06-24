import React from 'react';

export default class BackOffice extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    this.backOfficeHandler()
  }

  backOfficeHandler() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:3000/backOffice');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener("load", () => {
      let customers = JSON.parse(xhr.responseText);
      this.setState({customers});
    });
    xhr.send();

  }

  listCreator() {

    return this.state.customers.map((customer, i) => {
      return <tr key={i}>
        <td>{i + 1}</td>
        <td>{customer.firstName}</td>
        <td>{customer.lastName}</td>
        <td>{customer.email}</td>
        <td>{customer.country}</td>
      </tr>
    })
  }

  render() {

    if (this.state.customers.length === 0) {
      return <div className="my-page"><div className="my-container"><h1>No data in DB</h1></div></div>
    }
    return (

      <div className="my-page">

        <div className="my-container">

          <h1>Back Office</h1>

          <div>

            <table className="table">

              <tr>

                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Country</th>

              </tr>

              {this.listCreator()}

            </table>

          </div>

        </div>

      </div>
    )
  }
}