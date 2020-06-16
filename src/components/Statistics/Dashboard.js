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
    dispatch(getDashboard())
  }, [])
  useEffect(() => {
    setData(statistics.data)
  }, [statistics])
  const quantity = parseChartData(data.quantity)
  const value = parseChartData(data.value)
  const [valueLabels, valueData] = value
  const [quantityLabels, quantityData] = quantity
  return (
    <div id="graph-container">
      <p>
        <strong>Business Name:</strong> {data && data.business}
      </p>
      <div>
        <div className="pie-chart-section">
          <Pie
            incomingAmount={data.totalIncomingAmount}
            outgoingAmount={data.totalOutgoingAmount}
            topProduct={quantityLabels[0]}
            quantity={quantityData[0]}
          />
        </div>
        <div className="bar-chart-section">
          <Bar label="Value" labels={valueLabels} data={valueData} />
          <Bar label="Quantity" labels={quantityLabels} data={quantityData} />
        </div>
      </div>
    </div>
  )
}
export default Dashboard
