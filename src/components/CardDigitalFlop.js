
import React, { Component } from 'react'
import { DigitalFlop } from '@jiaminghi/data-view-react'

// card-数字翻牌器
class CardDigitalFlop extends Component {
  constructor() {
    super()
    this.state = {
      config1: {
        number: [111],
        style: {
          fontSize: 20,
          fontFamily: "YouSheBiaoTiHei",
          fill: "#55E3FF"
        },
        textAlign: "left"
      },
      config2: {
        number: [111],
        style: {
          fontSize: 20,
          fontFamily: "YouSheBiaoTiHei",
          fill: "#5DFFE4"
        },
        textAlign: "left"
      }
    }
  }

  componentDidMount() {
    let { config1, config2 } = this.state
    let { number1, number2 } = this.props.data
    number1 !== undefined && number2 !== undefined && this.setState({
      config1: { ...config1, number: number1 },
      config2: { ...config2, number: number2 }
    })
  }

  componentDidUpdate() {
    let { number1, number2 } = this.props.data
    let { config1, config2 } = this.state
    if(number1 && number2 && (number1 !== config1.number || number2 !== config2.number)){
      this.setState({
        config1: {
          ...config1,
          number: number1
        },
        config2: {
          ...config2,
          number: number2
        }
      })
    }
  }

  render() {
    let { config1, config2 } = this.state
    // console.log("render config1.number", config1.number)
    let { title, title1, title2 } = this.props.data
    return (
      <div className="card-container">
        <div className="digital-title">{title}</div>
        <div className="digital-number1">
          <div className="digital-title1">{title1}：</div>
          <DigitalFlop config={config1}  style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="digital-number2">
          <div className="digital-title2">{title2}：</div>
          <DigitalFlop config={config2} style={{ width: "100%", height: "100%" }} />
        </div>
      </div>
    )
  }
}

export default CardDigitalFlop
