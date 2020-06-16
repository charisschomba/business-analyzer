import {
  SAVE_USER,
  SAVE_USER_ERROR,
  SAVE_USER_SUCCESS,
  CLEAR_USER_ERRORS,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
} from "../constants"
import api from "../../utils/api"

export const startAuth = (authType) => {
  let type = authType === "signup" ? SAVE_USER : LOGIN_USER
  return {
    type,
  }
}

export const authSuccess = (payload, authType) => {
  let type = authType === "signup" ? SAVE_USER_SUCCESS : LOGIN_USER_SUCCESS
  return {
    type,
    payload,
  }
}

export const authError = (payload, authType) => {
  let type = authType === "signup" ? SAVE_USER_ERROR : LOGIN_USER_ERROR
  return {
    type: type,
    payload,
  }
}

export const auth = (data, callback, authType = "signup") => async (dispatch) => {
  let endpoint = "/signup"
  if (authType === "login") {
    endpoint = "/signin"
  }
  dispatch(startAuth(authType))
  dispatch({ type: CLEAR_USER_ERRORS })
  try {
    const response = await api.post(endpoint, data)
    dispatch(authSuccess(response.data, authType))
    if (authType === "signup") {
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user", response.data.user)
      callback()
    } else {
      localStorage.setItem("user", response.data.user.username)
      localStorage.setItem("token", response.data.user.token)
      callback("/dashboard")
    }
  } catch (error) {
    error.response
      ? dispatch(authError(error.response.data, authType))
      : dispatch(authError("Something went wrong try again"), authType)
  }
}

export default auth
