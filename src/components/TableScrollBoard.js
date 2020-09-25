import React, { Component } from 'react'
import { BorderBox1, ScrollBoard } from '@jiaminghi/data-view-react'

// 表格轮播图
export default class TableScrollBoard extends Component {

  render() {
    let { config = {}, title = "" } = this.props
    return (
      <BorderBox1 id="board" backgroundColor="#09091f" className="border-box" style={{height: "100%"}}>
        <div className="border-title">{title}</div>
        <ScrollBoard config={config} style={{width: "100%", height: "100%"}} />
      </BorderBox1>
    )
  }
}