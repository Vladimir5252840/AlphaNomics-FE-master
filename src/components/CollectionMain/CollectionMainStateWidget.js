import React from "react";
import { Card } from "antd";
import Chart from "react-apexcharts";

// Components
import InfoIcon from "../../icons/InfoIcon";
import "./WidgetCollection.css";

const CollectionMainStateWidget = ({
  numClass = "text-black",
  ratioClass = "text-danger",
  name,
  price,
  ratio,
  type = "area",
  chartData,
  showEtH,
}) => {
  const seriesData = [];
  const categoriesData = [];

  chartData &&
    chartData.map((item) => {
      seriesData.push(item.value);
      categoriesData.push(item.time);
    });

  const chart = {
    series: [
      {
        name: "",
        data: [...seriesData],
      },
    ],
    options: {
      chart: {
        height: 85,
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      toolbar: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [...categoriesData],
      },

      tooltip: {
        x: {
          format: "dd/MM/yy",
        },
        y: {
          formatter: function (series) {
            if (showEtH == false) {
              return [series];
            } else {
              return [series] + " ETH";
            }
          },
        },
        theme: "dark",
      },
    },
  };

  return (
    <Card className="stats-widget">
      <div className="star-widget-panel" align="bottom">
        <div className="start-panel">
          <div className="stats-widget-caption">
            <h3 className="title">
              {name}
              <InfoIcon />
            </h3>
            <strong className={`number ${numClass}`}>{price}</strong>
            <span className={`ratio ${ratioClass}`}>
              {ratio < 0 ? `${ratio}%` : `+${ratio}%`}
            </span>
          </div>
        </div>
        <div className="graph-chart">
          <div className="graph-h">
            <Chart
              height="85px"
              options={chart.options}
              series={chart.series}
              type={type}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CollectionMainStateWidget;
