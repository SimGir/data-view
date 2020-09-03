import React, { Component } from 'react'
import { BorderBox1, ScrollBoard } from '@jiaminghi/data-view-react'

import "./TableScrollBoard.css"
export default class TableScrollBoard extends Component {

  render() {
    let { config={} } = this.props
    return (
      <BorderBox1 backgroundColor="#09091f" className="border-box">
        <ScrollBoard config={config} />
      </BorderBox1>
    )
  }
}