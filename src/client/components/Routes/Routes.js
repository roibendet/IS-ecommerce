import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Root from '../Root/Root';
import Buying from '../Buying/Buying';
import BackOffice from '../Backoffice/Backoffice';

export default function Routes() {
  return (
    <BrowserRouter>

      <Switch>

        <Route exact path="/buying" component={Buying}/>
        <Route exact path="/backofficepage" component={BackOffice}/>
        <Route path="/" component={Root}/>

      </Switch>

    </BrowserRouter>

  )
}





