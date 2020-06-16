import { combineReducers } from "redux"
import users from "./users"
import business from "./business"
import upload from "./upload"
import dashboard from "./dashboard"

export default combineReducers({
  users,
  business,
  upload,
  dashboard,
})
