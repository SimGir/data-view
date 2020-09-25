import React, { Component } from 'react';
import { FullScreenContainer, BorderBox11, BorderBox1 } from '@jiaminghi/data-view-react'
import TableScorllBoard from './components/TableScrollBoard'
import RankingScrollBoard from './components/RankingScrollBoard'
import RangChart from './components/RangChart'
import ContentLoading from './components/ContentLoading'
import CapsuleBarChart from './components/CapsuleBarChart'
import ConeBarChart from './components/ConeBarChart'
import FlylineMapChart from './components/FlylineMapChart'
import CardDigitalFlop from './components/CardDigitalFlop'

import './App.less';
class App extends Component {
  constructor() {
    super()

    this.state = {
      title: "监控大屏",
      loading: false,
      // 轮播表格
      tableConfig: {
        rowNum: 9,
        waitTime: 1000,
        headerHeight: 35,
        carousel: 'page',
        hoverPause: false
      },
      // 排名轮播
      rankingConfig: {
        carousel: "page"
      },
      // 动态环图
      rangConfig: {},
      // 胶囊柱状图
      barConfig: {
        // colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: '万',
        showValue: true
      },
      // 锥形柱状图
      coneBarConfig: {
        // img: [
        //   '/img/conicalColumnChart/1st.png',
        //   '/img/conicalColumnChart/2st.png',
        //   '/img/conicalColumnChart/3st.png',
        //   '/img/conicalColumnChart/4st.png',
        //   '/img/conicalColumnChart/5st.png',
        //   '/img/conicalColumnChart/6st.png',
        //   '/img/conicalColumnChart/7st.png'
        // ],
        showValue: true
      },
      // 增强版飞线图
      mapConfig: {
        points: [
          {
            name: '郑州',
            coordinate: [0.48, 0.35],
            halo: {
              show: true,
            },
            icon: {
              src: require('./assets/mapCenterPoint.png'),
              width: 30,
              height: 30
            },
            text: {
              show: false
            }
          },
          {
            name: '新乡',
            coordinate: [0.52, 0.23]
          },
          {
            name: '焦作',
            coordinate: [0.43, 0.29]
          },
          {
            name: '开封',
            coordinate: [0.59, 0.35]
          },
          {
            name: '许昌',
            coordinate: [0.53, 0.47]
          },
          {
            name: '平顶山',
            coordinate: [0.45, 0.54]
          },
          {
            name: '洛阳',
            coordinate: [0.36, 0.38]
          },
          {
            name: '周口',
            coordinate: [0.62, 0.55],
            halo: {
              show: true,
              color: '#8378ea'
            }
          },
          {
            name: '漯河',
            coordinate: [0.56, 0.56]
          },
          {
            name: '南阳',
            coordinate: [0.37, 0.66],
            halo: {
              show: true,
              color: '#37a2da'
            }
          },
          {
            name: '信阳',
            coordinate: [0.55, 0.81]
          },
          {
            name: '驻马店',
            coordinate: [0.55, 0.67]
          },
          {
            name: '济源',
            coordinate: [0.37, 0.29]
          },
          {
            name: '三门峡',
            coordinate: [0.20, 0.36]
          },
          {
            name: '商丘',
            coordinate: [0.76, 0.41]
          },
          {
            name: '鹤壁',
            coordinate: [0.59, 0.18]
          },
          {
            name: '濮阳',
            coordinate: [0.68, 0.17]
          },
          {
            name: '安阳',
            coordinate: [0.59, 0.10]
          }
        ],
        lines: [
          {
            source: '新乡',
            target: '郑州'
          },
          {
            source: '焦作',
            target: '郑州'
          },
          {
            source: '开封',
            target: '郑州'
          },
          {
            source: '周口',
            target: '郑州',
            color: '#fb7293',
            width: 2
          },
          {
            source: '南阳',
            target: '郑州',
            color: '#fb7293',
            width: 2
          },
          {
            source: '济源',
            target: '郑州'
          },
          {
            source: '三门峡',
            target: '郑州'
          },
          {
            source: '商丘',
            target: '郑州'
          },
          {
            source: '鹤壁',
            target: '郑州'
          },
          {
            source: '濮阳',
            target: '郑州'
          },
          {
            source: '安阳',
            target: '郑州'
          },
          {
            source: '许昌',
            target: '南阳',
            color: '#37a2da'
          },
          {
            source: '平顶山',
            target: '南阳',
            color: '#37a2da'
          },
          {
            source: '洛阳',
            target: '南阳',
            color: '#37a2da'
          },
          {
            source: '驻马店',
            target: '周口',
            color: '#8378ea'
          },
          {
            source: '信阳',
            target: '周口',
            color: '#8378ea'
          },
          {
            source: '漯河',
            target: '周口',
            color: '#8378ea'
          }
        ],
        icon: {
          show: true,
          src: require('./assets/mapPoint.png')
        },
        text: {
          show: true,
        },
        k: 0.5,
        bgImgSrc: require('./assets/map.jpg'),
        relative: true
      },
      digitalConfig: {
      },
    }
  }
  componentDidMount() {
    this.getData()
    // let timer = setTimeout(()=>{
    //   this.setState({
    //     loading: false
    //   })
    //   clearTimeout(timer)
    // }, 2000)
  }

