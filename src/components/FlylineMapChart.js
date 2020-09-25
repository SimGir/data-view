import React, { Component } from 'react'
import {  BorderBox1, FlylineChartEnhanced } from '@jiaminghi/data-view-react'

// 增强版地图飞线图
class FlylineMapChart extends Component {
  render() {
    let { config } = this.props
    return (
      <BorderBox1 backgroundColor="#09091f" className="border-box" style={{width: "100%", height: "100%"}}>
        <FlylineChartEnhanced dev={true} config={config} style={{width: "100%", height: "100%"}} />
      </BorderBox1>
    )
  }
}

export default FlylineMapChart

