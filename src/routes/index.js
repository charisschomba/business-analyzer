import React from "react"
import ROUTES from "./routes"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Auth from "../components/Auth/Auth"
import { Provider } from "react-redux"
import store from "../store"

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={ROUTES.index} component={Auth} />
      </Switch>
    </Router>
  </Provider>
)
