import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import { getStoreEquipment } from "../../redux/thunks/equipmentStore";
import {
  setPlayerDetail,
  setEquipmentBag,
  setItemBag,
  setMaterialBag,
} from "../../redux/thunks/player";
import { formattedMoney } from "../../common/function_common/common";
import ItemList from "./ItemList";
import EquipmentList from "./EquipmentList";
import BottomMessage from "./BottomMessage";

import "./style.css";
const _ = require("lodash");

const EquipmentShop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detail, itemBag, equipmentBag, materialBag } = useSelector(
    (state) => state.player
  );
  const { loading, weapons, armors, accessorys } = useSelector(
    (state) => state.equipmentStore
  );
  const [message, setMessage] = useState("・・・いらっしゃい");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [equipment, setEquipment] = useState(null);

  // 監視変数の設定
  let moneyWatch = detail?.money;
  let itemBagWatch = itemBag;
  let equipmentBagWatch = equipmentBag;
  let materialBagWatch = materialBag;

  // 各購入リストの取得
  useEffect(() => {
    dispatch(getStoreEquipment());
  }, []);

  useEffect(() => {
    console.log("aaaa");
  }, []);

  useEffect(() => {
    console.log("bbbb");
  }, []);

  // 所持金やアイテムの変更がある場合にstoreの更新
  useEffect(() => {
    console.log("所持金変更発火");
    // 数値だと変更されないらしい
    if (detail) {
      let copy = _.cloneDeep(detail);
      copy.money = moneyWatch;
      dispatch(setPlayerDetail(copy));
    }
  }, [moneyWatch]);
  // バッグの変更がある場合にstoreの更新（アイテム、装備、素材）
  useEffect(() => {
    if (itemBag) {
      let copy = _.cloneDeep(itemBag);
      copy = itemBagWatch;
      dispatch(setItemBag(copy));
    }
  }, [itemBagWatch]);
  useEffect(() => {
    if (equipmentBag) {
      let copy = _.cloneDeep(equipmentBag);
      copy = equipmentBagWatch;
      dispatch(setEquipmentBag(copy));
    }
  }, [equipmentBagWatch]);
  useEffect(() => {
    if (materialBag) {
      let copy = _.cloneDeep(materialBag);
      copy = materialBagWatch;
      dispatch(setMaterialBag(copy));
    }
  }, [materialBagWatch]);

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
    setEquipment(null);
    if (!category) {
      setSelectedItem(null);
      setMessage("・・・");
    }
    setCurrentPage(1);
  };

  // 装備選択
  const handleEquipmentClick = (equipment) => setEquipment(equipment);

  // 購入
  const handleBuyClick = () => {
    // 所持金を減らして、バッグにアイテムを追加
    console.log(equipment);
    let copy = _.cloneDeep(detail);
    if ((copy.money -= equipment.price < 0)) {
      console.log("購入できません。所持金が不足しています。");
      return;
    }
    copy.money -= equipment.price;
    dispatch(setPlayerDetail(copy));

    // moneyWatch -= equipment.price;

    setMessage("ありがとよ");
    setEquipment(null);
  };
  // 売却
  const handleSaleClick = () => {
    // 所持金を増して、バッグからアイテムを削除

    setMessage("ありがとよ");
    setEquipment(null);
  };
  const handleQuitClick = () => {
    setMessage(selectedItem === "buy" ? "ひやかしか？" : "なにをうるんだ？");
    setEquipment(null);
  };

  // 店を出る
  const handleOut = () => {
    // 保存するorPlayerListで情報読み込みを済ませる
    navigate(-1);
  };

  return (
    <div className="soubi-shop">
      <div style={{ padding: 3 }} />
      <Row className="money">
        所持金：{formattedMoney(detail?.money) ?? 0} G
      </Row>
      <Row className="content">
        <Col span={5} className="item-select">
          {/* 項目リスト選択 */}
          <ItemList
            selectedItem={selectedItem}
            handleCategoryClick={handleCategoryClick}
            handleItemClick={handleItemClick}
            handleOut={handleOut}
          />
        </Col>
        <Col span={17} className={selectedCategory ? "equipment-list" : ""}>
          {/* 店の販売リストorアイテムバッグ */}
          <EquipmentList
            selectedCategory={selectedCategory}
            handleEquipmentClick={handleEquipmentClick}
            selectedItem={selectedItem}
            weapons={weapons}
            armors={armors}
            accessorys={accessorys}
            equipmentBag={equipmentBag}
            itemBag={itemBag}
            materialBag={materialBag}
            currentPage={currentPage}
            setMessage={setMessage}
            setCurrentPage={setCurrentPage}
            setEquipment={setEquipment}
          />
        </Col>
      </Row>
      <Row className="foot">
        {/* 下部メッセージ */}
        <BottomMessage
          equipment={equipment}
          selectedItem={selectedItem}
          message={message}
          handleBuyClick={handleBuyClick}
          handleSaleClick={handleSaleClick}
          handleQuitClick={handleQuitClick}
        />
      </Row>
    </div>
  );
};

export default EquipmentShop;
