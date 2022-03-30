import React from 'react';
import { Card, Row, Col } from 'antd';
import Chart from 'react-apexcharts';

// Components
import InfoIcon from '../../icons/InfoIcon';

// import "./style.scss";

const StatsWidget = ({ numClass = 'text-black', ratioClass = 'text-danger', name, price, ratio ,type="area" }) => {
  const chart = {
    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }],
    options: {
      chart: {
        height: 85,
        type: 'area',
        sparkline: {
          enabled: true
        }
      },
      toolbar: {
        show: false,
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  };

  return (
    <Card className="stats-widget">
      <Row guuter={[20, 20]} align="bottom">
        <Col xs={24} lg={24} xl={16}>
          <div className="stats-widget-caption">
            <h3 className="title">{name}<InfoIcon /></h3>
            <strong className={`number ${numClass}`}>{price}</strong>
            <span className={`ratio ${ratioClass}`}>{ratio < 0 ? `${ratio}%` : `+${ratio}%`}</span>
          </div>
        </Col>
        <Col xs={24} lg={24} xl={8}>
          <div className="graph-h">
            <Chart
              height='85px'
              options={chart.options}
              series={chart.series}
              type={type}
            />
          </div>
        </Col>
      </Row>
    </Card>
  )
};

export default StatsWidget;
