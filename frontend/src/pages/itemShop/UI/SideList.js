import React from "react";
import { Col } from "antd";
import { storeQuote as quote } from "./text";

const SideList = ({
  selectedItem,
  handleCategoryClick,
  handleItemClick,
  handleOut,
}) => {
  return (
    <>
      {selectedItem === "sale" ? (
        <>
          <Col span={24} className="no-hover">
            なにを売る？
          </Col>
          {selectedItem === "sale" ? (
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
          ) : (
            <></>
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

export default SideList;
