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
          <p>
            <strong>Product Name:</strong> {topProduct}
          </p>
          <p>
            <strong>Quantity:</strong> {quantity}
          </p>
        </div>
      </div>
    )
  }
}
export default PieChart
