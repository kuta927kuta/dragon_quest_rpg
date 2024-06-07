import { Col, Row } from "antd";
import React from "react";
import { generateDescription } from "../../common/function_common/equipmentStore";
import { useTypewriterEffect } from "../../common/function_common/text";

const BottomMessage = ({
  equipment, // 選択してる装備 obj
  selectedItem, // 選択してる左項目 str
  message, // メッセージ str
  handleBuyClick, // 購入 func
  handleSaleClick, // 売却 func
  handleQuitClick, // やめる func
}) => {
  const TypewriterText = ({ text, speed }) => {
    const displayedText = useTypewriterEffect(text, speed);
    return <div>{displayedText}</div>;
  };

  return (
    <>
      {equipment ? (
        <Row>
          <Col span={3}>写真</Col>
          <Col span={12}>
            <Col>{equipment.name}</Col>
            <Col>{equipment.description}</Col>
            <Col>&lt;効果&gt;</Col>
            <Col>{generateDescription(equipment)}</Col>
          </Col>
          <Col span={9}>
            <Col>店主</Col>
            <Col>
              <TypewriterText
                text={
                  selectedItem === "buy"
                    ? "それでいいのか？"
                    : "それを売るのか？"
                }
                speed={40}
              />
            </Col>
            <Row>
              {selectedItem === "buy" ? (
                <>
                  <Col
                    onClick={() => {
                      handleBuyClick();
                    }}
                  >
                    購入
                  </Col>
                  <Col
                    onClick={() => {
                      handleQuitClick();
                    }}
                  >
                    やめる
                  </Col>
                </>
              ) : selectedItem === "sale" ? (
                <>
                  <Col
                    onClick={() => {
                      handleSaleClick();
                    }}
                  >
                    売却
                  </Col>
                  <Col
                    onClick={() => {
                      handleQuitClick();
                    }}
                  >
                    やめる
                  </Col>
                </>
              ) : (
                <div />
              )}
            </Row>
          </Col>
        </Row>
      ) : (
        message
      )}
    </>
  );
};

export default BottomMessage;
