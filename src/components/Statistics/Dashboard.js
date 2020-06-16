import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import getDashboard from "../../store/actions/dashboard"
import parseChartData from "../../utils/transformChartData"
import Pie from "./Pie"
import Bar from "./BarChart"

const Dashboard = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState("")
  const statistics = useSelector(({ dashboard }) => dashboard)
  useEffect(() => {
    ;(async () => {
      dispatch(getDashboard())
    })()
  }, [])
  useEffect(() => {
    setData(statistics.data)
  }, [statistics])
  const quantity = parseChartData(data.quantity)
  const value = parseChartData(data.value)
  const [valueLabels, valueData] = value
  const [quantityLabels, quantityData] = quantity
  return (
    <div>
      <h1>Business Name: {data && data.business}</h1>
      <div>
        <div>
          <Pie
            incomingAmount={data.totalIncomingAmount}
            outgoingAmount={data.totalOutgoingAmount}
          />
          <p>Top Product: {quantityLabels[0]}</p>
        </div>
        <div>
          <Bar label="Quantity" labels={valueLabels} data={valueData} />
          <Bar label="Value" labels={quantityLabels} data={quantityData} />
        </div>
      </div>
    </div>
  )
}
export default Dashboard
