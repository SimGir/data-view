import React, { Component } from 'react'
import {  BorderBox1, Loading } from '@jiaminghi/data-view-react'

// loading等待
class ContentLoading extends Component {
  render() {
    return (
      <BorderBox1 color={[ "#00baff", "#13576f"]} className="border-box">
        <Loading />
      </BorderBox1>
    )
  }
}

export default ContentLoading