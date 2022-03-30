import React from 'react';
import { Card, Radio } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import { dataSource } from "./dataSource";

// Resolves charts dependancy
ReactFusioncharts.fcRoot(FusionCharts, charts, FusionTheme);

const EthWidget = () => {

  return (
    <div className="eth-widget-wrap">
      <Radio.Group defaultValue="a" buttonStyle="solid">
        {[{ title: "Hangzhou", value: 'a' }, { title: "Shanghai", value: "b" }, { title: 'Beijing', value: 'c' }, { title: "Chengdu", value: 'd' }].map(({ title, value }, index) => (
          <Radio.Button value={value} key={index}>{title}</Radio.Button>
        ))}
      </Radio.Group>
      <Card className="eth-widget">
        <h3 className="title">Price (ETH)<QuestionOutlined className="mr-l-5" /></h3>
        <ul className="eth-stats-list">
          <li>
            <span className="title"><span className="circle"></span>Floor Price<QuestionOutlined className="mr-l-5" /></span>
            <strong className="number">119.00</strong>
            <span className="ratio">+4.02%</span>
          </li>
        </ul>
        <div className="graph-h">
          <ReactFusioncharts
            type="scrollcombidy2d"
            width="100%"
            height="500"
            dataFormat="JSON"
            dataSource={dataSource}
          />
        </div>
      </Card>
    </div>
  )
};

export default EthWidget;
