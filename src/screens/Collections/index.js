import React from "react";
import { Layout } from "antd";
import MainHeader from "../../components/Header";
import DashboardTabs from "../../components/DashboardTabs";
import CollectionMain from "../../components/CollectionMain";
import MainFooter from "../../components/MainFooter";

const { Content } = Layout;
const Collection = () => {
  return (
    <Layout className="layout">
      <MainHeader />
      <Content className="main-content">
        <div className="container">
          <CollectionMain/>
          <DashboardTabs />
        </div>
      </Content>
      <MainFooter />
    </Layout>
  );
};

export default Collection;
