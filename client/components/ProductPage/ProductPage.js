import React from 'react';
import {Link} from 'react-router-dom';
import './ProductPage.css';

export default class ProductPage extends React.Component {
  constructor() {
    super()
  }

  listOfProductsCreator() {

    const Products = this.props.data;
    return Products.map((product, i) => {
      return <div key={i}>
        <h1>{product.name}</h1>
        <div className="text-container">
          < p
            className="item-description-text"> {product.descriptionIntro
          }</p>
          <p className="item-description-text">{product.descriptionOfProduct}</p>
        </div>
      </div>
    })
  }

  render() {
    return (
      <div className="my-page">

        <div className="my-container">

          {this.listOfProductsCreator()}

          <Link to="/buying"
                className="btn btn-primary my-btn">Proceed to payment
          </Link>

          <Link to="/backofficepage"
                className="btn btn-success backoffice-btn">Back office
          </Link>

        </div>

      </div>
    )
  }
}
