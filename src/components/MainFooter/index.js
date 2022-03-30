import React from 'react';
import { Layout, Row, Col } from 'antd';

// Components
import MainLogo from '../../icons/MainLogo';

// Icons
import TwitterIcon from '../../icons/TwitterIcon';
import DiscordIcon from "../../icons/DiscordIcon";
import YoutubeIcon from '../../icons/YoutubeIcon';

const { Footer } = Layout;

const icons = [
  <TwitterIcon />,
  <DiscordIcon />,
  <YoutubeIcon />
]

const MainFooter = () => (
  <Footer className="main-footer">
    <div className="container">
      <div className="footer-content">
        <Row gutter={[30, 30]}>
          <Col xs={24} lg={10}>
            <a href="/" className="logo">
              <MainLogo />
            </a>
            <h3 className="join-title">Join our community</h3>
            <ul className="fooetr-social-links">
              {/* {[...Array(3)].map((item, index) => ( */}
              <li>
                <a href="/"><TwitterIcon /></a>
              </li>
              <li>
                <a href="/"><DiscordIcon /></a>
              </li>
              <li>
                <a href="/"><YoutubeIcon /></a>
              </li>
              {/* ))} */}
            </ul>
            <p style={{ fontSize: "14px", color: "#D9D9D9", fontWeight: "400" }}>Copyright 2022 Alphanomics.io - Privacy Policy</p>
          </Col>
          <Col xs={24} lg={14}>
            <Row gutter={[30, 30]}>
              <Col xs={24} md={12} lg={6}>
                <div className="footer-link-wrap">
                  <h4 className="title">Features</h4>
                  <ul className="footer-link-list">
                    {[...Array(5)].map((item, index) => (
                      <li key={index}>
                        <a href="/" className="font-w-400 font-s-16">{`Feature${index + 1}`}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6}>
                <div className="footer-link-wrap">
                  <h4 className="title">Whales</h4>
                  <ul className="footer-link-list">
                    {[...Array(3)].map((item, index) => (
                      <li key={index} >
                        <a href="/" className="font-w-400 font-s-16">{`Whale${index + 1}`}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6}>
                <div className="footer-link-wrap">
                  <h4 className="title">Wallets</h4>
                  <ul className="footer-link-list">
                    {[...Array(2)].map((item, index) => (
                      <li key={index} >
                        <a href="/" className="font-w-400 font-s-16">{`Wallet${index + 1}`}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6}>
                <div className="footer-link-wrap">
                  <h4 className="title">Resources</h4>
                  <ul className="footer-link-list">
                    {[...Array(4)].map((item, index) => (
                      <li key={index} >
                        <a href="/" className="font-w-400 font-s-16">{`Resource${index + 1}`}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  </Footer>
)

export default MainFooter;
