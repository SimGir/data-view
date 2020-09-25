import React, { Component } from 'react'
import { BorderBox1, ScrollRankingBoard } from '@jiaminghi/data-view-react'

// 排名轮播图
class RankingScrollBoard extends Component {
  render() {
    let { config } = this.props
    return (
      <BorderBox1 backgroundColor="#09091f" className="border-box">
        <ScrollRankingBoard config={config} style={{width: "100%", height: "100%"}} />
      </BorderBox1>
    )
  }
}

export default RankingScrollBoard