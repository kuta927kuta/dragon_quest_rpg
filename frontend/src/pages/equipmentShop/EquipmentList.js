import { Col, Row, List, Pagination } from "antd";
import React from "react";
import { formattedMoney } from "../../common/function_common/common";

const EquipmentList = ({
  selectedCategory,
  handleEquipmentClick,
  selectedItem,
  weapons,
  armors,
  accessorys,
  equipmentBag,
  itemBag,
  materialBag,
  currentPage,
  setMessage,
  setCurrentPage,
  setEquipment,
}) => {
  const itemsPerPage = 16;

  let list = null;
  const getPaginatedData = (category) => {
    if (selectedItem === "buy") {
      list =
        category === "weapon"
          ? weapons
          : category === "armor"
          ? armors
          : accessorys;
    } else if (selectedItem === "sale") {
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
    setMessage("何が欲しいんだ");
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

  return (
    <>
      {selectedCategory ? (
        <>
          <Row>
            <Col span={12}>
              <List
                dataSource={leftColumn}
                renderItem={(item) => (
                  <List.Item
                    onClick={() => {
                      handleEquipmentClick(item);
                    }}
                  >
                    <Col span={18}>
                      {item.name}
                      {selectedItem === "sale" ? ` x${item.quantity}` : ""}
                    </Col>
                    <Col span={6}>{formattedMoney(item.price)} G</Col>
                  </List.Item>
                )}
              />
            </Col>
            <Col span={12}>
              <List
                dataSource={rightColumn}
                renderItem={(item) => (
                  <List.Item
                    onClick={() => {
                      handleEquipmentClick(item);
                    }}
                  >
                    <Col span={18}>{item.name}</Col>
                    <Col span={6}>{formattedMoney(item.price)} G</Col>
                  </List.Item>
                )}
              />
            </Col>
          </Row>
          <div className="pagination">
            <Pagination
              current={currentPage}
              pageSize={itemsPerPage}
              total={list.length}
              onChange={handlePageChange}
              itemRender={itemRender}
            />
          </div>
        </>
      ) : (
        <div />
      )}
    </>
  );
};

export default EquipmentList;
