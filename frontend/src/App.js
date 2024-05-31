import "./App.css";
import React from "react";
import GameScreen from "./components/GameScreen";
import { BrowserRouter } from "react-router-dom";

function App() {
  // const axiosInstance = axios.create({
  //   baseURL: "http://localhost:9000",
  //   headers: {
  //     'Content-Type': 'application/json',
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // })

  return (
    <div className="App">
      <BrowserRouter>
        <GameScreen />
      </BrowserRouter>
    </div>
  );
}

export default App;
