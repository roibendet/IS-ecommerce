import React from 'react';
import './Backoffice';

export default class BackOffice extends React.Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      mode: 'loading'
    }
  }

  componentDidMount() {
    this.listOfCustomersFromServer();
    this.refreshData = setInterval(() => this.listOfCustomersFromServer(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.refreshData);
    this.setState({mode: 'loading', customers: []})
  }

  listOfCustomersFromServer() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'http://localhost:3000/backOffice');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.addEventListener("load", () => {

      if (xhr.responseText === 'noData') {
        this.setState({mode: 'noData'});
      }
      else {
        let customers = JSON.parse(xhr.responseText);
        this.setState({customers: customers, mode: 'loaded'});
      }
    });
    xhr.addEventListener('error', () => {

      this.setState({mode: 'error'})
    });
    xhr.send();
  }

  listOfCustomersCreator() {
    return this.state.customers.map((customer, i) => {
      return <tr key={i}>
        <td className="row-number">{i + 1}</td>
        <td className="first-last-name-capitalize">{customer.firstName}</td>
        <td className="first-last-name-capitalize">{customer.lastName}</td>
        <td>{customer.email}</td>
        <td>{customer.country}</td>
      </tr>
    })
  }

  render() {
    switch (this.state.mode) {

      case 'noData':
        return <div className="my-page">
          <div className="my-container"><h1>No data in DB</h1></div>
        </div>;

      case 'loading':
        return <div className="my-page">
          <div className="my-container"><h1>Loading DB</h1></div>
        </div>;
      case 'error':
        return <div className="my-page">
          <div className="my-container"><h1>Error, try again</h1></div>
        </div>;

      case 'loaded':

        return (

          <div className="my-page">

            <div className="my-container">

              <h1>Back Office</h1>

              <div>

                <table className="table">

                  <tbody>

                  <tr>

                    <th>#</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Country</th>

                  </tr>

                  {this.listOfCustomersCreator()}

                  </tbody>

                </table>

              </div>

            </div>

          </div>
        )
    }
  }
}
