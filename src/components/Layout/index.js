import React from "react"
import PropTypes from "prop-types"
import "./index.css"
import Header from "../Header/Header"
import Footer from "../Footer/index"
const Layout = (props) => {
  return (
    <div>
      <Header loggedIn={props.loggedIn} />
      <div className="row p-0 mt-5 mx-2 justify-content-center">
        <div className="col p-0">{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.object.isRequired,
  loggedIn: PropTypes.string,
}
export default Layout
