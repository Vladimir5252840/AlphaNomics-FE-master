import React from "react";
import { Tabs } from "antd";
import Overview from "./TabsPages/Overview";
import Holders from "./TabsPages/Holders";
import Leaders from "./TabsPages/Leaders";
import Pulse from "./TabsPages/Pulse";
import SmartWhales from "./TabsPages/SmartWhales";
import Rarity from "./TabsPages/Rarity";

const { TabPane } = Tabs;

function handleChannge(key) {
  console.log(key);
}

const TabsComponent = () => (
  <Tabs defaultActiveKey="1" onChange={handleChannge}>
    <TabPane tab="Overview" key="Overview">
      <Overview />
    </TabPane>
    <TabPane tab="Holders" key="Holders">
      <Holders />
    </TabPane>
    <TabPane tab="Smart Whales" key="SmartWhales">
      <SmartWhales />
    </TabPane>
    <TabPane tab="Rarity" key="Rarity">
      <Rarity />
    </TabPane>
    <TabPane tab="P & L Leaders" key="leaders">
      <Leaders />
    </TabPane>
    <TabPane tab="Pulse (live feed)" key="Pulse">
      <Pulse />
    </TabPane>
  </Tabs>
);
export default TabsComponent;
