import React from 'react';
import {Link} from 'react-router-dom'

export default class Root extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="my-page">

        <div className="my-container">

        <h1>Ethereum Miner 50MH</h1>

        <div className="text-container">

          <p className="item-description-text">Ethereum is the potential successor of Bitcoin, a cryptocurrency wich is winning populairity. Mining Ethereum is verry profitable, it is expected that Ethereum will grow further in price.</p>

          <p className="item-description-text">Our mining rigs are specially developed and configurated for Ethereum mining. With this miner you will mine at approx. 50 MH/s (+- 5%) what equals to about € 8,00 profit a day. (Calculated on 02/06/2017. This depends on the value of ethereum and the hash speed of the network and changes daily)</p>

        </div>

        <Link to="/buying"
              // onClick={() => this.purchaseHandler() }
              className="btn btn-primary">Proceed to payment
        </Link>

        </div>
      </div>
    )
  }
}
