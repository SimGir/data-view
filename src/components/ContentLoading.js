import React, { Component } from 'react'
import {  BorderBox1, Loading } from '@jiaminghi/data-view-react'

// loading等待
class ContentLoading extends Component {
  render() {
    return (
      <BorderBox1 backgroundColor="#09091f" className="border-box">
        <Loading />
      </BorderBox1>
    )
  }
}

export default ContentLoading