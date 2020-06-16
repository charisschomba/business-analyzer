import React from "react"
import { Pie } from "react-chartjs-2"
import "./index.scss"

const PieChart = ({ incomingAmount, outgoingAmount, topProduct, quantity }) => {
  const stat = {
    labels: ["Incoming Amount", "Outgoing Amount"],
    datasets: [
      {
        data: [incomingAmount, outgoingAmount],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  }
  {
    return (
      <div className="pie col">
        <Pie data={stat} />
        <div>
          <strong>Top Product</strong>
          <p>Product Name: {topProduct}</p>
          <p>Quantity: {quantity}</p>
        </div>
      </div>
    )
  }
}
export default PieChart
