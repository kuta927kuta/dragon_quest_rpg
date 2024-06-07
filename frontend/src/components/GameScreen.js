import React, { useState, useEffect } from "react";
import { Button, Layout } from "antd";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "./LoadingScreen";

import StartScreen from "./StartScreen";
import PlayerList from "./PlayerList";
import StreetScreen from "./StreetScreen";
import EquipmentShop from "../pages/equipmentShop";

const { Content } = Layout;

const GameScreen = () => {
  const { loading } = useSelector((state) => state.all); // storeのstate.playersの情報を取得
  const navigate = useNavigate();
  // const location = useLocation();

  return (
    <Layout style={{ minHeight: "100vh", background: "#f0f2f5" }}>
      <div>
        <Button onClick={() => navigate("/")}>タイトルに戻る</Button>
      </div>
      <Content
        style={{
          margin: "0 auto",
          width: 800,
          height: 600,
          maxHeight: 600,
          background: "black",
          marginTop: "50vh",
          transform: "translateY(-50%)",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {loading ? (
          <LoadingScreen />
        ) : (
          <Routes>
            <Route path="/" element={<StartScreen />} />
            <Route path="/players" element={<PlayerList />} />
            <Route path="/street" element={<StreetScreen />} />
            <Route path="/soubi_shop" element={<EquipmentShop />} />
          </Routes>
        )}
      </Content>
    </Layout>
  );
};

export default GameScreen;
