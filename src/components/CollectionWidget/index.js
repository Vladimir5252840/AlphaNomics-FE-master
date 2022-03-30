import React from 'react';
import { Avatar, Card, Tag, Button } from 'antd';

// Components
import EthIcon from '../../icons/EthIcon';
import WidgetUploadIcon from '../../icons/WidgetUploadIcon';
import WidgetArrowBtnIcon from '../../icons/WidgetArrowBtnIcon';

const CollectionWidget = () => (
  <Card className="collection-widget">
    <div className="widget-head">
      <Avatar src="/images/collection-widget.png" />
      <div className="head-heading">
        <h2 className="title">Collection’s name</h2>
        <div className="tags-wrap">
          <Tag><EthIcon />ETH</Tag>
          <Tag>0xb47e3c</Tag>
          <Tag>9,999 NFTs</Tag>
        </div>
      </div>
    </div>
    <p className="description"></p>
    <Button type="link">View more</Button>
    <div className="widget-footer">
      <ul className="widget-footer-links">
        {[...Array(6)].map((item, index) => (
          <li key={index}>
            <a href="/" rel="noopener noreferrer"><WidgetUploadIcon /></a>
          </li>
        ))
        }
      </ul>
      <Button type="primary" className="linear-btn">Buy now<WidgetArrowBtnIcon className="icon mr-l-10" /></Button>
    </div>
  </Card>
)

export default CollectionWidget;
