import React from 'react'
import Chart from './Chart'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      dataArray0: [30, 35, 45, 55, 70],
      dataArray1: [50, 55, 45, 35, 20, 25, 25, 40],
      dataIndex: 0
    }

    this.changeData = this.changeData.bind(this)
  }

  changeData () {
    this.setState(state => ({
      dataIndex: (state.dataIndex + 1) % 2
    }))
  }

  render () {
    return (
      <div>
        <button onClick={this.changeData}>Change data</button>
        <Chart
          data={this.state['dataArray' + this.state.dataIndex]}
          title={'dataset ' + this.state.dataIndex}
        />
      </div>
    )
  }
}

export default App
