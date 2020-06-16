import { START_UPLOAD, UPLOAD_SUCCESS, UPLOAD_ERROR } from "../constants"
const initialState = {
  message: {},
  errors: { isError: false },
  saving: false,
  success: false,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_UPLOAD: {
      return { ...state, saving: true }
    }
    case UPLOAD_SUCCESS: {
      return {
        ...state,
        success: true,
        message: action.payload,
        saving: false,
      }
    }
    case UPLOAD_ERROR: {
      return {
        ...state,
        errors: { ...state.errors, isError: true, errors: action.payload },
        saving: false,
      }
    }
    default:
      return state
  }
}

export default reducer
