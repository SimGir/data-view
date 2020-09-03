import React, {Component} from 'react';
import { BorderBox11 } from '@jiaminghi/data-view-react'
import TableScorllBoard from './components/TableScrollBoard'
import RankingScrollBoard from './components/RankingScrollBoard'
import RangChart from './components/RangChart'

import './App.css';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "监控大屏",
      tableConfig: {},
      rankingConfig: {}
    }
  }
  componentDidMount () {
    this.getData()
  }

  getData = ()=>{
    let tableConfig = {
      header: ["列1", "列2", "列3"],
      data: [
        ["data11", "data21", "data31"],
        ["data12", "data22", "data32"],
        ["data13", "data23", "data33"],
        ["data14", "data24", "data34"],
        ["data15", "data25", "data35"],
        ["data16", "data26", "data36"],
        ["data17", "data27", "data37"],
        ["data18", "data28", "data38"]
      ]
    }
    let rankingConfig = {
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
      ],
      carousel: "page"  // 整页滚动
    }
    let rangConfig = {
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
    this.setState({
      tableConfig,
      rankingConfig,
      rangConfig
    })
  }

  render() {
    let { title, tableConfig, rankingConfig, rangConfig } = this.state
    return (
      <div className="container">
        <BorderBox11>
          <div className="full-title">{title}</div>
          <div className="content">
            <div className="left">
              <RankingScrollBoard config={rankingConfig} />
              <RankingScrollBoard config={rankingConfig} />
              <RankingScrollBoard config={rankingConfig} />
            </div>
            <div className="center">
              <TableScorllBoard config={tableConfig} />
              <TableScorllBoard config={tableConfig} />
              <TableScorllBoard config={tableConfig} />
            </div>
            <div className="right">
              <RangChart config={rangConfig} />
            </div>
          </div>
          </BorderBox11>
      </div>
    )
  }
}

export default App;
