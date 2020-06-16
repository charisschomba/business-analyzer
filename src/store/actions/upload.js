import { UPLOAD_ERROR, UPLOAD_SUCCESS, START_UPLOAD } from "../constants"
import api from "../../utils/api"

const token = localStorage.getItem("token")

export const startUpload = () => {
  return {
    type: START_UPLOAD,
  }
}

export const uploadSuccess = (payload) => {
  return {
    type: UPLOAD_SUCCESS,
    payload,
  }
}

export const uploadError = (payload) => {
  return {
    type: UPLOAD_ERROR,
    payload,
  }
}

export const upload = (data, callback) => async (dispatch) => {
  dispatch(startUpload())
  try {
    const response = await api.post("/upload", data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    })
    dispatch(uploadSuccess(response))
    callback()
  } catch (error) {
    error.response
      ? dispatch(uploadError(error.response.data.error))
      : dispatch(uploadError("Something went wrong try again"))
  }
}

export default upload
