import React, { Fragment } from "react"
import { Tab, Tabs } from "react-bootstrap"
import FormComponent from "./AuthForm"

const AuthForm = () => {
  return (
    <Fragment>
      <h1 className="text-center mt-3">Welcome Business Anayzer</h1>
      <h4 className="text-center">Get started</h4>
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
    </Fragment>
  )
}
export default AuthForm
