import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import uploadfile from "../../store/actions/upload"
import CustomButton from "../Common/Button"

const UploadCsv = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const upload = useSelector(({ upload }) => upload)
  const [csv, setFile] = useState("")
  const onChange = (event) => {
    setFile(event.target.files[0])
  }
  const redirect = () => history.push("/dashboard")
  const handleUpload = () => {
    setIsError(false)
    const data = new FormData()
    data.append("csv", csv)
    dispatch(uploadfile(data, redirect))
  }
  useEffect(() => {
    setIsUploading(upload.saving)
    setIsError(upload.errors.isError)
    setError(upload.errors.errors)
  }, [upload])
  return (
    <div className="upload-container">
      <form className="md-form upload-form">
        {isError && <p className="text-center text-danger">{error}</p>}
        <div className="col d-flex ">
          <input onChange={(e) => onChange(e)} type={"file"} className="input" />
        </div>
        <div className="col mt-5">
          <CustomButton handler={handleUpload} loading={isUploading} title="Upload" />
        </div>
      </form>
    </div>
  )
}
export default UploadCsv
