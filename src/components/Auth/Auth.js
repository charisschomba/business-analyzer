import React from "react"
import { Tab, Tabs } from "react-bootstrap"
import FormComponent from "./AuthForm"

const AuthForm = () => {
  return (
    <div className="col p-4 container">
      <Tabs id="auth-tab" className="d-flex justify-content-center mb-4">
        <Tab eventKey="login" title="Login">
          <FormComponent />
        </Tab>
        <Tab eventKey="signup" title="Sign Up">
          <FormComponent signup />
        </Tab>
      </Tabs>
    </div>
  )
}
export default AuthForm
