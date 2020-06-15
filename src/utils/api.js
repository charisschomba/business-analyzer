import axios from "axios"

const instance = axios.create({
  // baseURL: 'https://offline-business-analyzer.herokuapp.com/api/v1',
  baseURL: "http://localhost:4000/api/v1",
})
// const token = localStorage.getItem("token")
export default instance
