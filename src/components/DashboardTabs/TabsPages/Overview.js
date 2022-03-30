import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as moment from "moment";
import {
  Row,
  Card,
  Radio,
  
  Pagination,
  Skeleton,
  Select,
  Switch,
} from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Area,
  AreaChart,
  BarChart,
  Bar,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  ReferenceLine,
  CartesianGrid,
} from "recharts";
import { normalizeNumber, priceNumFormatter } from "../../../utils";
import NoRecordsFound from "../../NoRecordsFound";
import WidgetArrowBtnIcon from "../../../icons/WidgetArrowBtnIcon";
import "./OverViewStyle.css";

import UserAavtar from "../../../assets/images/clolor-plate/mini-bg.png";
import GasIcon from "../../../assets/images/clolor-plate/gas-station.png";
import Opensea from "../../../assets/images/clolor-plate/opensea.png";
import Etherscan from "../../../assets/images/clolor-plate/etherscan.png";
import WhaleIcon from "../../../assets/images/clolor-plate/Whale.png";
import InfoIcon from "../../../icons/InfoIcon";
import useFetch from "../../../hooks/useFetch";
import { func } from "prop-types";
// import ApxChats from "../../ApxChats/ApxChats";

const { Option } = Select;

const SelectRowsDropdown = ({
  pageSize,
  setPageSize,
  disabled = false,
  setPage,
  title,
}) => (
  <div className="table-rows-dropdown">
    <span className="title">{title}</span>
    <Select
      defaultValue={pageSize}
      value={pageSize}
      showArrow={false}
      className="table-rows-select"
      dropdownClassName="table-rows-menu"
      onChange={(e) => {
        setPage(1);
        setPageSize(e);
      }}
    >
      {[10, 20, 30].map((item, index) => (
        <Option value={item} key={index}>
          <div className="table-row-item">
            <span>{item}</span>
            <WidgetArrowBtnIcon className="icon icon-grey-arrow" />
          </div>
        </Option>
      ))}
    </Select>
  </div>
);

const CustomizedDot = ({ cx, cy }) => (
  <circle
    cx={cx - 10}
    cy={cy - 10}
    r={8}
    stroke="#10B3E8"
    strokeWidth={3}
    fill="#195068"
  />
);

