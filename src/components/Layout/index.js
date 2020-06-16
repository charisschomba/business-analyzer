import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./index.css"
import { withRouter } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/index"

const Layout = (props) => {
  return (
    <div>
      <Header loggedIn={props.loggedIn} history={props.history} />
      <div className="row p-0 mt-5 mx-2 justify-content-center">
        <div className="col p-0">{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.any.isRequired,
  loggedIn: PropTypes.bool,
  user: PropTypes.string,
}
export default withRouter(Layout)
