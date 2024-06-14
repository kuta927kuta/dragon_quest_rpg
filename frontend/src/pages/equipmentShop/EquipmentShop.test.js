import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";
import EquipmentShop from "./EquipmentShop";
import { getStoreEquipment } from "../../redux/thunks/equipmentStore";
import {
  setPlayerDetail,
  setItemBag,
  setEquipmentBag,
  setMaterialBag,
} from "../../redux/thunks/player";

const mockStore = configureStore([]);
jest.mock("../../redux/thunks/equipmentStore", () => ({
  getStoreEquipment: jest.fn(),
}));
jest.mock("../../redux/thunks/player", () => ({
  setPlayerDetail: jest.fn(),
  setItemBag: jest.fn(),
  setEquipmentBag: jest.fn(),
  setMaterialBag: jest.fn(),
}));
jest.mock("./ItemList", () => jest.fn(() => <div>ItemList</div>));
jest.mock("./EquipmentList", () => jest.fn(() => <div>EquipmentList</div>));
jest.mock("./BottomMessage", () => jest.fn(() => <div>BottomMessage</div>));

describe("EquipmentShop", () => {
  let store;
  let initialState;

  beforeEach(() => {
    initialState = {
      player: {
        detail: { money: 1000 },
        itemBag: [],
        equipmentBag: [],
        materialBag: [],
      },
      equipmentStore: {
        loading: false,
        weapons: [],
        armors: [],
        accessorys: [],
      },
    };
    store = mockStore(initialState);
  });

  test("renders EquipmentShop component", () => {
    render(
      <Provider store={store}>
        <Router>
          <EquipmentShop />
        </Router>
      </Provider>
    );

    expect(screen.getByText("所持金：1,000 G")).toBeInTheDocument();
    expect(screen.getByText("ItemList")).toBeInTheDocument();
    expect(screen.getByText("EquipmentList")).toBeInTheDocument();
    expect(screen.getByText("BottomMessage")).toBeInTheDocument();
  });

  test("dispatches getStoreEquipment on mount", () => {
    render(
      <Provider store={store}>
        <Router>
          <EquipmentShop />
        </Router>
      </Provider>
    );

    expect(getStoreEquipment).toHaveBeenCalled();
  });

  test("handles item click for buy", () => {
    render(
      <Provider store={store}>
        <Router>
          <EquipmentShop />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByText("ItemList"));
    // Implement more specific checks depending on how ItemList behaves
  });

  test("handles item click for sell", () => {
    render(
      <Provider store={store}>
        <Router>
          <EquipmentShop />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByText("ItemList"));
    // Implement more specific checks depending on how ItemList behaves
  });

  test("handles buy click", () => {
    initialState = {
      ...initialState,
      player: {
        ...initialState.player,
        detail: { money: 1000 },
      },
    };
    store = mockStore(initialState);
    const equipment = { price: 200 };

    render(
      <Provider store={store}>
        <Router>
          <EquipmentShop />
        </Router>
      </Provider>
    );

    // Mock selected equipment
    fireEvent.click(screen.getByText("BottomMessage"));

    // Implement the purchase logic and assert state updates
  });

  test("handles sale click", () => {
    render(
      <Provider store={store}>
        <Router>
          <EquipmentShop />
        </Router>
      </Provider>
    );

    // Mock selected equipment for sale
    fireEvent.click(screen.getByText("BottomMessage"));

    // Implement the sale logic and assert state updates
  });

  test("handles quit click", () => {
    render(
      <Provider store={store}>
        <Router>
          <EquipmentShop />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByText("BottomMessage"));
    // Implement quit logic and assert state updates
  });

  test("handles out click", () => {
    render(
      <Provider store={store}>
        <Router>
          <EquipmentShop />
        </Router>
      </Provider>
    );

    fireEvent.click(screen.getByText("ItemList"));
    // Implement out logic and assert navigation
  });
});
