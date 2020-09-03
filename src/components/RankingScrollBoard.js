import React, { Component } from 'react'
import { BorderBox1, ScrollRankingBoard } from '@jiaminghi/data-view-react'

import "./RankingScrollBoard.css"
class RankingScrollBoard extends Component {
  render() {
    let { config } = this.props
    return (
      <BorderBox1 backgroundColor="#09091f" className="border-box">
        <ScrollRankingBoard config={config} />
      </BorderBox1>
    )
  }
}

export default RankingScrollBoard