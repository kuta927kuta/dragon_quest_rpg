import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";
import { getStoreItem } from "../../redux/features/itemStore/itemStoreThunks";
import {
  setPlayerDetail,
  setEquipmentBag,
  setItemBag,
  setMaterialBag,
} from "../../redux/features/player/playerSlice";
import { formattedMoney } from "../../common/function_common/common";
import SideList from "./UI/SideList";
import MainList from "./UI/MainList";
import BottomMessage from "./UI/BottomMessage";
import { storeQuote as quote } from "./UI/text"; // セリフ

import "./style.css";
const _ = require("lodash");

const ItemShop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { detail, itemBag, equipmentBag, materialBag } = useSelector(
    (state) => state.player
  );
  const { loading, items } = useSelector((state) => state.itemStore);
  // const { store } = useSelector((state) => state);

  const [message, setMessage] = useState(quote.welcome);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [item, setItem] = useState(null);

  // 監視変数の設定
  let moneyWatch = detail?.money;
  let itemBagWatch = itemBag;
  let equipmentBagWatch = equipmentBag;
  let materialBagWatch = materialBag;

  // 販売アイテムリストの取得
  useEffect(() => {
    dispatch(getStoreItem());
  }, []);

  // // 所持金やアイテムの変更がある場合にstoreの更新
  // useEffect(() => {
  //   console.log("所持金変更発火");
  //   // 数値だと変更されないらしい
  //   if (detail) {
  //     let copy = _.cloneDeep(detail);
  //     copy.money = moneyWatch;
  //     dispatch(setPlayerDetail(copy));
  //   }
  // }, [moneyWatch]);
  // // バッグの変更がある場合にstoreの更新（アイテム、装備、素材）
  // useEffect(() => {
  //   if (itemBag) {
  //     let copy = _.cloneDeep(itemBag);
  //     copy = itemBagWatch;
  //     dispatch(setItemBag(copy));
  //   }
  // }, [itemBagWatch]);
  // useEffect(() => {
  //   if (equipmentBag) {
  //     let copy = _.cloneDeep(equipmentBag);
  //     copy = equipmentBagWatch;
  //     dispatch(setEquipmentBag(copy));
  //   }
  // }, [equipmentBagWatch]);
  // useEffect(() => {
  //   if (materialBag) {
  //     let copy = _.cloneDeep(materialBag);
  //     copy = materialBagWatch;
  //     dispatch(setMaterialBag(copy));
  //   }
  // }, [materialBagWatch]);

  // 購入or販売か選択　item: text
  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (item === "buy") {
      setSelectedCategory(item);
      setMessage(quote.buy);
    } else if (item === "sale") {
      setMessage(quote.sale);
    } else {
      setMessage("");
    }
  };

  // 購入/売却のカテゴリー選択
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setItem(null);
    if (!category) {
      // 未選択
      setSelectedItem(null);
      setMessage(quote.question);
    }
    setCurrentPage(1);
  };

  // アイテム選択 選択されれば下のメッセージでやりとり
  const handleMainItemClick = (item) => setItem(item);

  // 購入
  const handleBuyClick = () => {
    // 所持金を減らして、バッグにアイテムを追加
    let copy = _.cloneDeep(detail);
    if ((copy.money -= item.price < 0)) {
      console.log("購入できません。所持金が不足しています。");
      return;
    }
    copy.money -= item.price;
    dispatch(setPlayerDetail(copy));

    // moneyWatch -= item.price;

    setMessage(quote.buyOk);
    setItem(null);
  };
  // 売却
  const handleSaleClick = () => {
    // 所持金を増して、バッグからアイテムを削除

    setMessage(quote.saleOk);
    setItem(null);
  };
  const handleQuitClick = () => {
    setMessage(selectedItem === "buy" ? quote.quit : quote.sale);
    setItem(null);
  };

  // 店を出る
  const handleOut = () => {
    // 保存するorPlayerListで情報読み込みを済ませる
    navigate(-1);
  };

  return (
    <div className="item-shop">
      <div style={{ padding: 3 }} />
      <Row className="money">
        所持金：{formattedMoney(detail?.money) ?? 0} G
      </Row>
      <Row className="content">
        <Col span={5} className="side-list">
          {/* 項目リスト選択 */}
          <SideList
            selectedItem={selectedItem}
            handleCategoryClick={handleCategoryClick}
            handleItemClick={handleItemClick}
            handleOut={handleOut}
          />
        </Col>
        <Col span={17} className={selectedCategory ? "main-list" : ""}>
          {/* 店の販売リストorアイテムバッグ */}
          <MainList
            selectedCategory={selectedCategory}
            handleMainItemClick={handleMainItemClick}
            selectedItem={selectedItem}
            items={items}
            equipmentBag={equipmentBag}
            itemBag={itemBag}
            materialBag={materialBag}
            currentPage={currentPage}
            setMessage={setMessage}
            setCurrentPage={setCurrentPage}
            setItem={setItem}
          />
        </Col>
      </Row>
      <Row className="foot">
        {/* 下部メッセージ */}
        <BottomMessage
          item={item}
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

export default ItemShop;
