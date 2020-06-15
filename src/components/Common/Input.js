import React from "react"
import PropTypes from "prop-types"
import "./index.scss"

const Input = ({ id, type, placeholder, info, value, handler }) => {
  return (
    <div className="col">
      <div className="form-row mb-2">
        <div className="col">
          <input
            type={type}
            id={id}
            className="form-control input"
            placeholder={placeholder}
            value={value}
            onChange={(event) => handler(event.target.value)}
          />
        </div>
      </div>
      <p className="p-0 text-muted info">{info}</p>
    </div>
  )
}
Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  info: PropTypes.string,
  value: PropTypes.string,
  handler: PropTypes.func.isRequired,
}
export default Input
