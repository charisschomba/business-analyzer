import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Select from "react-select"
import { getCountrie } from "../../utils/api"
import Input from "../Common/Input"
import CustomButton from "../Common/Button"
import { entities, accountingSoftware, annualSales } from "../../utils/constants"
import register from "../../store/actions/business"
import "./index.scss"
import { useHistory } from "react-router-dom"
const BusinessForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const business = useSelector(({ business }) => business)
  const [countries, setCountries] = useState([])
  const [error, setError] = useState("")
  const [saving, setSaving] = useState(false)
  const [isError, setIsError] = useState(false)
  const [formData, setFormData] = useState({})
  const [countriesOfOperations, setCountriesOfOperations] = useState([])
  useEffect(() => {
    ;(async () => {
      const countries = await getCountrie()
      setCountries(countries)
    })()
  }, [])
  useEffect(() => {
    setError(business.errors)
    setSaving(business.saving)
    setIsError(business.errors.isError)
  }, [business])
  const submit = () => {
    dispatch(register(formData, countriesOfOperations, () => history.push("/upload")))
  }
  const handleOnChange = (value, field) => {
    if (
      field === "country" ||
      field === "entity" ||
      field === "accountingSoftware" ||
      field === "annualSales"
    ) {
      return setFormData({ ...formData, [field]: value.value })
    } else {
      return setFormData({ ...formData, [field]: value })
    }
  }
  return (
    <div className="form-container">
      <h1>Add your business</h1>
      <form className="business-form">
        {isError && (
          <p className="text-center">
            {(error.message && error.message.message) || error}
          </p>
        )}
        <div className="row ">
          <div className="col">
            <label htmlFor="name">Business Name</label>
            <Input handler={(e) => handleOnChange(e, "name")} type="text" id="name" />
          </div>
          <div className="col">
            <label htmlFor="name">Business Abbreviation</label>
            <Input
              handler={(e) => handleOnChange(e, "businessAbbreviation")}
              type="text"
              id="businessAbbreviation"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="address">Company Address</label>
            <Input
              handler={(e) => handleOnChange(e, "address")}
              type="text"
              id="address"
            />
          </div>
          <div className="col">
            <div className="col">
              <label htmlFor="country">Country</label>
              <Select
                options={countries}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(e) => handleOnChange(e, "country")}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="operations">Countries of Operations</label>
            <Select
              isMulti
              options={countries}
              className="basic-multi-select multi-select"
              classNamePrefix="select"
              onChange={(e) => setCountriesOfOperations(e)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="sales">Annual Sales Revenue</label>
            <Select
              options={annualSales}
              className="basic-multi-select multi-select"
              classNamePrefix="select"
              onChange={(e) => handleOnChange(e, "annualSales")}
            />
          </div>
          <div className="col">
            <label htmlFor="entity">Entity</label>
            <Select
              options={entities}
              className="basic-multi-select multi-select"
              classNamePrefix="select"
              onChange={(e) => handleOnChange(e, "entity")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="software">Accounting Software</label>
            <Select
              options={accountingSoftware}
              className="basic-multi-select multi-select"
              classNamePrefix="select"
              onChange={(e) => handleOnChange(e, "accountingSoftware")}
            />
          </div>
        </div>
        <div className="mt-4">
          <CustomButton handler={submit} loading={saving} title="Submit" />
        </div>
      </form>
    </div>
  )
}
export default BusinessForm
