import {
  GET_DASHBOARD_DATA,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_ERROR,
} from "../constants"
import api from "../../utils/api"

const token = localStorage.getItem("token")

export const getDashboardData = () => {
  return {
    type: GET_DASHBOARD_DATA,
  }
}

export const getDashboardSuccess = (payload) => {
  return {
    type: GET_DASHBOARD_SUCCESS,
    payload,
  }
}

export const getDashboardError = (payload) => {
  return {
    type: GET_DASHBOARD_ERROR,
    payload,
  }
}

export const dashboard = () => async (dispatch) => {
  dispatch(getDashboardData())
  try {
    const response = await api.get("/all-statistics", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
      },
    })
    dispatch(getDashboardSuccess(response.data))
  } catch (error) {
    error.response
      ? dispatch(getDashboardError(error.response.data))
      : dispatch(getDashboardError("Something went wrong try again"))
  }
}

export default dashboard
