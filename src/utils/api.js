import axios from "axios"
import dotenv from "dotenv"
dotenv.config()

const uri = process.env.REACT_APP_API_URL

const instance = axios.create({
  baseURL: uri,
})
export const getCountrie = async () => {
  const countries = await axios.get("https://trial.mobiscroll.com/content/countries.json")
  return countries.data.map(({ text }) => {
    return { value: text, label: text }
  })
}
export default instance
