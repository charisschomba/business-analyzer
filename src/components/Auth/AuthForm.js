import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import PropTypes from "prop-types"
import { useHistory } from "react-router-dom"
import { Form } from "react-bootstrap"
import Input from "../Common/Input"
import Button from "../Common/Button"
import "./index.scss"
import { validateEmail, buttonDisabled } from "../../utils/validations"
import auth from "../../store/actions/users"

const AuthForm = ({ signup }) => {
  const [username, setUsername] = useState("")
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirm] = useState("")
  const [error, setError] = useState("")
  const [isError, setIsError] = useState(false)
  const [savingUser, setSavingUser] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  const redirect = (path = "/add-business") => {
    history.push(path)
  }
  const login = () => {
    validateEmail(email, setIsError, setError)
    dispatch(auth({ email, password }, redirect, "login"))
  }
  const registerUser = () => {
    dispatch(auth({ username, password, fullname, email }, redirect))
  }
  const user = useSelector(({ users }) => users)
  useEffect(() => {
    setError(user.errors)
    setSavingUser(user.saving)
    setIsError(user.errors.isError)
  }, [user, savingUser])
  return (
    <Form className="auth-form">
      {isError && (
        <p className="text-center text-danger">
          {(error.message && error.message.message) || error}
        </p>
      )}
      {signup && (
        <Input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          handler={setUsername}
        />
      )}
      {signup && (
        <Input
          id="fullname"
          type="text"
          placeholder="Fullname"
          value={fullname}
          handler={setFullname}
        />
      )}
      <Input
        id="email"
        type="email"
        placeholder="Enter email"
        handler={setEmail}
        value={email}
      />
      <Input
        id="password"
        type="password"
        placeholder="password"
        value={password}
        handler={setPassword}
      />
      {signup && (
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={confirm_password}
          handler={setConfirm}
        />
      )}
      <Button
        title={signup ? "Register" : "Login"}
        handler={signup ? registerUser : login}
        loading={savingUser}
        disabled={
          buttonDisabled({
            email,
            password,
            confirm_password,
            fullname,
            username,
            signup,
          }) || savingUser
        }
      />
    </Form>
  )
}
AuthForm.propTypes = {
  signup: PropTypes.bool,
}
export default AuthForm
