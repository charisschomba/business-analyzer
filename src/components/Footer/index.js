import React from "react"
import "./index.scss"
const Footer = () => {
  return (
    <div className="col footer d-flex justify-content-center pt-3">
      <p>
        <span>Business Analyzer &copy;</span> <span>{new Date().getFullYear()}</span>
      </p>
    </div>
  )
}
export default Footer
