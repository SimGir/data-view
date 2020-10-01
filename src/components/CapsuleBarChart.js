import React, { Component } from 'react'
import {  BorderBox1, CapsuleChart } from '@jiaminghi/data-view-react'

// 胶囊柱状图
class CapsuleBarChart extends Component {
  render() {
    let { config } = this.props
    return (
      <BorderBox1 color={[ "#00baff", "#13576f"]} className="border-box">
        <CapsuleChart config={config} style={{width: "100%", height: "100%"}} />
      </BorderBox1>
    )
  }
}

export default CapsuleBarChart
