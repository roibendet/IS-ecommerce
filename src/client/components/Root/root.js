import React from 'react';
import ProductPage from "../ProductPage/ProductPage";
import Products from '../../assets/Products/Products';

export default class Root extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (

      <ProductPage data={Products}/>

    )
  }
}
