import React from "react"
import { Pie } from "react-chartjs-2"

const PieChart = ({ incomingAmount, outgoingAmount }) => {
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
      <div>
        <h2>Income Statistics</h2>
        <Pie data={stat} />
      </div>
    )
  }
}
export default PieChart
