import React from 'react';
import { Drawer, Menu, Button } from 'antd';

// Components
import MainLogo from '../../icons/MainLogo';

const MainDrawer = ({ isDrawer, setIsDrawer }) => (
  <Drawer 
    title={
      <MainLogo />
    }
    placement="left" 
    onClose={() => setIsDrawer(!isDrawer)} 
    visible={isDrawer}
    className="drawer"
  >
    <div className="drawer-content-wrap">
      <Menu mode="vertical">
        {["Features", "Whales", "Wallets", "Resources"].map((item, index) => (
          <Menu.Item key={index.toString()}>
            {item}
          </Menu.Item>
        ))}
      </Menu>
      <div className="text-center">
        <Button type="primary" className="linear-btn">Connect Wallet</Button>
      </div>
    </div>
  </Drawer>
)

export default MainDrawer;
