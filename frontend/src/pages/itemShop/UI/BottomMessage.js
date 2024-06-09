import { Col, Row } from "antd";
import React from "react";

import { storeQuote as quote } from "./text";
import { useTypewriterEffect } from "../../../common/function_common/text";
import { generateDescription } from "../../../common/function_common/equipmentStore";

const BottomMessage = ({
  item, // 選択してるアイテム obj
  selectedItem, // 選択してる左項目 str
  message, // メッセージ str
  handleBuyClick, // 購入 func
  handleSaleClick, // 売却 func
  handleQuitClick, // やめる func
}) => {
  // タイプライター
  const TypewriterText = ({ text, speed }) => {
    const displayedText = useTypewriterEffect(text, speed);
    return <div>{displayedText}</div>;
  };

  return (
    <>
      {item ? (
        <Row>
          <Col span={3}>写真</Col>
          <Col span={12}>
            <Col>{item.name}</Col>
            <Col>{item.description}</Col>
            <Col>&lt;効果&gt;</Col>
            <Col>{generateDescription(item)}</Col>
          </Col>
          <Col span={9}>
            <Col>店主</Col>
            <Col>
              <TypewriterText
                text={
                  selectedItem === "buy"
                    ? quote.buySelect
                    : quote.saleSelect
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
