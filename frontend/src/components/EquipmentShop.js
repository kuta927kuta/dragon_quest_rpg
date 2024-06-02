import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { List, Layout, Pagination, Button, Row, Col, Image as AntdImage } from "antd";
import { getStoreEquipment } from "../redux/thunks/equipmentStore";
import { generateDescription } from "../common/function_common/equipmentStore";
import { formattedMoney } from "../common/function_common/common";
import { useTypewriterEffect } from "../common/function_common/text";

import "./EquipmentShop.css";

const { Sider, Content } = Layout;

const EquipmentShop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detail } = useSelector((state) => state.player);
  const { store } = useSelector((state) => state);
  const { loading, weapons, armors, accessorys } = useSelector(
    (state) => state.store
  );
  const [message, setMessage] = useState("・・・いらっしゃい");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [equipment, setEquipment] = useState(null);
  // const [list, setList] = useState([]);
  const itemsPerPage = 16;

  useEffect(() => {
    dispatch(getStoreEquipment());
  }, []);

  // useEffect(() => {
  //   // 取得できるまで画面をローディング
  //   console.log(weapons, armors, accessorys)
  // }, [store])

  const TypewriterText = ({ text, speed }) => {
    const displayedText = useTypewriterEffect(text, speed);

    return <div>{displayedText}</div>;
  };

  // 購入/販売
  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item === "buy") {
      setMessage("何が欲しいんだ");
    } else if (item === "sale") {
      setMessage("何を売るんだ？");
    } else {
      setMessage("");
    }
  };

  // 購入/売却のカテゴリー
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setEquipment(null)
    if (!category) {
      setSelectedItem(null);
      setMessage("・・・");
    }
    setCurrentPage(1)
  };

  // 装備選択
  const handleEquipmentClick = (equipment) => {
    setEquipment(equipment)
  }

  // 購入orやめる
  const handleBuyClick = (buy) => {
    if (buy) {
      setMessage("ありがとよ");
    } else {
      setMessage("何が欲しいんだ");
    }
    setEquipment(null)
  }

  // 店を出る
  const handleOut = () => {
    navigate(-1);
  };

  let list = null;
  const getPaginatedData = (category) => {
    list = category === "weapon" ? weapons : category === "armor" ? armors : accessorys
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

  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>前</a>;
    }
    if (type === 'next') {
      return <a>次</a>;
    }
    return originalElement;
  };


  return (
    <div className="soubi-shop">
      <div style={{ padding: 3 }} />
      <Row className="money">所持金：{formattedMoney(detail?.money) ?? ""} G</Row>
      <Row className="content">
        <Col span={5} className="item-select">
          {selectedItem ? (
            <>
              <Col span={24} className="no-hover">
                {selectedItem === "buy" ? "何を買う？" : "どれを売る？"}
              </Col>
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
        </Col>
        <Col span={17} className={selectedCategory ? "equipment-list" : ""}>
          {
            selectedCategory ? (
              <>
                <Row>
                  <Col span={12}>
                    <List
                      dataSource={leftColumn}
                      renderItem={item => (
                        <List.Item onClick={() => { handleEquipmentClick(item) }}>
                          <Col span={18}>{item.name}</Col>
                          <Col span={6}>{formattedMoney(item.price)} G</Col>
                        </List.Item>
                      )}
                    />
                  </Col>
                  <Col span={12}>
                    <List
                      dataSource={rightColumn}
                      renderItem={item => (
                        <List.Item onClick={() => { handleEquipmentClick(item) }}>
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
            )

          }

        </Col>
      </Row>
      <Row className="foot">{equipment ? (
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
            <Col><TypewriterText text={selectedItem === "buy" ? "それでいいのか？" : "それを売るのか？"} speed={40} /></Col>
            <Row>
              {
                selectedItem === "buy" ? (
                  <>
                    <Col onClick={() => { handleBuyClick(true) }}>購入</Col>
                    <Col onClick={() => { handleBuyClick(false) }}>やめる</Col>
                  </>
                ) : selectedItem === "sale" ? (
                  <>
                    <Col onClick={() => { handleBuyClick(true) }}>売却</Col>
                    <Col onClick={() => { handleBuyClick(false) }}>やめる</Col>
                  </>
                ) : <div />
              }

            </Row>
          </Col>
        </Row>
      ) : (
        message
      )}</Row>
    </div>
  );
};

export default EquipmentShop;
