const transformChartData = (chartData = []) => {
  let labels = []
  let data = []
  chartData.forEach((item) => {
    const [label, value] = Object.values(item)
    labels.push(label)
    data.push(value)
  })
  return [labels, data]
}
export default transformChartData
