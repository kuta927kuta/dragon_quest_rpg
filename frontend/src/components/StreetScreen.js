import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import StreetCard from "./UI/StreetCard";
import streetImage from "../images/street_image.png"; // 街の画像
import { getPlayerDetail } from "../redux/thunks/player";
import StatusScreen from "./UI/StatusScreen";

const StreetScreen = () => {
  const { loading } = useSelector((state) => state.all);
  const { player, detail } = useSelector((state) => state.player);
  const [showStatus, setShowStatus] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // playerDataを元にplayerDetailを読み込む（装備やアイテムや状態など）
    if (player) {
      dispatch(getPlayerDetail(player.id));
    }
  }, [player]);

  const handleGoToDungeon = () => {
    // ダンジョン選択画面に移動
    // navigate("/select_dungeons");
  };

  const handleSave = () => {
    // データの保存
    console.log("データを保存");
  };

  const handleGoToItemShop = () => {
    console.log("アイテム屋に移動");
  };

  const handleGoToEquipmentShop = () => {
    navigate("/soubi_shop");
  };

  // status画面
  const handleViewStatus = () => {
    setShowStatus(true);
  };
  // status画面閉じる
  const handleCloseStatus = () => {
    setShowStatus(false);
  };

  return (
    <div
      className="street-screen"
      style={{
        textAlign: "center",
        height: "100%",
        backgroundImage: `url(${streetImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {!showStatus ? (
        <>
          <h1 style={{ color: "white" }}>ここは街です</h1>
          <Row style={{ width: "50%" }}>
            <Col span={24}>
              <StreetCard
                description="ダンジョンに行く"
                onClick={handleGoToDungeon}
              />
            </Col>
            <Col span={24}>
              <StreetCard
                description="アイテム屋に行く"
                onClick={handleGoToItemShop}
              />
            </Col>
            <Col span={24}>
              <StreetCard
                description="装備屋に行く"
                onClick={handleGoToEquipmentShop}
              />
            </Col>
            <Col span={24}>
              <StreetCard
                description="ステータスを見る"
                onClick={handleViewStatus}
              />
            </Col>

            <Col span={24}>
              <StreetCard description="記録する" onClick={handleSave} />
            </Col>
          </Row>
        </>
      ) : (
        <StatusScreen data={detail} handleCloseStatus={handleCloseStatus} />
      )}
    </div>
  );
};

export default StreetScreen;
