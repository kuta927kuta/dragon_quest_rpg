import { Col, Row, List, Pagination, Card } from "antd";
import React from "react";
import { formattedMoney } from "../../../common/function_common/common";
import { storeQuote as quote } from "./text";
import goldImage from "../../../images/gold.png";

const MainList = ({
  selectedCategory,
  selectedItem,
  items,
  equipmentBag,
  itemBag,
  materialBag,
  currentPage,
  // func
  handleMainItemClick,
  // state
  setMessage,
  setCurrentPage,
  setEquipment,
}) => {
  const itemsPerPage = 16;

  let list = null;
  // 表示するリストアイテムをlistにいれる
  const getPaginatedData = (category) => {
    if (selectedItem === "buy") {
      console.log("あああああ");
      list = items;
    } else if (selectedItem === "sale") {
      console.log("いいいいい");
      list =
        category === "equipment"
          ? equipmentBag
          : category === "item"
          ? itemBag
          : materialBag;
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    return list?.slice(startIndex, startIndex + itemsPerPage);
  };
  const paginatedList = getPaginatedData(selectedCategory);
  const leftColumn = paginatedList?.slice(0, 8);
  const rightColumn = paginatedList?.slice(8);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setEquipment(null);
    setMessage(quote.buy);
  };

  // ページネーションsetting
  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>前</a>;
    }
    if (type === "next") {
      return <a>次</a>;
    }
    return originalElement;
  };

  const chunkItems = (items, size) => {
    const chunks = [];
    for (let i = 0; i < items.length; i += size) {
      chunks.push(items.slice(i, i + size));
    }
    return chunks;
  };

  const chunkedItems = chunkItems(items, 2);
  console.log(chunkedItems);

  return (
    <>
      {selectedCategory ? (
        <>
          <Row>
            <Col span={24} style={{ maxHeight: "340px", overflowY: "scroll" }}>
              <List
                dataSource={chunkedItems}
                renderItem={(chunk) => (
                  <List.Item>
                    <Row style={{ width: "100%" }}>
                      {chunk.map((item, index) => (
                        <Card style={{ width: "calc(50% - 10px)" }}>
                          <Row>
                            <Col span={5}>写真</Col>
                            <Col span={19}>
                              <Col span={24}>{item.name}</Col>
                              <Col span={24}>
                                <Row>
                                  <Col span={9}></Col>
                                  <Col
                                    span={12}
                                    style={{ background: "black" }}
                                  >
                                    {formattedMoney(item.price)}
                                  </Col>
                                  <Col span={3}>
                                    <img
                                      src={goldImage}
                                      alt="ゴールド画像"
                                      style={{
                                        width: "auto",
                                        height: "17px",
                                        objectFit: "cover",
                                        paddingTop: 5,
                                      }}
                                    />
                                  </Col>
                                </Row>
                              </Col>
                            </Col>
                          </Row>
                          {/* <Col span={12}>{item.name}</Col>
                          <Col span={12}>{formattedMoney(item.price)} G</Col> */}
                        </Card>
                      ))}
                    </Row>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </>
      ) : (
        <div />
      )}
    </>
  );
};

export default MainList;
