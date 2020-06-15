import React from "react"
import ROUTES from "./routes"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Auth from "../components/Auth/Auth"

export default () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.index} component={Auth} />
    </Switch>
  </Router>
)
