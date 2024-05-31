import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, Layout, Menu, Button, Row, Col, Image as AntdImage } from "antd";
import { getStoreEquipment } from "../redux/thunks/equipmentStore";

import "./EquipmentShop.css";

const { Sider, Content } = Layout;

const EquipmentShop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detail } = useSelector((state) => state.player);
  const { loading, weapons, armors, accessories } = useSelector(
    (state) => state.store
  );
  const [message, setMessage] = useState("・・・いらっしゃい");
  const [selectedCategory, setSelectedCategory] = useState("weapons");
  const [selectedItem, setSelectedItem] = useState(null);
  const [item, setItem] = useState(null);

  //   const { loading, weapons, armors, accessories, error } = useSelector(
  //     (state) => state.equipment
  //   );

  useEffect(() => {
    dispatch(getStoreEquipment());
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedItem(null);
  };

  // 購入か販売
  const handleItem1Click = (item) => {
    setItem(item);
    if (item === "purchase") {
      setMessage("何が欲しいんだ");
    } else if (item === "sale") {
      setMessage("何を売るんだ？");
    } else {
      setMessage("");
    }
  };

  // 店を出る
  const handleOut = () => {
    navigate(-1);
  };

  const handleItem2Click = () => {
    // setSelectedItem();
  };

  // const renderItems = (items) => {
  //   return items.map((item) => (
  //     <div
  //       key={item.id}
  //       className={`item ${selectedItem?.id === item.id ? "selected" : ""}`}
  //       onClick={() => handleItemClick(item)}
  //     >
  //       {item.name}
  //     </div>
  //   ));
  // };

  // const itemsToRender =
  //   selectedCategory === "weapons"
  //     ? weapons
  //     : selectedCategory === "armors"
  //     ? armors
  //     : accessories;

  return (
    <div className="soubi-shop">
      <div style={{ padding: 2 }} />
      <Row className="money">所持金：</Row>
      <Row className="content">
        <Col span={5} className="item-select">
          {item ? (
            <>
              <Col span={24} className="no-hover">
                {item === "purchase" ? "何を買う？" : "どれを売る？"}
              </Col>
              <Col
                span={24}
                onClick={() => {
                  handleItem2Click("purchase");
                }}
              >
                武器
              </Col>
              <Col
                span={24}
                onClick={() => {
                  handleItem2Click("purchase");
                }}
              >
                防具
              </Col>
              <Col
                span={24}
                onClick={() => {
                  handleItem2Click("purchase");
                }}
              >
                アクセサリー
              </Col>
              <Col
                span={24}
                onClick={() => {
                  handleItem1Click(null);
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
                  handleItem1Click("purchase");
                }}
              >
                購入
              </Col>
              <Col
                span={24}
                onClick={() => {
                  handleItem1Click("sale");
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
        <Col span={17} className="equipment-list">
          <Row>
            <Col span={12}>
              <p>aaaaa</p>
              <p>aaaaa</p>
              <p>aaaaa</p>
              <p>aaaaa</p>
              <p>aaaaa</p>
              <p>aaaaa</p>
            </Col>
            <Col span={12}>
              <p>aaaaa</p>
              <p>aaaaa</p>
              <p>aaaaa</p>
              <p>aaaaa</p>
              <p>aaaaa</p>
              <p>aaaaa</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="foot">{message}</Row>
    </div>
  );
};

export default EquipmentShop;
