import React from "react"
import { useHistory } from "react-router-dom"
import "./Header.scss"
import { Navbar } from "react-bootstrap"
import PropTypes from "prop-types"

const Header = ({ loggedIn }) => {
  let history = useHistory()
  const logout = () => {
    localStorage.removeItem("token")
    history.push("/")
  }
  return (
    <Navbar bg="#0288D1" expand="lg" className="header">
      <Navbar.Brand className="text-white" href="/home">
        Business Analyzer
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {loggedIn && (
          <button className="logout" onClick={logout}>
            Logout
          </button>
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}
Header.propTypes = {
  loggedIn: PropTypes.string,
}
export default Header
