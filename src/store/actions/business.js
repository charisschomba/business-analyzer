import { SAVE_BUSINESS, SAVE_BUSINESS_SUCCESS, SAVE_BUSINESS_ERROR } from "../constants"
import api from "../../utils/api"

const token = localStorage.getItem("token")

export const saveBusiness = () => {
  return {
    type: SAVE_BUSINESS,
  }
}

export const saveBusinessSuccess = (payload) => {
  return {
    type: SAVE_BUSINESS_SUCCESS,
    payload,
  }
}

export const saveBusinessError = (payload) => {
  return {
    type: SAVE_BUSINESS_ERROR,
    payload,
  }
}

export const register = (data, countriesOfOperations, callback) => async (dispatch) => {
  const countries = countriesOfOperations.map(({ value }) => value)
  dispatch(saveBusiness())
  try {
    const response = await api.post(
      "/business",
      { ...data, countriesOfOperations: countries },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    dispatch(saveBusinessSuccess(response))
    callback()
  } catch (error) {
    error.response
      ? dispatch(saveBusinessError(error.response.data))
      : dispatch(saveBusinessError("Something went wrong try again"))
  }
}

export default register
