import React from "react";
import { Card, Row, Col, Layout, Image as AntdImage } from "antd";

import "./style.css";
import { formattedMoney } from "../../common/function_common/common";
import playerImage from "../../images/player_image.png";

const { Header, Sider, Content } = Layout;

const layoutStyle = {
  borderRadius: 8,
  backgroundColor: "rgba(0, 0, 0, 0)",
};

const StatusScreen = ({ data, handleCloseStatus }) => {
  if (!data) {
    return <div style={{ color: "white" }}>playerDetailがありません</div>;
  }

  console.log(data);
  const { status } = data;

  return (
    <div className="status">
      <Card
        style={{
          margin: "0 auto",
          width: "90%",
          height: "100%",
          backgroundColor: "rgba(51, 0, 0, 0.3)",
          padding: 0,
        }}
        className="status-card"
        onClick={() => {
          handleCloseStatus();
        }}
      >
        <Layout style={layoutStyle} className="status-layout">
          <Header className="head">{data?.player?.name}</Header>
          <Layout style={layoutStyle}>
            <Sider width="25%" className="side">
              <AntdImage
                src={playerImage}
                preview={false}
                style={{ width: "100%", height: "auto" }}
              />
            </Sider>
            <Sider width="10%" className="side2">
              <Col span={24}>Lv</Col>
              <Col span={24}>体力</Col>
              <Col span={24}>魔力</Col>
              <Col span={24}>所持金</Col>
            </Sider>
            <Sider width="20%" className="side3">
              <Col span={24}>{data?.player?.level}</Col>
              <Col span={24}>
                {status.hp}/{status.hp}
              </Col>
              <Col span={24}>
                {status.mp}/{status.mp}
              </Col>
              <Col span={24}>{formattedMoney(data.money)} G</Col>
            </Sider>
            <Content className="content">
              <Row style={{ height: "40%" }} className="content-1">
                <Col span={12}>現在の状態：</Col>
                <Col span={12}>普通</Col>
              </Row>
              <Row className="content-2">
                <Col span={12}>次のレベルまで</Col>
                <Col
                  span={12}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    textAlign: "right",
                  }}
                >
                  経験値を表示
                </Col>
              </Row>
            </Content>
          </Layout>
          <Layout style={layoutStyle}>
            <Sider width="45%" className="side4">
              <Row>
                <Col span={6}>武器</Col>
                <Col span={18}>{data.weapon ? data.weapon.name : "なし"}</Col>
              </Row>
              <Row>
                <Col span={6}>防具</Col>
                <Col span={18}>{data.armor ? data.armor.name : "なし"}</Col>
              </Row>
              <Row>
                <Col span={6}>アクセ</Col>
                <Col span={18}>{data.accessory.name}</Col>
              </Row>
            </Sider>
            <Content className="content2">
              <Row>
                <Col span={17}>物理攻撃力</Col>
                <Col span={7}>{status.attack}</Col>
              </Row>
              <Row>
                <Col span={17}>物理防御力</Col>
                <Col span={7}>{status.defense}</Col>
              </Row>
              <Row>
                <Col span={17}>魔法攻撃力</Col>
                <Col span={7}>{status.magicA}</Col>
              </Row>
              <Row>
                <Col span={17}>魔法防御力</Col>
                <Col span={7}>{status.magicD}</Col>
              </Row>
              <Row>
                <Col span={17}>俊敏力</Col>
                <Col span={7}>{status.agility}</Col>
              </Row>
              <Row>
                <Col span={17}>運</Col>
                <Col span={7}>{status.luck}</Col>
              </Row>
              <Row>
                <Col span={17}>経験値</Col>
                <Col span={7}>{data.experience}</Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Card>
    </div>
  );
};

export default StatusScreen;
