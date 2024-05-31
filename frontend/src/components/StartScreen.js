import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import topImage from "../images/top_image.jpg"; // 画像のインポート

const StartScreen = () => {
  const navigate = useNavigate();

  // ゲームスタート PlayerListへ遷移
  const handleStartGame = () => {
    navigate("/players");
  };

  return (
    <div
      className="start-screen"
      style={{
        textAlign: "center",
        height: "100%",
        backgroundImage: `url(${topImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Welcome to My RPG Game!</h1>
      <div>
        <Button
          type="primary"
          size="large"
          onClick={handleStartGame}
          style={{ flex: "none" }}
        >
          Start Game
        </Button>
      </div>
    </div>
  );
};

export default StartScreen;
