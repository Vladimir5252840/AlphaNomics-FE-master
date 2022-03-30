import React from 'react';
import { Card } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';

const MarketWidget = () => (
  <Card className="market-widget">
    <div className="head">
      <h3 className="title">Market Cap<QuestionOutlined className="mr-l-5" /></h3>
      <div className="extra-content">
        <strong className="subtitle">$00000.00</strong>
        <span className="ratio">-0.02%</span>
      </div>
    </div>
  </Card>
)

export default MarketWidget;
