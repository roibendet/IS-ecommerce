import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ProductPage from '../productPage/ProductPage';
import Buying from '../buying/Buying';
import BackOffice from '../backoffice/Backoffice';

export default function Routes() {
  return (
    <BrowserRouter>

      <Switch>

        <Route exact path="/buying" component={Buying}/>
        <Route exact path="/backofficepage" component={BackOffice}/>
        <Route path="/" component={ProductPage}/>

      </Switch>

    </BrowserRouter>

  )
}





