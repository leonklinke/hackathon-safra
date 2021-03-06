import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import GuardedRoute from './GuardedRoute';

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/scss/argon-design-system-react.scss";

// import Index from "views/Index.js";
import Index from "./views/Index.js";
import Landing from "./views/Landing.js";
import Login from "./views/components-login/Login.js";
import PassRecover from "./views/components-login/PassRecover.js";
import CreateAccount from "./views/components-login/CreateAccount.js";
import Offers from "./views/components-offers/Offers.js";
import DetailsOffers from "./views/components-offers/OffersDetails.js";
import Investments from "./views/components-investments/Investments.js";
import DetailsInvestments from "./views/components-investments/InvestmentsDetails.js";
import EssentialDocuments from "./views/EssentialDocuments.js";
import Account from "./views/Account.js";

import './index.css';

import * as serviceWorker from './serviceWorker';

let token = localStorage.getItem('TOKEN_KEY');

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <GuardedRoute path="/" exact component={Index} />
      <GuardedRoute path="/landing-page" component={Landing} />
      <GuardedRoute path="/ofertas" component={Offers} />
      <GuardedRoute path="/detalhe-ofertas/:id" component={DetailsOffers} />
      <GuardedRoute path="/investimentos" component={Investments} />
      <GuardedRoute path="/detalhe-investimentos/:id" component={DetailsInvestments} />
      <GuardedRoute path="/documentos-essenciais/:id" component={EssentialDocuments} />
      <GuardedRoute path="/conta" component={Account} />
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Route path="/recover-pass" exact render={props => <PassRecover {...props} />} />
      <Route path="/create-account" exact render={props => <CreateAccount {...props} />} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