const Overview = () => {
  let { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [period, setPeriod] = useState("1m");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  const [total, setTotal] = useState(0);
  const pageSizeRef = useRef(pageSize);
  const [networkLoading, setNetworkLoading] = useState(false); //Change this line after adding api useFeth
  const periodRef = useRef(period);

  // MarketCap Data States

  const [market_capValue, setMarketCapValue] = useState("12h");
  const [volumeValue, setVolumeValue] = useState("1m");
  const [HolderValue, setHolderValue] = useState("12h");
  const [traderValue, setTraderValue] = useState("1m");

  // MarketCap's  Data States
  const [marketCapData, setMarketCapData] = useState([]);

  // Volume  Data States
  const [volumeDataState, setVolumeDataState] = useState([]);
  const [volume_changeData, setVolume_changeData] = useState();

  // Hodlers  Data States
  const [holderDataState, setHolderDataState] = useState([]);
  const [holder_changeData, setHolder_changeData] = useState();

  // Traders  Data States
  const [traderDataState, setTraderDataState] = useState([]);
  const [traderSellers_change, setTraderSellers_change] = useState();
  const [traderBuyers_change, setTraderBuyers_change] = useState();

  // MarketCap Api
  const {
    data: chartMarketCapValue,
    loading: statsLoading,
    refetch,
  } = useFetch({
    endPoint: `/collection/${slug}/market_cap_history/?period=${market_capValue}`,
  });

  // Volume Api
  const {
    data: chartVolumeValue,
    loading: volumeLoading,
    refetch: volumeRefetch,
  } = useFetch({
    endPoint: `/collection/${slug}/volume_history/?period=${volumeValue}`,
  });

  // Holder Api
  const {
    data: chartHoldersValue,
    loading: holderLoading,
    refetch: holderRefetch,
  } = useFetch({
    endPoint: `/collection/${slug}/holders_history/?period=${HolderValue}`,
  });

  // Traders  Api
  const {
    data: chartTradersValue,
    loading: traderLoading,
    refetch: traderRefetch,
  } = useFetch({
    endPoint: `/collection/${slug}/traders_history/?period=${traderValue}`,
  });

  // MarketCap Api
  useEffect(() => {
    setMarketCapData(chartMarketCapValue?.history);
  }, [chartMarketCapValue]);

  useEffect(() => {
    refetch();
  }, [setMarketCapValue, market_capValue]);

  // ================================ Volume Api=====================================

  useEffect(() => {
    setVolumeDataState(chartVolumeValue);
    setVolume_changeData(chartVolumeValue?.volume_change || 0);
  }, [chartVolumeValue]);

  useEffect(() => {
    holderRefetch();
  }, [setHolderValue, HolderValue]);

  // ================================ Holder Api=====================================

  useEffect(() => {
    setHolderDataState(chartHoldersValue);
    setHolder_changeData(chartHoldersValue?.holders_change || 0);
  }, [chartHoldersValue]);

  useEffect(() => {
    volumeRefetch();
  }, [setVolumeValue, volumeValue]);

  // ================================ traders Api=====================================
  useEffect(() => {
    setTraderDataState(chartTradersValue);
    setTraderSellers_change(chartTradersValue?.sellers_change || 0);
    setTraderBuyers_change(chartTradersValue?.buyers_change || 0);
  }, [chartTradersValue]);

  useEffect(() => {
    traderRefetch();
  }, [setTraderValue, traderValue]);

  // MarketCap Data Array
  const marketCapDatas = [];

  /**
   * MarketCap Data
   */
  marketCapData &&
    marketCapData.map((item) => {
      if (market_capValue == "12h" || market_capValue == "1d") {
        marketCapDatas.push({
          time: moment(item.time).format("HH:mm"),
          value: item.value,
        });
      } else {
        marketCapDatas.push({
          time: moment(item.time).format("MMM DD"),
          value: item.value,
        });
      }
    });

  const volumeData = [];

  /**
   * Volume Data
   */
  volumeDataState &&
    volumeDataState?.history?.map((item) => {
      if (
        volumeValue == "1m" ||
        volumeValue == "5m" ||
        volumeValue == "15m" ||
        volumeValue == "30m" ||
        volumeValue == "1h" ||
        volumeValue == "1d"
      ) {
        volumeData.push({
          time: moment(item.time).format("HH:mm"),
          value: item.value,
        });
      } else {
        volumeData.push({
          time: moment(item.time).format("MMM DD"),
          value: item.value,
        });
      }
    });

  // MarketCap Data Array
  const holderData = [
    {
      name: "UTC",
    },
  ];

  /**
   * Holders Data
   */

  holderDataState &&
    holderDataState?.holders_history?.map((item) => {
      if (market_capValue == "12h" || market_capValue == "1d") {
        holderData.push({
          time: moment(item.time).format("HH:mm"),
          value: item.value,
        });
      } else {
        holderData.push({
          time: moment(item.time).format("MMM DD"),
          value: item.value,
        });
      }
    });

  // Traders Data Array

  const tradersData = [
    {
      time: "UTC",
    },
  ];

  /**
   * Traders Data
   */

  var traderArray = [];
  var traderArray2 = [];
  if (traderDataState) {
    if (traderDataState.buyers_history) {
      traderDataState.buyers_history.forEach(function (ele) {
        if (ele.time) {
          traderArray.push({ time: ele.time, buyers: ele.value });
        }
      });
      traderDataState.sellers_history.forEach(function (ele1) {
        traderArray.forEach(function (ele) {
          if (ele.time == ele1.time) {
            var obj1 = ele;
            obj1["sellers"] = ele1.value;
            traderArray2.push(obj1);
          }
        });
      });
    }
  }

  if (traderArray2) {
    traderArray2 &&
      traderArray2?.map((item) => {
        if (
          traderValue == "1m" ||
          traderValue == "5m" ||
          traderValue == "15m" ||
          traderValue == "30m" ||
          traderValue == "1h" ||
          traderValue == "1d"
        ) {
          tradersData.push({
            time: moment(item.time).format("HH:mm"),
            buyers: item.value,
            buyers: item.buyers,
            sellers: item.sellers,
          });
        } else {
          tradersData.push({
            time: moment(item.time).format("MMM DD"),
            buyers: item.buyers,
            sellers: item.sellers,
          });
        }
      });
  }

  const mixchatsData = [
    {
      name: "UTC",
    },
    {
      name: "FEB 01",
      uv: 155,
      amt: 160,
    },
    {
      name: "FEB 03",
      uv: 165,
      amt: 165,
    },
    {
      name: "FEB 05",
      uv: 240,
      amt: 160,
    },
    {
      name: "FEB 07",
      uv: 163,
      amt: 165,
    },
    {
      name: "FEB 09",
      uv: 90,
      amt: 160,
    },
    {
      name: "FEB 11",
      uv: 80,
      amt: 165,
    },
    {
      name: "FEB 13",
      uv: 240,
      amt: 160,
    },
    {
      name: "FEB 15",
      uv: 40,
      amt: 165,
    },
    {
      name: "FEB 17",
      uv: 90,
      amt: 160,
    },
    {
      name: "FEB 19",
      uv: 95,
      amt: 165,
    },
    {
      name: "FEB 21",
      uv: 80,
      amt: 160,
    },
    {
      name: "FEB 23",
      uv: 40,
      amt: 165,
    },
    {
      name: "FEB 25",
      uv: 164,
      amt: 160,
    },
    {
      name: "FEB 27",
      uv: 240,
      amt: 165,
    },
    {
      name: "FEB 29",
      uv: 80,
      amt: 160,
    },
  ];

  const transactionData = [
    {
      name: "UTC",
    },
    {
      name: "FEB 03",
      uv: 38,
      pv: 18,
    },
    {
      name: "FEB 04",
      uv: 10,
      pv: 38,
    },
    {
      name: "FEB 05",
      uv: 8,
      pv: 25,
    },
    {
      name: "FEB 06",
      uv: 20,
      pv: 45,
    },
    {
      name: "FEB 07",
      uv: 7,
      pv: 20,
    },
    {
      name: "FEB 08",
      uv: 19,
      pv: 10,
    },
    {
      name: "FEB 09",
      uv: 10,
      pv: 60,
    },
  ];

  const LiquidityData = [
    {
      name: "UTC",
    },
    {
      name: "FEB 03",
      uv: 0.09,
    },
    {
      name: "FEB 04",
      uv: 0.09,
    },
    {
      name: "FEB 05",
      uv: 0.11,
    },
    {
      name: "FEB 06",
      uv: 0.02,
    },
    {
      name: "FEB 07",
      uv: 0.1,
    },
    {
      name: "FEB 08",
      uv: 0.17,
    },
    {
      name: "FEB 09",
      uv: 0.21,
    },
  ];

  const [data, setData] = useState([
    {
      NFT: "Mat Lam Tam",
      Owner: "CNY",
      LastPrice: "0.4.4",
      Sales: 1,
      LastDeal: "4 hours ago",
      LastPrice1: "$1.70",
      HighestPrice1: "$2.63",
      HighestPrice: "BRZ",
    },
    {
      NFT: "Temp",
      Owner: "KZT",
      LastPrice: "0.24",
      Sales: 11,
      LastDeal: "5 hours ago",
      LastPrice1: "$7.89",
      HighestPrice1: "$3.49",
      HighestPrice: "Sentra",
    },
    {
      NFT: "Sonair",
      Owner: "CNY",
      LastPrice: "0.7.9",
      Sales: 12,
      LastDeal: "4 hours ago",
      LastPrice1: "$0.04",
      HighestPrice1: "$6.33",
      HighestPrice: "Corvair 500",
    },
    {
      NFT: "Bitchip",
      Owner: "MGA",
      LastPrice: "9.52",
      Sales: 13,
      LastDeal: "8 hours ago",
      LastPrice1: "$8.59",
      HighestPrice1: "$1.22",
      HighestPrice: "Grand Vitara",
    },
    {
      NFT: "Zontrax",
      Owner: "CNY",
      LastPrice: "4.57",
      Sales: 14,
      LastDeal: "3 hours ago",
      LastPrice1: "$3.95",
      HighestPrice1: "$3.07",
      HighestPrice: "EXP",
    },
    {
      NFT: "Stronghold",
      Owner: "ALL",
      LastPrice: "7.7.8",
      Sales: 15,
      LastDeal: "9 hours ago",
      LastPrice1: "$0.06",
      HighestPrice1: "$4.94",
      HighestPrice: "Silverado 1500",
    },
    {
      NFT: "Sonair",
      Owner: "IDR",
      LastPrice: "0.75",
      Sales: 16,
      LastDeal: "4 hours ago",
      LastPrice1: "$7.78",
      HighestPrice1: "$3.34",
      HighestPrice: "MX-5",
    },
    {
      NFT: "Stringtough",
      Owner: "AMD",
      LastPrice: "1.0",
      Sales: 17,
      LastDeal: "2 hours ago",
      LastPrice1: "$4.40",
      HighestPrice1: "$0.03",
      HighestPrice: "2500",
    },
    {
      NFT: "Konklux",
      Owner: "IDR",
      LastPrice: "0.6.7",
      Sales: 18,
      LastDeal: "9 hours ago",
      LastPrice1: "$9.17",
      HighestPrice1: "$8.65",
      HighestPrice: "B-Series",
    },
    {
      NFT: "Namfix",
      Owner: "PLN",
      LastPrice: "0.6.3",
      Sales: 19,
      LastDeal: "5 hours ago",
      LastPrice1: "$4.30",
      HighestPrice1: "$8.82",
      HighestPrice: "LS",
    },
    {
      NFT: "Vagram",
      Owner: "BYR",
      LastPrice: "1.3",
      Sales: 20,
      LastDeal: "7 hours ago",
      LastPrice1: "$9.72",
      HighestPrice1: "$3.65",
      HighestPrice: "Courier",
    },
  ]);

  useEffect(() => {
    if (data) {
      if (data.length === 0 && page > 1) return setPage(page - 1);
      setTotal(data.length);
    }
  }, []);

  const handleMarketCap = (e) => {
    setMarketCapValue(e.target.value);
  };

  const handleVolume = (e) => {
    setVolumeValue(e.target.value);
  };

  const handleHolders = (e) => {
    setHolderValue(e.target.value);
  };

  const handleTraders = (e) => {
    setTraderValue(e.target.value);
  };

  const convertUnit = (value) => {
    if (value<1000){
      return value
    }else{
      return (value / 1000).toFixed(1) + 'K'
    }
    
  }
 const getInterval = (capValue) =>{
  console.log(capValue)
    if (capValue == "12h" || capValue == "1d"){      
      return 1
    }else{      
      return 2
    }
 }
  const prepareTicks = () => {

  }

  return (
    <>
      <Row gutter={[32, 32]} className="price-table m-0">
        <div className="main-chart main-bg">
          <div className="main-chart-panel">
            <div className="price-multibar">
              <div className="price-table-data">
                <div className="price-title">
                  <span>Price (ETH)</span>
                  <InfoIcon />
                </div>
              </div>
              <div
                className="multibar-data-panel"
                xs={24}
                xl={12}
                style={{
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <div className="multi-bar main-multibar">
                  <div className="multi-radio-groups multi-biggers">
                    <Radio.Group
                      defaultValue="1m"
                      buttonStyle="solid"
                      className="rounded-radio"
                    >
                      {[
                        "1m",
                        "5m",
                        "15m",
                        "30m",
                        "1h",
                        "1d",
                        "7d",
                        "14d",
                        "30d",
                      ].map((item, index) => (
                        <Radio.Button value={item} key={index}>
                          {item}
                        </Radio.Button>
                      ))}
                    </Radio.Group>
                  </div>
                </div>
              </div>
            </div>
            <div className="overview-panel">
              <div className="overview-second-section">
                {/* <div className="overview-panel">
                      <span className="span-one purple-dott">
                        Floor Price
                        <InfoIcon />
                      </span>
                      <span className="span-two">119.00</span>
                      <span className="span-three text-success">+4.02%</span>
                    </div> */}
                <div className="overview-panel">
                  <span className="span-one blue-dott">
                    Avg. Price
                    <InfoIcon />
                  </span>
                  <span className="span-two">28.01224</span>
                  <span className="span-three text-success"> +14.02% </span>
                </div>
                <div className="overview-panel">
                  <span className="span-one green-dott">Max price</span>
                  <span className="span-two">269.298</span>
                </div>
                <div className="overview-panel">
                  <span className="span-one red-dott">Min price</span>
                  <span className="span-two"> 41.334</span>
                </div>
                <div className="overview-panel round-panel">
                  <span className="span-one round-dott">
                    <div className="round-one-svg">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7.5"
                          fill="#10B3E8"
                          fillOpacity="0.3"
                          stroke="#10B3E8"
                        />
                      </svg>
                    </div>
                    <div className="clickable-icon">
                      <span>
                        Normal Sales <InfoIcon />
                      </span>
                      <span className="span-two">37</span>
                    </div>
                  </span>
                </div>
                <div className="overview-panel round-panel">
                  <span className="span-one round-dott">
                    <div className="round-two-svg">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11"
                          fill="#10B3E8"
                          fillOpacity="0.3"
                          stroke="#10B3E8"
                          strokeWidth="2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.6452 6.05812C15.6444 6.09013 15.4276 6.35835 15.1634 6.65432C14.8992 6.95021 14.6209 7.33499 14.5449 7.50936C14.469 7.68373 14.2785 7.92274 14.1215 8.04054C13.9646 8.15833 13.698 8.455 13.5291 8.69982C13.3602 8.94463 13.1651 9.19139 13.0955 9.24819C12.8781 9.42574 12.9429 9.63956 13.253 9.76705C13.6031 9.91096 13.8694 9.86617 14.5649 9.54633C15.1853 9.26106 15.1793 9.25835 15.5695 9.99117C15.7758 10.3787 15.7963 10.4603 15.6924 10.4812C15.4943 10.521 15.5025 10.8812 15.7085 11.1924C15.93 11.5268 15.772 12.0545 15.2949 12.5743C14.8951 13.0097 14.4577 13.1606 13.7377 13.1111C13.0132 13.0614 12.3912 12.8278 11.8194 12.3909C11.5635 12.1953 11.2481 12.0274 11.0868 12.0009C10.931 11.9753 10.2366 11.8142 9.54363 11.643C7.36257 11.1038 6.59801 10.9405 6.4743 10.9873C6.32105 11.0452 6.32058 11.2256 6.47327 11.3759C6.57942 11.4803 6.56029 11.4956 6.29609 11.517L6 11.5411L6.00016 12.011C6.00031 12.4434 6.05166 12.5824 6.64376 13.7547C7.94105 16.3231 8.76616 17.2037 10.4276 17.7931C10.7855 17.9201 11.1339 17.9624 12.0636 17.9914C13.3063 18.0303 13.9163 17.9414 14.5287 17.6322C14.7849 17.5029 14.8092 17.5033 15.093 17.6414C15.6853 17.9299 16.5935 17.9562 16.5904 17.6848C16.5898 17.6305 16.4569 17.4175 16.2951 17.2116L16.0009 16.8373L16.3579 16.4583C17.271 15.489 17.9281 13.9917 17.9913 12.7363C18.0688 11.2001 17.6291 10.0012 16.5903 8.91596L15.9876 8.28621L16.1302 7.74372C16.4011 6.71392 16.2819 6 15.8389 6C15.7331 6 15.6459 6.02612 15.6452 6.05812Z"
                          fill="#10B3E8"
                        />
                      </svg>
                    </div>
                    <div className="clickable-icon">
                      <span>
                        Whale Sales <InfoIcon />
                      </span>
                      <span className="span-two">3</span>
                    </div>
                  </span>
                </div>
              </div>
              <ResponsiveContainer
                className="watermark chart-pie-panel"
                width="100%"
                aspect={5}
              >
                <ComposedChart width={1200} height={400} data={mixchatsData}>
                  <XAxis dataKey="name" tickLine={false} />
                  <YAxis unit="B" axisLine={false} tickLine={false} />
                  <CartesianGrid
                    horizontal={true}
                    vertical={false}
                    stroke="#212C3A"
                  />
                  <Area
                    type="monotone"
                    dataKey="amt"
                    stroke="#7f19cf"
                    strokeWidth={4}
                    fill="#332256"
                  />
                  <ReferenceLine y={240} stroke="#62b92f" strokeWidth={4} />
                  <ReferenceLine y={40} stroke="#df3a35" strokeWidth={4} />
                  <Line
                    type="monotone"
                    strokeWidth={5}
                    dataKey="uv"
                    stroke="#10b0e4"
                    dot={<CustomizedDot />}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="mini-chart-panel">
          <div className="market-panel-data">
            <div className="watermark">
              <Card bordered={false}>
                <div className="mini-chart-section">
                  <div className="mc-data-panel">
                    <div className="mc-sector">
                      <div className="price-title">
                        Market Cap
                        <InfoIcon />
                      </div>
                    </div>
                    <div
                      className="mc-panel"
                      style={{
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <div className="second-title market-title">
                        <span className="price-title">$00000.00</span>
                        <span className="red-color">-0.02%</span>
                      </div>
                    </div>
                  </div>
                  <div className="chart-section">
                    {/* <ApxChats  showEtH  chartData={marketCapDatas}/> */}
                    <ResponsiveContainer width="100%" aspect={2.5}>
                      <AreaChart
                        width="auto"
                        height="auto"
                        data={marketCapDatas}
                        margin={{ top: 5, right: 0, left: 10, bottom: 5 }}
               
                      >
                        <Tooltip
                          active={true}
                          formatter={(value, name)=>{return `${value}`}}
                          labelFormatter={(value)=>{return `label:${value}`}}
                        />
                        <XAxis dataKey="time" tickLine={false}  interval={getInterval(market_capValue)}/>
                        <YAxis unit=" ETH" axisLine={false} tickLine={false} tickFormatter={(value) => convertUnit(value)}/>
                        <CartesianGrid
                          horizontal={true}
                          vertical={false}
                          stroke="#212C3A"
                        />
                        <CartesianGrid
                          horizontal={true}
                          vertical={false}
                          stroke="#212C3A"
                        />
                        <Area
                          type="monotone"
                          strokeWidth={3}
                          dataKey="value"
                          stroke="#10b2e6"
                          fill="#19465c"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="multi-chart-data-panel">
                    <div className="multi-bar">
                      <div className="multi-radio-groups">
                        <Radio.Group
                          defaultValue={market_capValue}
                          buttonStyle="solid"
                          className="rounded-radio"
                        >
                          {["12h", "1d", "7d", "14d", "30d"].map(
                            (item, index) => (
                              <Radio.Button
                                value={item}
                                key={index}
                                onChange={(e) => {
                                  handleMarketCap(e);
                                }}
                              >
                                {item}
                              </Radio.Button>
                            )
                          )}
                        </Radio.Group>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="market-panel-data">
            <div className="watermark">
              <Card bordered={false}>
                <div className="mini-chart-section">
                  <div className="mc-data-panel">
                    <div className="mc-sector">
                      <div className="price-title">
                        Volume
                        <InfoIcon />
                      </div>
                    </div>
                    <div className="mc-panel">
                      <div className="second-title">
                        <span className="price-title">
                          ${(volumeDataState && volumeDataState?.volume) || 0}
                        </span>
                        <span
                          className={`volume-text ${
                            volume_changeData > 0
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          {volume_changeData < 0
                            ? `${volume_changeData}%`
                            : `+${volume_changeData}%`}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="chart-section">
                    <ResponsiveContainer width="100%" aspect={2.5}>
                      <BarChart
                        width={600}
                        height={300}
                        data={volumeData}
                        margin={{
                          top: 5,
                          right: 0,
                          left: -30,
                          bottom: 5,
                        }}
                      >
                        <XAxis dataKey="time" tickLine={false} />
                        <YAxis unit="B" axisLine={false} tickLine={false} />
                        <Tooltip />
                        <CartesianGrid
                          horizontal={true}
                          vertical={false}
                          stroke="#212C3A"
                        />
                        <Bar
                          dataKey="pv"
                          strokeWidth={3}
                          stroke="#259ae8"
                          fill="#259ae8"
                        />
                        <Bar
                          dataKey="value"
                          strokeWidth={3}
                          stroke="#259ae8"
                          fill="#259ae8"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="multi-chart-data-panel">
                    <div className="multi-bar">
                      <div className="multi-radio-groups">
                        <Radio.Group
                          defaultValue={volumeValue}
                          buttonStyle="solid"
                          className="rounded-radio"
                          onChange={(e) => {
                            handleVolume(e);
                          }}
                        >
                          {[
                            "1m",
                            "5m",
                            "15m",
                            "30m",
                            "1h",
                            "1d",
                            "7d",
                            "14d",
                            "30d",
                          ].map((item, index) => (
                            <Radio.Button value={item} key={index}>
                              {item}
                            </Radio.Button>
                          ))}
                        </Radio.Group>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="mini-chart-panel">
          <div className="market-panel-data watermark">
            <Card bordered={false}>
              <div className="mp-transiction">
                <div className="mp-panel">
                  <div className="price-title">
                    Traders
                    <InfoIcon />
                  </div>
                  <div className="overview-section">
                    <div className="overview-panel">
                      <span className="span-one blue-dott">
                        Buyers
                        <InfoIcon />
                      </span>
                      <span className="span-two">
                        {(traderDataState && traderDataState?.buyers) || 0}
                      </span>
                      <span
                        className={`trader-text ${
                          traderBuyers_change > 0
                            ? "text-success"
                            : "text-danger"
                        }`}
                      >
                        {traderBuyers_change < 0
                          ? `${traderBuyers_change}%`
                          : `+${traderBuyers_change}%`}
                      </span>
                    </div>

                    <div className="overview-panel">
                      <span className="span-one purple-dott">
                        Sellers
                        <InfoIcon />
                      </span>
                      <span className="span-two">
                        {(traderDataState && traderDataState?.sellers) || 0}
                      </span>
                      <span
                        className={`trader-text ${
                          traderSellers_change > 0
                            ? "text-success"
                            : "text-danger"
                        }`}
                      >
                        {traderSellers_change < 0
                          ? `${traderSellers_change}%`
                          : `+${traderSellers_change}%`}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mp-chart">
                  <ResponsiveContainer width="100%" aspect={2.5}>
                    <BarChart
                      width={600}
                      height={300}
                      data={tradersData}
                      margin={{
                        top: 20,
                        right: 10,
                        left: 0,
                        bottom: 5,
                      }}
                    >
                      <XAxis dataKey="time" tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />

                      <Tooltip />
                      <CartesianGrid
                        horizontal={true}
                        vertical={false}
                        stroke="#212C3A"
                      />
                      <Bar
                        dataKey="buyers"
                        strokeWidth={3}
                        stroke="#259ae8"
                        fill="#259ae8"
                      />
                      <Bar
                        dataKey="sellers"
                        strokeWidth={3}
                        stroke="#7718c9"
                        fill="#7718c9"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="multi-bar">
                  <div className="multi-radio-groups">
                    <Radio.Group
                      defaultValue={traderValue}
                      buttonStyle="solid"
                      className="rounded-radio"
                      onChange={(e) => {
                        handleTraders(e);
                      }}
                    >
                      {[
                        "1m",
                        "5m",
                        "15m",
                        "30m",
                        "1h",
                        "1d",
                        "7d",
                        "14d",
                        "30d",
                      ].map((item, index) => (
                        <Radio.Button value={item} key={index}>
                          {item}
                        </Radio.Button>
                      ))}
                    </Radio.Group>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="market-panel-data watermark">
            <Card bordered={false}>
              <div className="mp-transiction">
                <div className="mp-panel">
                  <div className="price-title">
                    Transactions
                    <InfoIcon />
                  </div>
                  <div className="overview-section">
                    <div className="overview-panel">
                      <span className="span-one blue-dott">
                        Sales
                        <InfoIcon />
                      </span>
                      <span className="span-two"> 32</span>
                      <span className="span-three"> +9.2% </span>
                    </div>

                    <div className="overview-panel">
                      <span className="span-one purple-dott">
                        Transfers
                        <InfoIcon />
                      </span>
                      <span className="span-two"> 32</span>
                      <span className="span-three"> +9.2% </span>
                    </div>
                  </div>
                </div>
                <div className="mp-chart">
                  <ResponsiveContainer width="100%" aspect={2.5}>
                    <LineChart
                      width={600}
                      height={300}
                      data={transactionData}
                      margin={{
                        top: 20,
                        right: 10,
                        left: 0,
                        bottom: 5,
                      }}
                    >
                      <XAxis dataKey="name" tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <CartesianGrid
                        horizontal={true}
                        vertical={false}
                        stroke="#212C3A"
                      />
                      <Line
                        dataKey="uv"
                        type="monotone"
                        strokeWidth={4}
                        stroke="#10b0e4"
                      />
                      <Line
                        type="monotone"
                        strokeWidth={4}
                        dataKey="pv"
                        stroke="#7f19cf"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="multi-bar">
                  <div className="multi-radio-groups">
                    <Radio.Group
                      defaultValue="1m"
                      buttonStyle="solid"
                      className="rounded-radio"
                    >
                      {[
                        "1m",
                        "5m",
                        "15m",
                        "30m",
                        "1h",
                        "1d",
                        "7d",
                        "14d",
                        "30d",
                      ].map((item, index) => (
                        <Radio.Button value={item} key={index}>
                          {item}
                        </Radio.Button>
                      ))}
                    </Radio.Group>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="mini-chart-panel">
          <div className="market-panel-data">
            <div className="watermark">
              <Card bordered={false}>
                <div className="mp-transiction">
                  <div className="mp-panel">
                    <div className="price-title">
                      Liquidity
                      <InfoIcon />
                    </div>
                    <div className="overview-section">
                      <div className="overview-panel">
                        <span className="span-one blue-dott">
                          Liquidity
                          <InfoIcon />
                        </span>
                        <span className="span-two"> 32</span>
                        <span className="span-three"> +9.2% </span>
                      </div>
                    </div>
                  </div>
                  <div className="mp-chart">
                    <ResponsiveContainer width="100%" aspect={2.5}>
                      <LineChart width={1200} height={400} data={LiquidityData}>
                        <XAxis dataKey="name" tickLine={false} />
                        <YAxis unit="%" axisLine={false} tickLine={false} />
                        <CartesianGrid
                          horizontal={true}
                          vertical={false}
                          stroke="#212C3A"
                        />
                        <Line
                          // type="monotone"
                          strokeWidth={3}
                          dataKey="uv"
                          stroke="#6bcd2f"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="multi-bar">
                    <div className="multi-radio-groups">
                      <Radio.Group
                        defaultValue="1m"
                        buttonStyle="solid"
                        className="rounded-radio"
                      >
                        {[
                          "1m",
                          "5m",
                          "15m",
                          "30m",
                          "1h",
                          "1d",
                          "7d",
                          "14d",
                          "30d",
                        ].map((item, index) => (
                          <Radio.Button value={item} key={index}>
                            {item}
                          </Radio.Button>
                        ))}
                      </Radio.Group>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <div className="market-panel-data">
            <div className="watermark">
              <Card bordered={false}>
                <div className="mp-transiction">
                  <div className="mp-panel">
                    <div className="price-title">
                      Holders
                      <InfoIcon />
                    </div>
                    <div className="overview-section">
                      <div className="overview-panel">
                        <span className="span-one purple-dott">
                          Holders
                          <InfoIcon />
                        </span>
                        <span className="span-two">
                          {(holderDataState &&
                            priceNumFormatter(
                              holderDataState?.holders_value
                            )) ||
                            0}
                        </span>
                        <span
                          className={`holder-text ${
                            holder_changeData > 0
                              ? "text-success"
                              : "text-danger"
                          }`}
                        >
                          {holder_changeData < 0
                            ? `${holder_changeData}%`
                            : `+${holder_changeData}%`}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mp-chart">
                    <ResponsiveContainer width="100%" aspect={2.5}>
                      <AreaChart
                        width={600}
                        height={300}
                        data={holderData}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 0,
                          bottom: 0,
                        }}
                      >
                        <XAxis dataKey="time" tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} unit="k" />
                        <CartesianGrid
                          horizontal={true}
                          vertical={false}
                          stroke="#212C3A"
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          strokeWidth={4}
                          stroke="#7f18cf"
                          fill="#36225a"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="multi-bar">
                    <div className="multi-radio-groups">
                      <Radio.Group
                        defaultValue={HolderValue}
                        buttonStyle="solid"
                        className="rounded-radio"
                        onChange={(e) => {
                          handleHolders(e);
                        }}
                      >
                        {["12h", "1d", "7d", "14d", "30d"].map(
                          (item, index) => (
                            <Radio.Button value={item} key={index}>
                              {item}
                            </Radio.Button>
                          )
                        )}
                      </Radio.Group>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* First Table */}
        <div className="top-sales-panel p-0 multibar-auto">
          <div className="top-sales">
            <p className="top-title">Top Sales (24h)</p>
          </div>
          <div className="top-salees-div">
            <div className="multi-bar">
              <div className="multi-radio-groups">
                <Radio.Group
                  defaultValue="1m"
                  buttonStyle="solid"
                  className="rounded-radio"
                >
                  {[
                    "1m",
                    "5m",
                    "15m",
                    "30m",
                    "1h",
                    "1d",
                    "7d",
                    "14d",
                    "30d",
                  ].map((item, index) => (
                    <Radio.Button value={item} key={index}>
                      {item}
                    </Radio.Button>
                  ))}
                </Radio.Group>
              </div>
            </div>
          </div>
        </div>
        <div className="p-0 top-sale-table">
          <div className="table-h">
            <table className="table table-background-odd">
              <thead>
                <tr>
                  <th>NFT</th>
                  {[
                    "",
                    "Owner",
                    "Last Price",
                    "Higest Price(24h)",
                    "Sales",
                    "Last Deal",
                  ].map((item, index) => (
                    <th key={index}>
                      <span className="flex">{item}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {!loading &&
                  data &&
                  data.map(
                    (
                      {
                        NFT,
                        Owner,
                        LastPrice,
                        Sales,
                        LastDeal,
                        LastPrice1,
                        HighestPrice1,
                        HighestPrice,
                      },
                      index
                    ) => (
                      <tr key={index}>
                        <td>
                          <span className="table-title">
                            {/* <Avatar
                                  src={"https://joeschmoe.io/api/v1/random"}
                                /> */}
                            <div className="table-profile">
                              <img src={UserAavtar} alt="main" />
                            </div>
                            <span className="title font-w-400">{NFT}</span>
                          </span>
                        </td>
                        <td>
                          <span className="fish-icon">
                            <img src={WhaleIcon} alt="WhaleIcon" />
                            {/* <InfoCircleOutlined /> */}
                          </span>
                        </td>
                        <td>
                          <span className="d-inline-block font-w-400 ">
                            {Owner}
                          </span>
                        </td>
                        <td>
                          <span className="d-block font-w-400 font-s-14">
                            {LastPrice}
                          </span>
                          <span className="d-block font-w-500 font-s-10 text-primary">
                            {LastPrice1}
                          </span>
                        </td>
                        <td>
                          <span className="d-block font-w-400 font-s-14">
                            {HighestPrice}
                          </span>
                          <span className="d-block font-w-500 font-s-10 text-primary">
                            {HighestPrice1}
                          </span>
                        </td>
                        <td>
                          <span>
                            <span className="d-block font-w-400 font-s-14">
                              {Sales}
                            </span>
                          </span>
                        </td>
                        <td>
                          <span className="d-block font-w-400 font-s-14 text-primary">
                            {LastDeal}
                          </span>
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
          {loading && (
            <Skeleton active paragraph={{ rows: pageSize, width: "100%" }} />
          )}
          {/* } */}
          {!loading && data && data.length === 0 && (
            <div className="no-record-holder">
              <NoRecordsFound
                title={`There isn't any sell event in this period.`}
              />
            </div>
          )}
        </div>
        <div className="table-pagination p-0">
          {!loading && data && data.length !== 0 && (
            <div className="pagination-wrap">
              <span className="title">
                Showing{" "}
                {`${normalizeNumber(
                  (page - 1) * pageSize + 1
                )} - ${normalizeNumber(
                  (page - 1) * pageSize + data.length
                )}`}{" "}
                out of {normalizeNumber(total)}
              </span>
              <Pagination
                size="small"
                showSizeChanger={false}
                defaultCurrent={1}
                total={total}
                current={page}
                pageSize={pageSize}
                onChange={(p, size) => {
                  pageSizeRef.current = pageSize;
                  setPage(p);
                  setPageSize(size);
                }}
              />
              <SelectRowsDropdown
                title={"Rows"}
                pageSize={pageSize}
                setPageSize={setPageSize}
                disabled={networkLoading}
                setPage={setPage}
              />
            </div>
          )}
        </div>
        {/* second table  */}
        <div className="live-data-section p-0">
          <div className="live-title">
            <span></span>
            <p className="top-title">Live data feed</p>
          </div>
          <div className="live-panel">
            <div className="switch-panel">
              <Switch defaultChecked />
              <span>Hide Transfers</span>
            </div>
            <div className="switch-panel">
              <Switch defaultChecked />
              <span>Only show mints by owner</span>
            </div>
            {/* <SelectRowsDropdown 
                    //  title={"Rows"}
                     pageSize={pageSize}
                     setPageSize={setPageSize}
                     disabled={networkLoading}
                     setPage={setPage}/> */}
            {/* Add dropDown hetee */}
            <div className="custom-dropdown">
              <div className="showall">
                <span>Show all</span>
                <label>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      fill="#414B5D"
                    />
                    <path
                      d="M8.46997 10.74L12 14.26L15.53 10.74"
                      stroke="#10B3E8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="live-data-panel-table p-0">
          <div className="table-h">
            <table className="table table-background-odd">
              <thead>
                <tr>
                  <th>Actions</th>
                  {["Transfer", "Token", "Price", "Links"].map(
                    (item, index) => (
                      <th key={index}>
                        <span className="flex">{item}</span>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {!loading &&
                  data &&
                  data.map(
                    (
                      {
                        NFT,

                        LastPrice,
                        Sales,
                        LastDeal,
                        LastPrice1,
                        HighestPrice1,
                        HighestPrice,
                      },
                      index
                    ) => (
                      <tr key={index}>
                        <td>
                          <div className="nft-panel">
                            <span className="title font-w-400">{NFT}</span>
                            <span className="less-than-text">
                              less than a minute ago
                            </span>
                          </div>
                        </td>

                        {/* <td>
                              <span className="d-inline-block font-w-400 ">
                                {Owner}
                              </span>
                            </td> */}
                        <td>
                          <div className="to-from-panel">
                            <div className="d-block font-w-400 font-s-14 to-from-data">
                              <label>To:</label>
                              <span>{LastPrice}</span>
                            </div>
                            <div className="d-block font-w-500 font-s-10  to-from-data">
                              <label>From:</label>
                              <span className=""> {LastPrice1} </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="table-title">
                            <div className="useravtar">
                              <img src={UserAavtar} alt="UserAavtar" />
                            </div>
                            <div className="user-data-panel">
                              <span className="title font-w-400">
                                {HighestPrice}
                              </span>
                              <span className="d-block font-w-500 font-s-10 text-primary">
                                {HighestPrice1}
                              </span>
                            </div>
                          </span>
                        </td>
                        <td>
                          <div className="gas-tank-panel">
                            <span className="d-block font-w-400 font-s-14">
                              {Sales}
                            </span>
                            <span className="d-block font-w-500 font-s-10 text-primary sale-panel">
                              <span>{Sales}</span>
                              {/* <Avatar
                                    src={"https://joeschmoe.io/api/v1/random"}
                                  /> */}
                              <img src={GasIcon} alt="Gas" />
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className="opensea-ethern-img">
                            <span className="d-block font-w-400 font-s-14 text-primary">
                              <img src={Opensea} alt="Opensea" />
                              {/* <Avatar
                                    src={"https://joeschmoe.io/api/v1/random"}
                                  /> */}
                            </span>
                            <span className="d-block font-w-400 font-s-14 text-primary">
                              <img src={Etherscan} alt="Etherscan" />
                              {/* <Avatar
                                    src={"https://joeschmoe.io/api/v1/random"}
                                  /> */}
                            </span>
                          </div>
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
          {loading && (
            <Skeleton active paragraph={{ rows: pageSize, width: "100%" }} />
          )}
        </div>
      </Row>
    </>
  );
};

export default Overview;
