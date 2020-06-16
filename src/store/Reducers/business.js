import { SAVE_BUSINESS, SAVE_BUSINESS_SUCCESS, SAVE_BUSINESS_ERROR } from "../constants"
const initialState = {
  message: {},
  errors: { isError: false },
  saving: false,
  success: false,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_BUSINESS: {
      return { ...state, saving: true }
    }
    case SAVE_BUSINESS_SUCCESS: {
      return {
        ...state,
        success: true,
        message: action.payload,
        saving: false,
      }
    }
    case SAVE_BUSINESS_ERROR: {
      return {
        ...state,
        isRegistering: false,
        errors: { ...state.errors, isError: true, message: action.payload.errors },
        saving: false,
      }
    }
    default:
      return state
  }
}

export default reducer
