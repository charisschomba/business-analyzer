import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Router from "./routes"
import Layout from "./components/Layout"

ReactDOM.render(
  <Layout>
    <Router />
  </Layout>,
  document.getElementById("root")
)
