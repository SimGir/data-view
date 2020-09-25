import React, { Component } from 'react'
import {  BorderBox1, Decoration9, ConicalColumnChart } from '@jiaminghi/data-view-react'

// 锥形柱状图
class ConeBarChart extends Component {
  render() {
    let { config } = this.props
    return (
      <BorderBox1 backgroundColor="#09091f" className="border-box">
        <Decoration9 style={{position: "absolute", top: 20, right: 20, color:"#00baff", width: '100px', height: '100px'}}>66%</Decoration9>
        <ConicalColumnChart config={config} style={{width: '100%', height: '100%'}} />
      </BorderBox1>
    )
  }
}

export default ConeBarChart
