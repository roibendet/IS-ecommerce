import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Root from '../main/main';
import Buy from '../buy/buy';
import BackOffice from '../Backoffice/backoffice';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/*not done*/}
        {/*<Route exact path="/signin" component={Signin}/>*/}
        {/*not done*/}
        <Route exact path="/buy" component={Buy}/>
        <Route exact path="/backofficepage" component={BackOffice}/>
        <Route path="/" component={ Root }/>
      </Switch>
    </BrowserRouter>

  )
}





