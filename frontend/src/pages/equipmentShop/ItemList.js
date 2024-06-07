import React from "react";
import { Col } from "antd";

const ItemList = ({
  selectedItem,
  handleCategoryClick,
  handleItemClick,
  handleOut,
}) => {
  return (
    <>
      {selectedItem ? (
        <>
          <Col span={24} className="no-hover">
            {selectedItem === "buy" ? "何を買う？" : "どれを売る？"}
          </Col>
          {selectedItem === "buy" ? (
            <>
              <Col
                span={24}
                onClick={() => {
                  handleCategoryClick("weapon");
                }}
              >
                武器
              </Col>
              <Col
                span={24}
                onClick={() => {
                  handleCategoryClick("armor");
                }}
              >
                防具
              </Col>
              <Col
                span={24}
                onClick={() => {
                  handleCategoryClick("accessory");
                }}
              >
                アクセサリー
              </Col>
            </>
          ) : (
            <>
              <Col
                span={24}
                onClick={() => {
                  handleCategoryClick("equipment");
                }}
              >
                装備
              </Col>
              <Col
                span={24}
                onClick={() => {
                  handleCategoryClick("item");
                }}
              >
                アイテム
              </Col>
              <Col
                span={24}
                onClick={() => {
                  handleCategoryClick("material");
                }}
              >
                素材
              </Col>
            </>
          )}
          <Col
            span={24}
            onClick={() => {
              handleCategoryClick(null);
            }}
          >
            やめる
          </Col>
        </>
      ) : (
        <>
          <Col
            span={24}
            onClick={() => {
              handleItemClick("buy");
            }}
          >
            購入
          </Col>
          <Col
            span={24}
            onClick={() => {
              handleItemClick("sale");
            }}
          >
            販売
          </Col>
          <Col
            span={24}
            onClick={() => {
              handleOut();
            }}
          >
            店を出る
          </Col>
        </>
      )}
    </>
  );
};

export default ItemList;
