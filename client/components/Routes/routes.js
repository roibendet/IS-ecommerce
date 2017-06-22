import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Root from '../main/main';
import Buy from '../buy/buy';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/*not done*/}
        {/*<Route exact path="/signin" component={Signin}/>*/}
        {/*not done*/}
        <Route exact path="/is-ecommerce/buy" component={Buy}/>
        <Route path="/" component={ Root }/>
      </Switch>
    </BrowserRouter>

  )
}





