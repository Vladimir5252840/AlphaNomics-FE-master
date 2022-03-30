import React from "react";
import Chart from "react-apexcharts";

const ApxChats = ({ type = "area", chartData, showEtH }) => {
  const seriesData = [];
  const categoriesData = [];

  chartData.map((item) => {
    seriesData.push(item.value);
    categoriesData.push(item.time);
  });

  const chart = {
    series: [
      {
        name: "",
        data: seriesData,
      },
    ],
    options: {
      chart: {
        // height: 350,
        type: "area",
        height: "100%",
        toolbar: false,
      },
      grid: {
        show: true,
        borderColor: "#28313e",
        strokeDashArray: 0,
        position: "back",

        yaxis: {
          lines: {
            show: true,
          },
        },
      },

      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: categoriesData,
        axisTicks: {
          show: false,
        },
        labels: {
          minHeight: "100%",
          maxHeight: "100%",
          style: {
            fontSize: "15px",
            color: "#1c2531",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 400,
            cssClass: "apexcharts-xaxis-label",
          },
        },
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
    <Chart
      height="210px"
      options={chart.options}
      series={chart.series}
      type={type}
    />
  );
};

export default ApxChats;
