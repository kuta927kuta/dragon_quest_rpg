import React, { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import StreetCard from "./UI/StreetCard";
import streetImage from "../images/street_image.png"; // 街の画像
import {
  getPlayerDetail,
  getItemBag,
  getEquipmentBag,
  getMaterialBag,
} from "../redux/thunks/player";
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
      dispatch(getItemBag(player.id));
      dispatch(getEquipmentBag(player.id));
      dispatch(getMaterialBag(player.id));
    }
  }, [player]);

  const handleGoToDungeon = () => navigate("/select_dungeons");
  const handleSave = () => console.log("データを保存");
  const handleGoToItemShop = () => console.log("アイテム屋に移動");
  const handleGoToEquipmentShop = () => navigate("/soubi_shop");
  const handleViewStatus = () => setShowStatus(true);
  const handleCloseStatus = () => setShowStatus(false);

  const actions = [
    { description: "ダンジョンに行く", onClick: handleGoToDungeon },
    { description: "アイテム屋に行く", onClick: handleGoToItemShop },
    { description: "装備屋に行く", onClick: handleGoToEquipmentShop },
    { description: "ステータスを見る", onClick: handleViewStatus },
    { description: "記録する", onClick: handleSave },
  ];

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
            {actions.map((action, index) => (
              <Col key={index} span={24}>
                <StreetCard
                  description={action.description}
                  onClick={action.onClick}
                />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <StatusScreen data={detail} handleCloseStatus={handleCloseStatus} />
      )}
    </div>
  );
};

export default StreetScreen;
