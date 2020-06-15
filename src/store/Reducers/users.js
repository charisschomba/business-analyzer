import {
  SAVE_USER,
  SAVE_USER_SUCCESS,
  SAVE_USER_ERROR,
  CLEAR_USER_ERRORS,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGIN_USER,
} from "../constants"
const initialState = {
  user: {},
  errors: { isError: false },
  saving: false,
  success: false,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_USER_ERRORS: {
      return { ...state, errors: {} }
    }
    case SAVE_USER: {
      return { ...state, saving: true }
    }
    case SAVE_USER_SUCCESS: {
      return {
        ...state,
        success: true,
        user: action.payload,
        saving: false,
      }
    }
    case SAVE_USER_ERROR: {
      return {
        ...state,
        isRegistering: false,
        errors: { ...state.errors, isError: true, message: action.payload.errors },
        saving: false,
      }
    }
    case LOGIN_USER: {
      return { ...state, saving: true }
    }
    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        success: true,
        user: action.payload,
        saving: false,
      }
    }
    case LOGIN_USER_ERROR: {
      return {
        ...state,
        isLogging: false,
        errors: { ...state.errors, isError: true, message: action.payload.errors },
        saving: false,
      }
    }
    default:
      return state
  }
}

export default reducer
