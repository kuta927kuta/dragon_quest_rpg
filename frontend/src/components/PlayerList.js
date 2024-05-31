import React, { useState, useEffect } from "react";
import { Button, List, Row, Col, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import haikeiImage from "../images/players_data.jpg";
import LoadingScreen from "./LoadingScreen";
import { getPlayers } from "../redux/thunks/players";
import { setPlayer } from "../redux/thunks/player";

const PlayerList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, players } = useSelector((state) => state.players); // storeのstate.playersの情報を取得

  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    dispatch(getPlayers());
  }, []);

  // メッセージに表示するためプレイヤーをステートにセット
  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);
  };

  // プレイヤーを選択して街に移動
  const handleConfirmAdventure = () => {
    // プレイヤーをセットして街に移動
    dispatch(setPlayer(selectedPlayer));
    navigate("/street");
    setSelectedPlayer(null);
  };

  return (
    <div
      style={{
        textAlign: "center",
        height: "100%",
        backgroundImage: `url(${haikeiImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        flexDirection: "column",
        display: "flex",
        // justifyContent: "center",
      }}
    >
      <List
        dataSource={players ?? []}
        renderItem={(player) => (
          <List.Item>
            <Card
              hoverable
              style={{
                width: "70%",
                opacity: 0.9,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                cursor: "pointer",
              }}
              onClick={() => handlePlayerSelect(player)}
            >
              <Row>
                <Col span={24}>
                  <Row>Level: {player.level}</Row>
                  <Row>{player.name}</Row>
                </Col>
              </Row>
            </Card>
          </List.Item>
        )}
      />
      {selectedPlayer && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Card
            style={{
              opacity: 0.9,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <Row>
              <Col span={24}>
                <h3>このプレイヤーで冒険しますか？</h3>
                <p>
                  Player: {selectedPlayer.name} (Level: {selectedPlayer.level})
                </p>
                <Button type="primary" onClick={handleConfirmAdventure}>
                  はい
                </Button>
              </Col>
            </Row>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PlayerList;
