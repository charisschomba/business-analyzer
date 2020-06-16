import React from "react"
import "./Header.scss"
import { Navbar } from "react-bootstrap"
import PropTypes from "prop-types"

const Header = ({ loggedIn }) => {
  return (
    <Navbar bg="#0288D1" expand="lg" className="header">
      <Navbar.Brand className="text-white" href="/upload">
        Business Analyzer
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
    </Navbar>
  )
}
Header.propTypes = {
  loggedIn: PropTypes.bool,
  history: PropTypes.object,
}
export default Header
