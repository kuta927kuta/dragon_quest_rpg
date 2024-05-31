import React from "react";
import { Card } from "antd";

const StreetCard = ({ description, onClick }) => {
  return (
    <Card
      hoverable
      style={{
        // opacity: 0.9,
        backgroundColor: "rgba(51, 0, 0, 0.3)",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <p
        style={{
          color: "white",
        }}
      >
        {description}
      </p>
    </Card>
  );
};

export default StreetCard;
