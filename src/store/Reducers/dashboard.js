import {
  GET_DASHBOARD_DATA,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_ERROR,
} from "../constants"
const initialState = {
  data: [],
  errors: { isError: false },
  success: false,
  loading: false,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_DATA: {
      return { ...state, loading: true }
    }
    case GET_DASHBOARD_SUCCESS: {
      return {
        ...state,
        success: true,
        data: action.payload,
        loading: false,
      }
    }
    case GET_DASHBOARD_ERROR: {
      return {
        ...state,
        errors: { ...state.errors, isError: true, errors: action.payload },
        loading: false,
      }
    }
    default:
      return state
  }
}

export default reducer
