export const validateEmail = (email, setIsError, setError) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const isEmail = re.test(String(email).toLowerCase())
  if (!isEmail) {
    setIsError(true)
    setError("Use a valid email")
  }
}

export const validatePassword = (password, confirm_password, setIsError, setError) => {
  if (password.length < 6 && confirm_password.length < 6) {
    setIsError(true)
    setError("Password length should be at least 6 character long")
  } else if (password !== confirm_password) {
    setIsError(true)
    setError("Password do not match")
  }
}
export const buttonDisabled = ({
  signup = false,
  username,
  password,
  confirm_password,
  email,
  fullname,
}) => {
  return signup
    ? !username || !fullname || !email || !password || !confirm_password
    : !email || !password
}
export default validateEmail
