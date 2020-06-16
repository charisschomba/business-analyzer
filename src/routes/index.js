import React from "react"
import ROUTES from "./routes"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Auth from "../components/Auth/Auth"
import BusinessForm from "../components/Business/AddBusinessForm"
import UploadCsv from "../components/Business/Upload"
import { Provider } from "react-redux"
import store from "../store"

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={ROUTES.index} component={Auth} />
        <Route path={ROUTES.business} component={BusinessForm} />
        <Route path={ROUTES.upload} component={UploadCsv} />
      </Switch>
    </Router>
  </Provider>
)
