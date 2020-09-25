import React, { Component } from 'react'
import {  BorderBox1, ActiveRingChart } from '@jiaminghi/data-view-react'

// 动态环图
class RangChart extends Component {
  render() {
    let { config } = this.props
    return (
      <BorderBox1 backgroundColor="#09091f" className="border-box">
        <ActiveRingChart config={config} style={{ width: '100%', height: '100%', transform: "scale(1.5)"}} />
      </BorderBox1>
    )
  }
}

export default RangChart