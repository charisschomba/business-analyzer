import { combineReducers } from "redux"
import users from "./users"
import business from "./business"
import upload from "./upload"

export default combineReducers({
  users,
  business,
  upload,
})
