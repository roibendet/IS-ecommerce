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

        <h1 className="product-title">{product.name}</h1>

        <div className="text-container">

          <p className="item-description-text">{product.descriptionOfProduct}</p>

        </div>

      </div>
    })
  }

  render() {
    return (
      <div className="my-page">

        <div className="my-container my-pull-right">

          {this.listOfProductsCreator()}

          <Link to="/buying"
                className="btn btn-default my-btn">BUY ON <b>$299.95</b>
          </Link>

          <Link to="/backofficepage"
                className="btn btn-success backoffice-btn">Back office
          </Link>

        </div>

        <div className="image-wrapper"/>

      </div>
    )
  }
}
