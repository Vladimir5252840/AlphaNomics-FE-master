import React, { useEffect, useState } from "react";
import { Card, Button, Skeleton, Space } from "antd";
import StatsWidget from "./CollectionMainStateWidget";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { roundNumber } from "../../utils";
import "./collection.css";

const CollectionMain = () => {
  let { slug } = useParams();

  const [statsData, setStatsData] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const {
    data,
    loading,
    refetch: refetchStats,
  } = useFetch({ endPoint: `/collection/${slug}/info` });

  useEffect(() => {
    setStatsData(data);
  }, [data]);

  const smartTrim = (string, maxLength) => {
    if (!string) return string;
    if (maxLength < 1) return string;
    if (string.length <= maxLength) return string;
    if (maxLength == 1) return string.substring(0, 1) + "...";

    var midpoint = Math.ceil(string.length / 2);
    var toremove = string.length - maxLength;
    var lstrip = Math.ceil(toremove / 2);
    var rstrip = toremove - lstrip;
    return (
      string.substring(0, midpoint - lstrip) +
      "..." +
      string.substring(midpoint + rstrip)
    );
  };

  return (
    <div className="collection-main">
      <div className="top-panel">
        <div className="top-data">
          <div className="profile-section main-bg">
            <div className="profil-main-panel">
              <div className="first-box">
                <div className="profile-data-panel">
                  <div className="profile-top-panel">
                    <div className="profile-img-panel">
                      <div className="profile-img">
                        {loading ? (
                          <Skeleton.Avatar active size={100} />
                        ) : (
                          <img
                            src={statsData && statsData.image_url}
                            alt="main"
                          />
                        )}
                      </div>
                    </div>
                    <div className="profile-main">
                      <div className="profile-panel">
                        <div className="title-collection">
                          {loading ? (
                            <Skeleton.Button
                              active
                              size="default"
                              shape="default"
                              block="false"
                            />
                          ) : (
                            statsData && statsData.name
                          )}
                        </div>
                        <div className="profile-panel">
                          {loading && (
                            <Space style={{ marginRight: 8 }}>
                              <Skeleton.Button
                                active
                                size
                                shape="default"
                                block={false}
                              />
                              <Skeleton.Button
                                active
                                size
                                shape="default"
                                block={false}
                              />
                              <Skeleton.Button
                                active
                                size
                                shape="default"
                                block={false}
                              />
                            </Space>
                          )}

                          <div className="profile-tag">
                            {!loading && (
                              <>
                                <div className="spantag">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6.96644 2.03329L4.4731 5.13996C3.90644 5.84662 4.10644 6.75329 4.9131 7.15329L7.39977 8.39996C7.72644 8.55996 8.25977 8.55996 8.58644 8.39996L11.0731 7.15329C11.8798 6.74662 12.0798 5.83996 11.5131 5.13996L9.02644 2.03329C8.46644 1.31996 7.5331 1.31996 6.96644 2.03329Z"
                                      stroke="#10B3E8"
                                      strokeMiterlimit="10"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M8 1.53333V5.03999"
                                      stroke="#10B3E8"
                                      strokeMiterlimit="10"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M5.19971 7.13992L7.99971 5.03992L10.7997 7.13992"
                                      stroke="#10B3E8"
                                      strokeMiterlimit="10"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M5.84642 9.62001L6.91975 10.1C7.60641 10.4067 8.39308 10.4067 9.08641 10.1L10.1597 9.62001C11.1197 9.19334 12.0064 10.3533 11.3397 11.1667L9.03308 13.9867C8.46641 14.68 7.53975 14.68 6.96641 13.9867L4.66642 11.1667C3.99308 10.3533 4.87975 9.19334 5.84642 9.62001Z"
                                      stroke="#10B3E8"
                                      strokeMiterlimit="10"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <span>ETH</span>
                                </div>

                                <div className="spantag">
                                  <span>
                                    {statsData &&
                                      smartTrim(statsData.contract_address, 10)}
                                  </span>

                                  <span
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      navigator.clipboard.writeText(
                                        statsData.contract_address
                                      );
                                    }}
                                  >
                                    <svg
                                      width="16"
                                      height="16"
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11.3335 8.93329V10.9333C11.3335 13.6 10.2668 14.6666 7.60016 14.6666H5.06683C2.40016 14.6666 1.3335 13.6 1.3335 10.9333V8.39996C1.3335 5.73329 2.40016 4.66663 5.06683 4.66663H7.06683"
                                        stroke="#10B3E8"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M11.3336 8.93329H9.20023C7.60023 8.93329 7.06689 8.39996 7.06689 6.79996V4.66663L11.3336 8.93329Z"
                                        stroke="#10B3E8"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M7.7334 1.33337H10.4001"
                                        stroke="#10B3E8"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M4.6665 3.33337C4.6665 2.22671 5.55984 1.33337 6.6665 1.33337H8.41317"
                                        stroke="#10B3E8"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M14.6668 5.33337V9.46004C14.6668 10.4934 13.8268 11.3334 12.7935 11.3334"
                                        stroke="#10B3E8"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M14.6665 5.33337H12.6665C11.1665 5.33337 10.6665 4.83337 10.6665 3.33337V1.33337L14.6665 5.33337Z"
                                        stroke="#10B3E8"
                                        strokeWidth="1.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </span>
                                </div>

                                <div className="spantag">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M1.3335 6.00004V4.66671C1.3335 2.66671 2.66683 1.33337 4.66683 1.33337H11.3335C13.3335 1.33337 14.6668 2.66671 14.6668 4.66671V6.00004"
                                      stroke="#10B3E8"
                                      strokeWidth="1.2"
                                      strokeMiterlimit="10"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M1.3335 10V11.3333C1.3335 13.3333 2.66683 14.6667 4.66683 14.6667H11.3335C13.3335 14.6667 14.6668 13.3333 14.6668 11.3333V10"
                                      stroke="#10B3E8"
                                      strokeWidth="1.2"
                                      strokeMiterlimit="10"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M4.4668 6.17334L8.00013 8.22001L11.5068 6.18669"
                                      stroke="#10B3E8"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M8 11.8467V8.21338"
                                      stroke="#10B3E8"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.17348 4.19329L5.04015 5.37998C4.56015 5.64664 4.16016 6.31997 4.16016 6.8733V9.13331C4.16016 9.68665 4.55348 10.36 5.04015 10.6266L7.17348 11.8133C7.62682 12.0666 8.37349 12.0666 8.83349 11.8133L10.9668 10.6266C11.4468 10.36 11.8468 9.68665 11.8468 9.13331V6.8733C11.8468 6.31997 11.4535 5.64664 10.9668 5.37998L8.83349 4.19329C8.37349 3.93329 7.62682 3.93329 7.17348 4.19329Z"
                                      stroke="#10B3E8"
                                      strokeWidth="1.2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <span>
                                    {statsData &&
                                      `${roundNumber(
                                        statsData?.total_supply || 0,
                                        2
                                      )} NFTs`}
                                  </span>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="deploy-section">
                    {loading ? (
                      <Skeleton.Button
                        active
                        size="large"
                        shape="default"
                        block={false}
                      />
                    ) : (
                      <div className="deploy-panel">
                        <span>Deployed</span>
                        <h3>{(statsData && statsData.deployed) || "0d ago"}</h3>
                      </div>
                    )}
                  </div>
                </div>
                <div className="view-more-panel">
                  {loading ? (
                    <Skeleton active />
                  ) : (
                    <p className="font-white">
                      {showMore
                        ? statsData?.description
                        : statsData?.description?.slice(0, 250)}
                    </p>
                  )}
                  {!loading && (
                    <span
                      onClick={() => setShowMore(!showMore)}
                      className="view-more"
                    >
                      {showMore ? "View Less" : "View More"}
                    </span>
                  )}
                </div>
              </div>
              <div className="second-box">
                <div className="social-icon">
                  {loading && (
                    <Space>
                      <Skeleton.Avatar
                        active
                        size
                        shape="default"
                        block={false}
                      />
                      <Skeleton.Avatar
                        active
                        size
                        shape="default"
                        block={false}
                      />
                      <Skeleton.Avatar
                        active
                        size
                        shape="default"
                        block={false}
                      />
                      <Skeleton.Avatar
                        active
                        size
                        shape="default"
                        block={false}
                      />
                      <Skeleton.Avatar
                        active
                        size
                        shape="default"
                        block={false}
                      />
                      <Skeleton.Avatar
                        active
                        size
                        shape="default"
                        block={false}
                      />
                    </Space>
                  )}
                  {!loading && (
                    <>
                      <span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                            stroke="#10B3E8"
                            strokeWidth="2.1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 9.51001L12 6.51001L15 9.51001"
                            stroke="#10B3E8"
                            strokeWidth="2.1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 6.51001V14.51"
                            stroke="#10B3E8"
                            strokeWidth="2.1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51"
                            stroke="#10B3E8"
                            strokeWidth="2.1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                            stroke="#10B3E8"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      <span>
                        <a
                          href={statsData && statsData.wiki_url}
                          target="_blank"
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              stroke="#10B3E8"
                              strokeWidth="2.1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8.0001 3H9.0001C7.0501 8.84 7.0501 15.16 9.0001 21H8.0001"
                              stroke="#10B3E8"
                              strokeWidth="2.1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15 3C16.95 8.84 16.95 15.16 15 21"
                              stroke="#10B3E8"
                              strokeWidth="2.1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                              stroke="#10B3E8"
                              strokeWidth="2.1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3 8.99998C8.84 7.04998 15.16 7.04998 21 8.99998"
                              stroke="#10B3E8"
                              strokeWidth="2.1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </span>

                      <span>
                        <a
                          href={
                            statsData &&
                            statsData.instagram_username &&
                            `https://instagram.com/${statsData.instagram_username}`
                          }
                          target="_blank"
                        >
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.1805 2.43101C15.3558 2.43101 15.7319 2.44314 16.9859 2.50036C18.1453 2.55323 18.775 2.74695 19.1941 2.90981C19.7491 3.12554 20.1453 3.38323 20.5614 3.79934C20.9776 4.2155 21.2353 4.61165 21.451 5.16673C21.6138 5.58577 21.8076 6.21544 21.8604 7.37489C21.9176 8.62884 21.9298 9.00497 21.9298 12.1802C21.9298 15.3555 21.9176 15.7316 21.8604 16.9856C21.8076 18.145 21.6138 18.7747 21.451 19.1937C21.2353 19.7488 20.9776 20.145 20.5614 20.5611C20.1453 20.9772 19.7491 21.2349 19.1941 21.4507C18.775 21.6135 18.1453 21.8072 16.9859 21.8601C15.7321 21.9173 15.356 21.9295 12.1805 21.9295C9.00501 21.9295 8.62897 21.9173 7.37515 21.8601C6.2157 21.8072 5.58603 21.6135 5.16699 21.4507C4.61191 21.2349 4.21576 20.9772 3.79965 20.5611C3.38353 20.145 3.12579 19.7488 2.91007 19.1937C2.74721 18.7747 2.55348 18.145 2.50061 16.9856C2.4434 15.7316 2.43126 15.3555 2.43126 12.1802C2.43126 9.00497 2.4434 8.62884 2.50061 7.37489C2.55348 6.21544 2.74721 5.58577 2.91007 5.16673C3.12579 4.61165 3.38349 4.2155 3.79965 3.79939C4.21576 3.38323 4.61191 3.12554 5.16699 2.90981C5.58603 2.74695 6.2157 2.55323 7.37515 2.50036C8.62911 2.44314 9.00524 2.43101 12.1805 2.43101ZM12.1805 0.28833C8.95086 0.28833 8.54589 0.30202 7.27749 0.359893C6.01173 0.417625 5.14726 0.618671 4.39084 0.912616C3.60884 1.21652 2.94566 1.62315 2.2845 2.28425C1.62339 2.9454 1.21677 3.60859 0.91291 4.39059C0.618916 5.147 0.417869 6.01146 0.360137 7.27722C0.302264 8.54562 0.288574 8.95059 0.288574 12.1802C0.288574 15.4099 0.302264 15.8149 0.360137 17.0833C0.417869 18.349 0.618916 19.2135 0.91291 19.9699C1.21677 20.7519 1.62339 21.4151 2.2845 22.0762C2.94566 22.7373 3.60884 23.144 4.39084 23.4478C5.14726 23.7418 6.01173 23.9428 7.27749 24.0006C8.54589 24.0585 8.95086 24.0721 12.1805 24.0721C15.4102 24.0721 15.8152 24.0585 17.0836 24.0006C18.3493 23.9428 19.2138 23.7418 19.9702 23.4478C20.7522 23.144 21.4154 22.7373 22.0765 22.0762C22.7376 21.4151 23.1443 20.7519 23.4482 19.9699C23.7421 19.2135 23.9432 18.349 24.0009 17.0833C24.0588 15.8149 24.0725 15.4099 24.0725 12.1802C24.0725 8.95059 24.0588 8.54562 24.0009 7.27722C23.9432 6.01146 23.7421 5.147 23.4482 4.39059C23.1443 3.60859 22.7376 2.9454 22.0765 2.28425C21.4154 1.62315 20.7522 1.21652 19.9702 0.912616C19.2138 0.618671 18.3493 0.417625 17.0836 0.359893C15.8152 0.30202 15.4102 0.28833 12.1805 0.28833Z"
                              fill="#10B3E8"
                            />
                            <path
                              d="M12.1858 6.0791C8.81313 6.0791 6.0791 8.81312 6.0791 12.1857C6.0791 15.5584 8.81313 18.2924 12.1858 18.2924C15.5584 18.2924 18.2924 15.5584 18.2924 12.1857C18.2924 8.81312 15.5584 6.0791 12.1858 6.0791ZM12.1858 16.1497C9.99652 16.1497 8.22179 14.375 8.22179 12.1857C8.22179 9.9965 9.99652 8.22178 12.1858 8.22178C14.375 8.22178 16.1498 9.9965 16.1498 12.1857C16.1498 14.375 14.375 16.1497 12.1858 16.1497Z"
                              fill="#10B3E8"
                            />
                            <path
                              d="M19.9605 5.83416C19.9605 6.62225 19.3216 7.26117 18.5335 7.26117C17.7454 7.26117 17.1064 6.62225 17.1064 5.83416C17.1064 5.04603 17.7454 4.4071 18.5335 4.4071C19.3216 4.4071 19.9605 5.04603 19.9605 5.83416Z"
                              fill="#10B3E8"
                            />
                          </svg>
                        </a>
                      </span>

                      <span>
                        <a
                          href={
                            statsData &&
                            statsData.twitter_username != null &&
                            `https://twitter.com/${statsData.twitter_username}`
                          }
                          target="_blank"
                        >
                          <svg
                            width="24"
                            height="19"
                            viewBox="0 0 24 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M23.2704 2.24421C22.4178 2.62295 21.5004 2.87801 20.5381 2.99317C21.5204 2.4042 22.2748 1.47206 22.6296 0.361364C21.7114 0.907049 20.6919 1.30202 19.609 1.51612C18.741 0.591698 17.5036 0.0135498 16.1363 0.0135498C13.5091 0.0135498 11.3789 2.14373 11.3789 4.7709C11.3789 5.14345 11.4214 5.50673 11.5026 5.85531C7.54828 5.65745 4.04307 3.76301 1.69647 0.884635C1.28682 1.58722 1.05262 2.40421 1.05262 3.27607C1.05262 4.92627 1.89124 6.38246 3.16889 7.23577C2.38824 7.21103 1.6555 6.99693 1.0132 6.64061V6.70012C1.0132 9.00576 2.65412 10.928 4.82913 11.3663C4.4303 11.4745 4.00983 11.5332 3.57622 11.5332C3.26937 11.5332 2.97102 11.5031 2.6804 11.4474C3.2856 13.3372 5.04323 14.713 7.12472 14.7517C5.49694 16.027 3.4456 16.7883 1.21648 16.7883C0.831563 16.7883 0.452832 16.7659 0.0810547 16.7211C2.1865 18.0706 4.68691 18.859 7.3736 18.859C16.1239 18.859 20.9091 11.6097 20.9091 5.32354C20.9091 5.11717 20.9052 4.91158 20.8952 4.7083C21.8258 4.03585 22.6327 3.198 23.2704 2.24421Z"
                              fill="#10B3E8"
                            />
                          </svg>
                        </a>
                      </span>

                      <span>
                        <a
                          href={statsData && statsData.discord_url}
                          target="_blank"
                        >
                          <svg
                            width="25"
                            height="19"
                            viewBox="0 0 25 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.1636 1.575C19.5701 0.845999 17.8614 0.308906 16.0749 0.00129041C16.0424 -0.00464648 16.0099 0.0101901 15.9931 0.039864C15.7733 0.429575 15.5299 0.937984 15.3595 1.33759C13.4379 1.05075 11.5262 1.05075 9.64408 1.33759C9.47359 0.929101 9.22134 0.429575 9.0006 0.039864C8.98384 0.0111802 8.95134 -0.00365641 8.9188 0.00129041C7.13324 0.307923 5.42454 0.845016 3.83014 1.575C3.81634 1.58093 3.80451 1.59083 3.79666 1.60368C0.555616 6.43162 -0.33224 11.1409 0.103313 15.7918C0.105283 15.8145 0.118094 15.8363 0.135831 15.8501C2.27418 17.4159 4.34553 18.3665 6.37842 18.9965C6.41095 19.0064 6.44542 18.9946 6.46613 18.9679C6.94701 18.3131 7.37567 17.6227 7.7432 16.8966C7.76489 16.8541 7.74419 16.8036 7.69986 16.7868C7.01993 16.5297 6.3725 16.2161 5.74972 15.86C5.70046 15.8313 5.69651 15.7611 5.74183 15.7275C5.87289 15.6295 6.00398 15.5277 6.12912 15.4248C6.15176 15.406 6.18331 15.402 6.20993 15.4139C10.3013 17.2765 14.7308 17.2765 18.7739 15.4139C18.8005 15.4011 18.8321 15.405 18.8557 15.4238C18.9809 15.5267 19.1119 15.6295 19.244 15.7275C19.2893 15.7611 19.2863 15.8313 19.2371 15.86C18.6143 16.223 17.9669 16.5297 17.2859 16.7858C17.2416 16.8027 17.2219 16.8541 17.2436 16.8966C17.619 17.6216 18.0477 18.3121 18.5197 18.9669C18.5394 18.9946 18.5749 19.0064 18.6074 18.9965C20.6501 18.3665 22.7215 17.4159 24.8598 15.8501C24.8786 15.8363 24.8904 15.8155 24.8924 15.7928C25.4136 10.4158 24.0193 5.74517 21.1961 1.60466C21.1892 1.59083 21.1774 1.58093 21.1636 1.575ZM8.35419 12.9599C7.12239 12.9599 6.10743 11.8323 6.10743 10.4475C6.10743 9.0627 7.10271 7.93511 8.35419 7.93511C9.61549 7.93511 10.6206 9.0726 10.6009 10.4475C10.6009 11.8323 9.60563 12.9599 8.35419 12.9599ZM16.6612 12.9599C15.4294 12.9599 14.4145 11.8323 14.4145 10.4475C14.4145 9.0627 15.4097 7.93511 16.6612 7.93511C17.9225 7.93511 18.9276 9.0726 18.908 10.4475C18.908 11.8323 17.9225 12.9599 16.6612 12.9599Z"
                              fill="#10B3E8"
                            />
                          </svg>
                        </a>
                      </span>
                    </>
                  )}
                </div>

                <div className="buy-now-btn">
                  {loading ? (
                    <Space>
                      <Skeleton.Button
                        active
                        size
                        shape="default"
                        block={false}
                      />
                    </Space>
                  ) : (
                    <Button>
                      Buy Now
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          fill="#E6EDF0"
                        />
                        <path
                          d="M8.47021 10.74L12.0002 14.26L15.5302 10.74"
                          stroke="#10B3E8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="volume-sales">
            <div className="volume-data">
              <div className="card-panel">
                <Card>
                  {loading && (
                    <>
                      <Skeleton.Button active size="small" block={true} />
                      <br />
                      <br />
                      <Space>
                        <Skeleton.Avatar active size="small" shape="circle" />
                        <Skeleton.Button
                          active
                          size="small"
                          shape="square"
                          block={true}
                        />
                      </Space>
                    </>
                  )}
                  {!loading && (
                    <>
                      <p className="font-white">Volume</p>
                      <h2>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.11 16.9C9.11 17.18 8.89 17.4 8.61 17.4H5.82C5.54 17.4 5.32 17.18 5.32 16.9V12.28C5.32 11.65 5.83 11.14 6.46 11.14H8.61C8.89 11.14 9.11 11.36 9.11 11.64V16.9ZM13.89 16.9C13.89 17.18 13.67 17.4 13.39 17.4H10.6C10.32 17.4 10.1 17.18 10.1 16.9V7.74C10.1 7.11 10.61 6.6 11.24 6.6H12.76C13.39 6.6 13.9 7.11 13.9 7.74V16.9H13.89ZM18.68 16.9C18.68 17.18 18.46 17.4 18.18 17.4H15.39C15.11 17.4 14.89 17.18 14.89 16.9V13.35C14.89 13.07 15.11 12.85 15.39 12.85H17.54C18.17 12.85 18.68 13.36 18.68 13.99V16.9Z"
                            fill="white"
                          />
                        </svg>
                        {statsData &&
                          `${roundNumber(statsData?.total_volume || 0, 2)}`}
                      </h2>
                    </>
                  )}
                </Card>
              </div>
              <div className="card-panel">
                <Card>
                  {loading ? (
                    <>
                      <Skeleton.Button active size="small" block={true} />
                      <br />
                      <br />
                      <Skeleton.Button active size="small" block={true} />
                    </>
                  ) : (
                    <>
                      <p className="font-white">Sales</p>
                      <h2>
                        {(statsData &&
                          `${roundNumber(statsData?.total_sales || 0, 2)}`) ||
                          0}
                      </h2>
                    </>
                  )}
                </Card>
              </div>
              <div className="card-panel">
                <Card>
                  {loading ? (
                    <>
                      <Skeleton.Button active size="small" block={true} />
                      <br />
                      <br />
                      <Skeleton.Button active size="small" block={true} />
                    </>
                  ) : (
                    <>
                      <p className="font-white">Unique Buyers</p>
                      <h2>
                        {(statsData &&
                          `${roundNumber(statsData?.unique_buyers || 0, 2)}`) ||
                          0}
                      </h2>
                    </>
                  )}
                </Card>
              </div>
              <div className="card-panel">
                <Card>
                  {loading ? (
                    <>
                      <Skeleton.Button active size="small" block={true} />
                      <br />
                      <br />
                      <Skeleton.Button active size="small" block={true} />
                    </>
                  ) : (
                    <>
                      <p className="font-white">Unique Sellers</p>
                      <h2>
                        {(statsData &&
                          `${roundNumber(
                            statsData?.unique_sellers || 0,
                            2
                          )}`) ||
                          0}
                      </h2>
                    </>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="field-data">
          <div className="right-section">
            <div className="right-panel">
              {loading && (
                <Card>
                  <Skeleton.Button
                    active
                    size={"large"}
                    shape="square"
                    block={true}
                  />
                  <Skeleton active shape="large" paragraph={{ rows: 0 }} />
                </Card>
              )}
              {loading && (
                <Card>
                  <Skeleton.Button
                    active
                    size={"large"}
                    shape="square"
                    block={true}
                  />
                  <Skeleton active shape="large" paragraph={{ rows: 0 }} />
                </Card>
              )}
              {loading && (
                <Card>
                  <Skeleton.Button
                    active
                    size={"large"}
                    shape="square"
                    block={true}
                  />
                  <Skeleton active shape="large" paragraph={{ rows: 0 }} />
                </Card>
              )}
              {loading && (
                <Card>
                  <Skeleton.Button
                    active
                    size={"large"}
                    shape="square"
                    block={true}
                  />
                  <Skeleton active shape="large" paragraph={{ rows: 0 }} />
                </Card>
              )}
              {!loading && (
                <div className="right-one data-panel">
                  <StatsWidget
                    numClass="text-primary"
                    ratioClass={
                      statsData && parseFloat(statsData.market_cap_change) > 0
                        ? "text-success"
                        : "text-danger"
                    }
                    loading={loading}
                    chartData={statsData && statsData.market_cap_history_14d}
                    name={"Market cap"}
                    price={
                      statsData &&
                      `${roundNumber(statsData?.market_cap || 0, 2)} ETH`
                    }
                    ratio={(statsData && statsData.market_cap_change) || 0}
                  />
                </div>
              )}
              {!loading && (
                <div className="right-two data-panel">
                  <StatsWidget
                    type="bar"
                    numClass="text-primary"
                    chartData={statsData && statsData.volume_history_14d}
                    ratioClass={
                      statsData && parseFloat(statsData.volume_change_30d) > 0
                        ? "text-success"
                        : "text-danger"
                    }
                    name={"Volume"}
                    price={
                      statsData &&
                      `${roundNumber(statsData?.volume_30d || 0, 2)} ETH`
                    }
                    ratio={(statsData && statsData.volume_change_30d) || 0}
                  />
                </div>
              )}

              {!loading && (
                <div className="right-three data-panel">
                  <StatsWidget
                    numClass="text-primary"
                    ratioClass={
                      statsData && parseFloat(statsData.sales_change_30d) > 0
                        ? "text-success"
                        : "text-danger"
                    }
                    chartData={statsData && statsData.sales_history_14d}
                    name={"30 Days sales"}
                    price={
                      statsData &&
                      `${roundNumber(statsData?.sales_30d || 0, 2)}`
                    }
                    showEtH={false}
                    ratio={(statsData && statsData.sales_change_30d) || 0}
                  />
                </div>
              )}
              {!loading && (
                <div className="right-four data-panel">
                  <StatsWidget
                    type="bar"
                    numClass="text-primary"
                    chartData={statsData && statsData.floor_price_history_14d}
                    ratioClass={
                      statsData && parseFloat(statsData.floor_price_change) > 0
                        ? "text-success"
                        : "text-danger"
                    }
                    name={"Floor Price"}
                    price={
                      statsData &&
                      `${roundNumber(statsData?.floor_price || 0, 2)} ETH`
                    } //first arg data.and 5 means round is per kern a Okay ab concate ETH
                    ratio={(statsData && statsData.floor_price_change) || 0}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionMain;
