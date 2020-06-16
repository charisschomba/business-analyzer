import React from "react"
import "./Header.scss"
import { Navbar } from "react-bootstrap"
import PropTypes from "prop-types"

const Header = ({ loggedIn, history }) => {
  const user = localStorage.getItem("user")
  const pathLocation = history.location.pathname
  const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    history.push("/")
  }
  return (
    <Navbar bg="#0288D1" expand="lg" className="header">
      <Navbar.Brand className="text-white">{user}</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        {pathLocation === "/dashboard" && (
          <Navbar.Brand className="text-white" href="/upload">
            upload
          </Navbar.Brand>
        )}
        {loggedIn && (
          <Navbar.Brand className="text-white logout" onClick={logout}>
            Logout
          </Navbar.Brand>
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}
Header.propTypes = {
  loggedIn: PropTypes.bool,
  history: PropTypes.object,
}
export default Header
