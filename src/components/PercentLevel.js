import React, { Component } from 'react'
import { BorderBox1, WaterLevelPond, PercentPond } from '@jiaminghi/data-view-react'

// 表格轮播图
export default class PercentLevel extends Component {
  constructor(props) {
    super()
    this.state = {
      percentageConfig: props.percentageConfig
    }
  }

  componentDidMount() {
    setInterval(()=>{
      let { percentageConfig } = this.state
      let value = percentageConfig.value
      value += 5 
      this.setState({
        percentageConfig: {
          ...percentageConfig,
          value: value > 100 ? 0 : value
        }
      })
    },1000)
  }

  render() {
    let { waterConfig } = this.props
    let { percentageConfig } = this.state
    return (
      <BorderBox1 className="border-box" color={[ "#00baff", "#13576f"]} style={{height: "100%"}}>
        <div className="level-content">
          <WaterLevelPond config={waterConfig} style={{width: '150px', height: '150px'}} />
          <PercentPond config={percentageConfig} style={{width: '150px', height: '100px'}} />
        </div>
      </BorderBox1>
    )
  }
}