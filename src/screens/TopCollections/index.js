import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  Layout,
  Radio,
  Select,
  Avatar,
  Pagination,
  Row,
  Col,
  Alert,
  Skeleton,
} from "antd";
import Chart from "react-apexcharts";

// Components
import MainHeader from "../../components/Header";
import WidgetArrowBtnIcon from "../../icons/WidgetArrowBtnIcon";
import MainDrawer from "../../components/MainDrawer";
import InfoIcon from "../../icons/InfoIcon";
import MainFooter from "../../components/MainFooter";
import StatsWidget from "../../components/StatsWidget";
import NoRecordsFound from "../../components/NoRecordsFound";

import { chart } from "./dataSource";
import { darkthemeContext } from "../../themestore/context";
import useFetch from "../../hooks/useFetch";
import { normalizeNumber } from "../../utils";
import { useHistory } from "react-router-dom";

const { Content } = Layout;
const { Option } = Select;

const TopCollections = () => {
  const history = useHistory();
  const {
    state: { darktheme },
  } = useContext(darkthemeContext);

	const [isDrawer, setIsDrawer] = useState(false);
	const [period, setPeriod] = useState("1m");
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(20);
	const [data, setData] = useState([]);
	const [total, setTotal] = useState(0);
	const [intervalId, setIntervalId] = useState(null);

	const pageSizeRef = useRef(pageSize);
	const periodRef = useRef(period);

  const {
    data: topCollectionData,
    loading,
    errors,
    refetch,
    networkLoading,
    setLoading,
  } = useFetch({
    endPoint: "/collection/trending/?",
    data: { period, page, page_size: pageSize },
  });
  
  const {
    data: statsData,
    loading: statsLoading,
    refetch: refetchStats,
  } = useFetch({ endPoint: "/collection/statistics/" });

  useEffect(() => {
    if (topCollectionData && topCollectionData.collections) {
      if (topCollectionData.collections.length === 0 && page > 1)
        return setPage(page - 1);
      setData(topCollectionData.collections);
      setTotal(topCollectionData.total_count);
    }
  }, [topCollectionData]);

  useEffect(() => {
    const intervalId = setInterval(async () => await refetchStats(), 10000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setData([]);
    setLoading(true);
    refetch();
    setTotal(0);
    // try {
    clearInterval(setIntervalId);
    // } catch (error) {
    // console.log("Error in clearing the interval");
    // }
    const intervalId = setInterval(() => refetch(), 10000);
    setIntervalId(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, [page, pageSize, period]);
  const handleClick = (slug)=>{
   // console.log(slug)
    history.push(`/collection/${slug}`)
  }
  return (
    <Layout className="layout">
      {/* Alert */}
      <Alert
        closable
        message={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum sit ultrices eget "
        }
        type="primary"
        className="announcement"
      />
      {/* Alert Ends */}
      {/* Main Header */}
      <MainHeader isDrawer={isDrawer} setIsDrawer={setIsDrawer} />
      {/* Main Header End */}
      {/* Main Drawer */}
      <MainDrawer isDrawer={isDrawer} setIsDrawer={setIsDrawer} />
      {/* Main Drawer End */}
      {/* Main Content */}
      <Content className="main-content">
        <div className="container">
          {/* Statistics Section */}
          <section className="statistics-sec mr-b-40">
            <div className="main-heading">
              <h2 className="title">Statistics</h2>
            </div>
            <Row gutter={[30, 30]}>
              <Col xs={24} md={8}>
                <StatsWidget
                  numClass="text-primary"
                  ratioClass={
                    statsData && parseFloat(statsData.market_cap_change) > 0
                      ? "text-success"
                      : "text-danger"
                  }
                  name={"Overall Market cap"}
                  price={(statsData && statsData.market_cap) || 0}
                  ratio={(statsData && statsData.market_cap_change) || 0}
                />
              </Col>
              <Col xs={24} md={8}>
                <StatsWidget
                  numClass="text-primary"
                  ratioClass={
                    statsData && parseFloat(statsData.sales_24h_change) > 0
                      ? "text-success"
                      : ""
                  }
                  name={"Volume (24)"}
                  price={(statsData && statsData.sales_24h) || 0}
                  ratio={(statsData && statsData.sales_24h_change) || 0}
                />
              </Col>
              <Col xs={24} md={8}>
                <StatsWidget
                  numClass="text-primary"
                  ratioClass={
                    statsData && parseFloat(statsData.volume_24h_change) > 0
                      ? "text-success"
                      : ""
                  }
                  name={"Sales (24)"}
                  price={(statsData && statsData.volume_24h) || 0}
                  ratio={(statsData && statsData.volume_24h_change) || 0}
                />
              </Col>
            </Row>
          </section>
          {/* Statistics Section End */}
          <div className="main-heading">
            <h2 className="title">Top Collections</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              donec turpis aliquet dui.
            </p>
          </div>
          <div className="multi-bar">
            <div className="multi-radio-groups">
              <Radio.Group
                defaultValue="1"
                buttonStyle="solid"
                className="rounded-radio"
              >
                {["Trending", "Mints", "Sales"].map((item, index) => (
                  <Radio.Button value={`${index + 1}`} key={index}>
                    {item}
                  </Radio.Button>
                ))}
              </Radio.Group>
              <Radio.Group
                defaultValue="1m"
                disabled={loading}
                buttonStyle="solid"
                className="rounded-radio"
                onChange={({ target: { value } }) => {
                  setPeriod(value);
                  setPage(1);
                }}
              >
                {["1m", "5m", "15m", "30m", "1h", "1d", "7d", "14d", "30d"].map(
                  (item, index) => (
                    <Radio.Button value={item} key={index}>
                      {item}
                    </Radio.Button>
                  )
                )}
              </Radio.Group>
            </div>
            {/* {!loading && data && data.length !== 0 && */}
            <SelectRowsDropdown
              pageSize={pageSize}
              setPageSize={setPageSize}
              disabled={networkLoading}
              setPage={setPage}
            />
            {/* } */}
          </div>
          <div className="table-h mr-b-30">
            <table className="table table-background-odd">
              <thead>
                <tr>
                  <th>Collection</th>
                  {[
                    "Market Cap",
                    "24h",
                    "Avg. Price(24h)",
                    "Floor",
                    "Sales",
                  ].map((item, index) => (
                    <th key={index}>
                      <span className="flex">
                        {item}
                        <InfoIcon className="mr-l-5" />
                      </span>
                    </th>
                  ))}
                  <th width="150px">
                    <span className="flex">
                      7D Volume
                      <InfoIcon className="mr-l-5" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {!loading &&
                  data &&
                  data.map(
                    (
                      {
                        image_url,
                        seven_day_volumes,
                        name,
                        market_cap,
                        average_24hr,
                        cnt_sell,
                        percentageUp,
                        volume,
                        averagePrice,
                        floor,
                        sales,
                        volume_24hr,
                        slug,
                      },
                      index
                    ) => (
                      <tr key={index}  onClick={()=>handleClick(slug)}>
      
                        <td>
                          <span className="table-title">
                            <Avatar
                              src={
                                image_url ||
                                "https://joeschmoe.io/api/v1/random"
                              }
                            />
                            <span className="title font-w-400">{name}</span>
                          </span>
                        </td>
                        <td>
                          {/* <span className="d-inline-block font-w-400 text-primary">{market_cap ? `${market_cap}` : "-"}</span> */}
                          <span className="d-inline-block font-w-400 text-primary">
                            {market_cap <= 0 ? "-" : `${market_cap}`}
                          </span>
                        </td>
                        <td>
                          <RenderValue
                            extraClass="d-inline-block font-w-500"
                            value={volume}
                          />
                        </td>
                        <td>
                          <span>
                            <span className="d-block font-w-400 font-s-14">{`${volume_24hr}`}</span>
                            <RenderValue
                              extraClass="d-block font-w-500 font-s-10"
                              value={volume_24hr}
                            />
                          </span>
                        </td>
                        <td>
                          <span>
                            <span className="d-block font-w-400 font-s-14">
                              {floor}
                            </span>
                            <RenderValue
                              extraClass="d-block font-w-500 font-s-10"
                              value={floor}
                            />
                          </span>
                        </td>
                        <td>
                          <span>
                            <span className="d-block font-w-400 font-s-14">
                              {normalizeNumber(cnt_sell)}
                            </span>
                            <RenderValue
                              extraClass="d-block font-w-500 font-s-10"
                              value={cnt_sell}
                            />
                          </span>
                        </td>
                        <td>
                          <span className="graph-h d-block">
                            <RenderChart data={seven_day_volumes} />
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
                pageSize={pageSize}
                setPageSize={setPageSize}
                disabled={networkLoading}
                setPage={setPage}
              />
            </div>
          )}

        </div>
      </Content>

      {/* Main Content End */}
      {/* Main Footer */}
      <MainFooter />
      {/* Main Footer End */}
    </Layout>
  );
};

export default TopCollections;

const SelectRowsDropdown = ({
  pageSize,
  setPageSize,
  disabled = false,
  setPage,
}) => (
  <div className="table-rows-dropdown">
    <span className="title">Rows</span>
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

const RenderChart = (data) => (
  <Chart height="40px" options={chart.options} series={[data]} type="bar" />
);

const RenderValue = ({ extraClass = "", value }) => (
  <span
    className={`${extraClass} ${
      value && value !== 0 ? (value > 0 ? "text-success" : "text-danger") : ""
    }`}
  >
    {" "}
    {Boolean(value)
      ? value > 0
        ? `+${normalizeNumber(value)}%`
        : `${normalizeNumber(value)}%`
      : `-`}
  </span>
);
