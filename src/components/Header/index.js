
import React, { useContext } from 'react';
import { Layout, Row, Col, Input, Menu, Button, Select } from 'antd';
import { MenuOutlined } from "@ant-design/icons";

// Compoents
import MainLogo from '../../icons/MainLogo';
import BottomBarIcon from '../../icons/BottomBarIcon';
import BottomBarStatsIcon from '../../icons/BottomBarStatsIcon';
import BottomBarFlashIcon from '../../icons/BottomBarFlashIcon';
import BottomBarLangIcon from '../../icons/BottomBarLangIcon';
import BottomBarMoonIcon from '../../icons/BottomBarMoonIcon';
import SearchIcon from '../../icons/SearchIcon';

// Contexts;
import { darkthemeContext } from "../../themestore/context"

const { Header } = Layout;
const { Search } = Input;
const { Option } = Select;

const MainHeader = ({ isDrawer, setIsDrawer }) => {
  const { dispatch } = useContext(darkthemeContext);

  const items = [
    {
      title: '14360684',
      icon: <BottomBarIcon />
    },
    {
      title: '$2,593',
      icon: <BottomBarStatsIcon />
    },
    {
      title: '40',
      icon: <BottomBarFlashIcon />
    }
  ]

  return (
    <div className="header-bottom-bar-wrap">
      <Header className="main-header">
        <div className="container">
          <Row gutter={[20, 20]}>
            <Col xs={8} sm={16} lg={12}>
              <div className="header-left-side">
                <a href="/" rel="noopener noreferrer" className="logo">
                  <MainLogo />
                </a>
                <Search
                  placeholder="Search Collections/Addresses/NFT..."
                  enterButton={<SearchIcon />}
                />
              </div>
            </Col>
            <Col xs={16} sm={8} lg={12}>
              <div className="header-right-side">
                <Menu mode="horizontal">
                  {["Features", "Whales", "Wallets", "Resources"].map((item, index) => (
                    <Menu.Item key={index.toString()}>
                      {item}
                    </Menu.Item>
                  ))}
                </Menu>
                <Button type="primary" shape="circle" onClick={() => setIsDrawer(!isDrawer)} className="drawer-btn" icon={<MenuOutlined />} />
                <Button type="primary" className="linear-btn">Connect Wallet</Button>
              </div>
            </Col>
          </Row>
        </div>
      </Header>
      <div className="header-bottom-bar">
        <div className="container">
          <div className='main-menu'>
            <div className='main-left-menu'>
              <ul className="left-side-menu">
                {items.map((item, index) => (
                  <li key={index}>
                    {item.icon}<span>{item.title}</span>
                  </li>)
                )}
              </ul>
            </div>
            <div className='main-right-menu'>
              <ul className="left-side-menu right-side-menu">
                <li>

                  <Select defaultValue="1" showArrow={false} dropdownClassName="lang-dropdown">
                    <Option value="1"><div className="lang-item"><BottomBarLangIcon className="this" /> <span>EN</span></div></Option>
                    <Option value="2"><div className="lang-item"><BottomBarLangIcon /> <span>GR</span></div></Option>
                  </Select>
                </li>
                <li onClick={a => dispatch({ type: "TOGGLE" })}><BottomBarMoonIcon /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MainHeader;
