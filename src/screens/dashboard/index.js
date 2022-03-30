import React, { useContext } from 'react';
import { Layout, Row, Col } from 'antd';

// Components
import MainHeader from '../../components/Header';
import CollectionWidget from '../../components/CollectionWidget';
import StatsWidget from '../../components/StatsWidget';
import EthWidget from '../../components/EthWidget';
import { darkthemeContext } from '../../themestore/context';

const { Footer, Content } = Layout;

const Dashboard = () => {
  const { state: { darktheme } } = useContext(darkthemeContext);
  console.log({ darktheme });

  return (
    <Layout className="layout">
      {/* Main Header */}
      <MainHeader />
      {/* Main Header End */}
      {/* Main Content */}
      <Content className={"main-content"}>
        <div className="container">
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={12}>
              <CollectionWidget />
            </Col>
            <Col xs={24} lg={12}>
              <Row gutter={[32, 32]}>
                <Col xs={24} sm={12}>
                  <StatsWidget />
                </Col>
                <Col xs={24} sm={12}>
                  <StatsWidget />
                </Col>
                <Col xs={24} sm={12}>
                  <StatsWidget />
                </Col>
                <Col xs={24} sm={12}>
                  <StatsWidget />
                </Col>
              </Row>
            </Col>
            <Col xs={24}>
              <EthWidget />
            </Col>
          </Row>
        </div>
      </Content>
      {/* Main Content End */}
      {/* Footer */}
      <Footer>Footer</Footer>
      {/* Footer End */}
    </Layout>
  )
}

export default Dashboard;