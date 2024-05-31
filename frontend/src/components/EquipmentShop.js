import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchEquipment } from "../actions/equipmentActions";

import haikeiImage from "../images/shop_soubi.png";

const EquipmentShop = () => {
  const dispatch = useDispatch();
  //   const { loading, weapons, armors, accessories, error } = useSelector(
  //     (state) => state.equipment
  //   );

  useEffect(() => {
    // dispatch(fetchEquipment());
  }, [dispatch]);

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  //   if (error) {
  //     return <div>Error: {error}</div>;
  //   }

  return (
    <div
      className="soubi-shop"
      style={{
        // textAlign: "center",
        height: "100%",
        backgroundImage: `url(${haikeiImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2>Equipment Shop</h2>
      <h3>Weapons</h3>
      {/* <ul>
        {weapons.map((weapon) => (
          <li key={weapon.id}>{weapon.name}</li>
        ))}
      </ul>
      <h3>Armors</h3>
      <ul>
        {armors.map((armor) => (
          <li key={armor.id}>{armor.name}</li>
        ))}
      </ul>
      <h3>Accessories</h3>
      <ul>
        {accessories.map((accessory) => (
          <li key={accessory.id}>{accessory.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default EquipmentShop;
