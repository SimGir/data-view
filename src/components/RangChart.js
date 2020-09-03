import React, { Component } from 'react'
import {  BorderBox1, ActiveRingChart } from '@jiaminghi/data-view-react'

import "./RangChart.css"
class RankingScrollBoard extends Component {
  render() {
    let { config } = this.props
    return (
      <BorderBox1 backgroundColor="#09091f" className="border-box" style={{height: 300}}>
        <ActiveRingChart config={config} style={{ width: '300px', height: '300px'}} />
      </BorderBox1>
    )
  }
}

export default RankingScrollBoard