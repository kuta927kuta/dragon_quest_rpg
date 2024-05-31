// LoadingScreen.js
import React from "react";
import { Spin } from "antd";

const LoadingScreen = () => {
  return (
    <div
      style={{
        maxHeight: "100%",
        textAlign: "center",
        marginTop: "50vh",
        transform: "translateY(-50%)",
        backgroundColor: "black",
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default LoadingScreen;
