import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import uploadfile from "../../store/actions/upload"
import CustomButton from "../Common/Button"

const UploadCsv = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const upload = useSelector(({ upload }) => upload)
  const [csv, setFile] = useState("")
  const onChange = (event) => {
    setFile(event.target.files[0])
  }
  const redirect = () => history.push("/dashboard")
  const handleUpload = () => {
    const data = new FormData()
    data.append("csv", csv)
    dispatch(uploadfile(data, redirect))
  }
  useEffect(() => {}, [upload])
  return (
    <form className="md-form">
      <div className="">
        <span>Choose file</span>
        <input onChange={(e) => onChange(e)} type={"file"} />
      </div>
      <CustomButton handler={handleUpload} loading={false} title="Upload" />
    </form>
  )
}
export default UploadCsv
