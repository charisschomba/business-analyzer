import React from "react"
import ROUTES from "./routes"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Auth from "../components/Auth/Auth"
import BusinessForm from "../components/Business/AddBusinessForm"
import UploadCsv from "../components/Business/Upload"
import Dashboard from "../components/Statistics/Dashboard"
import { Provider } from "react-redux"
import store from "../store"
import Layout from "../components/Layout"

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path={ROUTES.index} component={Auth} />
          <Layout loggedIn={true}>
            <Route path={ROUTES.business} component={BusinessForm} />
            <Route path={ROUTES.upload} component={UploadCsv} />
            <Route path={ROUTES.dashboard} component={Dashboard} />
          </Layout>
        </Switch>
      </Router>
    </Provider>
  )
}
