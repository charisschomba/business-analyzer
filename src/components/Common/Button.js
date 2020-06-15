import React from "react"
import PropTypes from "prop-types"
import { Button, Spinner } from "react-bootstrap"
const CustomButton = ({ title, handler, disabled, style, loading }) => {
  return (
    <div className="col d-flex justify-content-center px-0">
      <Button
        id="button"
        className={style}
        type="button"
        onClick={handler}
        disabled={disabled}
      >
        {loading && (
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
        {!loading ? title : "Loading"}
      </Button>
    </div>
  )
}
CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.string,
  loading: PropTypes.bool.isRequired,
}
export default CustomButton