  getData = () => {
    let { tableConfig, rankingConfig, rangConfig, barConfig, coneBarConfig, mapConfig, digitalConfig } = this.state
    tableConfig = {
      ...tableConfig,
      header: ["列1", "列2", "列3"],
      data: [
        ["data10", "data20", "data30"],
        ["data11", "data21", "data31"],
        ["data12", "data22", "data32"],
        ["data13", "data23", "data33"],
        ["data14", "data24", "data34"],
        ["data15", "data25", "data35"],
        ["data16", "data26", "data36"],
        ["data17", "data27", "data37"],
        ["data18", "data28", "data38"],
        ["data19", "data29", "data39"]
      ]
    }
    rankingConfig = {
      ...rankingConfig,
      data: [
        {
          name: '西峡0',
          value: 145
        },
        {
          name: '周口1',
          value: 133
        },
        {
          name: '南阳2',
          value: 130
        },
        {
          name: '西峡3',
          value: 90
        },
        {
          name: '驻马店4',
          value: 88
        },
        {
          name: '新乡5',
          value: 85
        },
        {
          name: '西峡6',
          value: 78
        },
        {
          name: '驻马店7',
          value: 73
        },
        {
          name: '新乡8',
          value: 66
        },
        {
          name: '南阳9',
          value: 50
        }
      ]
    }
    rangConfig = {
      ...rangConfig,
      data: [
        {
          name: '西峡0',
          value: 145
        },
        {
          name: '周口1',
          value: 133
        },
        {
          name: '南阳2',
          value: 130
        },
        {
          name: '西峡3',
          value: 90
        },
        {
          name: '驻马店4',
          value: 88
        }
      ]
    }
    barConfig = {
      ...barConfig,
      data: [
        {
          name: '南阳',
          value: 167
        },
        {
          name: '周口',
          value: 123
        },
        {
          name: '漯河',
          value: 98
        },
        {
          name: '郑州',
          value: 75
        },
        {
          name: '西峡',
          value: 66
        },
      ]
    }
    coneBarConfig = {
      ...coneBarConfig,
      data: [
        {
          name: '周口',
          value: 55
        },
        {
          name: '南阳',
          value: 120
        },
        {
          name: '西峡',
          value: 71
        },
        {
          name: '驻马店',
          value: 66
        },
        {
          name: '新乡',
          value: 80
        },
        {
          name: '信阳',
          value: 35
        },
        {
          name: '漯河',
          value: 15
        }
      ]
    }
    mapConfig = {
      ...mapConfig
    }
    digitalConfig = {
      ...digitalConfig,
      title: "投放指标",
      title1: "今日",
      number1: [15000],
      title2: "累计",
      number2: [785600]
    }
    
    this.setState({
      tableConfig,
      rankingConfig,
      rangConfig,
      barConfig,
      coneBarConfig,
      mapConfig,
      digitalConfig
    })
  }

  render() {
    let { title, loading, tableConfig, rankingConfig, rangConfig, barConfig, coneBarConfig, mapConfig, digitalConfig } = this.state
    return (
      <div className="container">
        {!loading ?
          <FullScreenContainer>
            <BorderBox11>
              <div className="full-title">{title}</div>
              <div className="top-con">
                <div className="top-left">
                  <RankingScrollBoard config={rankingConfig} />
                  <RankingScrollBoard config={rankingConfig} />
                </div>
                <div className="top-center">
                  <FlylineMapChart config={mapConfig} />
                </div>
                <div className="top-right">
                  <CapsuleBarChart config={barConfig} />
                  <RangChart config={rangConfig} />
                </div>
              </div>
              <div className="bottom-con">
                <div className="bottom-left">
                  <BorderBox1 backgroundColor="#09091f" className="border-box">
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                      <CardDigitalFlop data={digitalConfig} />
                      <CardDigitalFlop data={digitalConfig} />
                      <CardDigitalFlop data={digitalConfig} />
                    </div>
                  </BorderBox1>
                </div>
                <div className="bottom-center">
                  <TableScorllBoard config={tableConfig} title="轮播表格" />
                </div>
                <div className="bottom-right">
                  <ConeBarChart config={coneBarConfig} />
                </div>
              </div>
            </BorderBox11>
          </FullScreenContainer>
          :
          <FullScreenContainer>
            <BorderBox11>
              <div className="full-title">{title}</div>
              <div className="top-con">
                <div className="top-left">
                  <ContentLoading />
                  <ContentLoading />
                </div>
                <div className="top-center">
                  <ContentLoading />
                </div>
                <div className="top-right">
                  <ContentLoading />
                  <ContentLoading />
                </div>
              </div>
              <div className="bottom-con">
                <div className="bottom-left">
                  <ContentLoading />
                </div>
                <div className="bottom-center">
                  <ContentLoading />
                </div>
                <div className="bottom-right">
                  <ContentLoading />
                </div>
              </div>
            </BorderBox11>
          </FullScreenContainer>
        }
      </div>
    )
  }
}

export default App;
