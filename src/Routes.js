import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import App from "./App";

const Routes = () => (
  <Router>
    <div>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
      <Route path={`${process.env.PUBLIC_URL}/step-one`} component={App} />
    </div>
  </Router>
);

export default Routes;
